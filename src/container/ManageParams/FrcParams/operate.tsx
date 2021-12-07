/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Form, Input, message, Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { statusCode } from "../../../common/model/statusCode";
import { adminParamsApi } from "../api/adminParams";
import { IRiskZb } from "../model/adminParams";
interface Item {
  key: string;
  zbName: string;
  bbz: string;
  fss: zdyzbFzs[];
}

interface zdyzbFzs {
  zbKey?: string
  normal?: number
  unnormal?: number
}


const originData: Item[] = [];
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text' | 'fssInput';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `请输入${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const Operate = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const Formdata: Item[] = []
  const [resStore, setResStore] = useState<IRiskZb>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    loadPage()
  }, [])

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ zbName: '', bbz: '', fss: [], ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };


  const loadPage = () => {
    const userType = localStorage.getItem('user_type')
    try {
      setLoading(true)
      if (userType === '1') {
        adminParamsApi.getRiskZb()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setResStore(res)
            }
          })
      }
    } catch (err) {
      message.error('发生了意想不到的问题！')
    } finally {
      setLoading(false)
    }
  }

  const save = async (key: string) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const saveData = (record: Item) => {
    Formdata.push(record)
    console.log(Formdata)
  }

  const columns = [
    {
      title: '指标名称',
      dataIndex: 'zbName',
      width: '20%',
      editable: false,
      align: 'center' as 'center'
    },
    {
      title: '标准值设置',
      dataIndex: 'bbz',
      width: '20%',
      editable: true,
      align: 'center' as 'center'
    },
    {
      title: '结果设定',
      dataIndex: 'fss',
      width: '40%',
      align: 'center' as 'center',
      editable: true,
      children: [
        {
          title: '正常',
          dataIndex: 'normal',
          key: 'normal',
          width: '20%',
          align: 'center' as 'center',
          editable: true,
        },
        {
          title: '不正常',
          dataIndex: 'unnormal',
          key: 'unnormal',
          width: '20%',
          align: 'center' as 'center',
          editable: true,
        },
      ]
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center' as 'center',
      render: (_: any, record: Item) => {
        saveData(record)
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              保存
            </Typography.Link>
            <Popconfirm title="确认取消编辑吗" onConfirm={cancel} cancelText='取消' okText='确认'>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            编辑
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable || !col.children) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Card title='运营能力配置'>
      <Form form={form} component={false} style={{ padding: '12px' }}>
        <Table
          loading={loading}
          size='middle'
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Form>
      <div className='submit-btn' style={{ textAlign: 'center', marginTop: 20 }}>
        <Button type='primary' size='middle' htmlType='submit' style={{ width: 180 }} >提交</Button>
      </div>
    </Card>
  );
};