/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Col, Form, Input, message, Modal, Row, Table } from "antd";
import _ from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { statusCode } from "../../../common/model/statusCode";
import { IZdyzb, IZdyzbFzs } from "../model/adminParams";
import { customRiskParamsApi, IFxbsData } from "./api/customRisk";
import { transForm } from "./transform";
interface Item {
  key: string
  zbName?: string
  bbz?: string
  normal?: number[]
  unnormal?: number[]
}
interface OtherItem {
  key: string
  zfz?: string
  fxd?: string
  jy?: string
  type?: number
}


export const Score: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const [otherLoading, setOtherLoading] = useState<boolean>(false)
  const history = useHistory()

  const [resdata, setResData] = useState<Item[]>()
  const [otherdata, setOtherData] = useState<OtherItem[]>()

  const [modifyVisible, handleModifyVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<Item>()
  const [otherCurrentRow, setOtherCurrentRow] = useState<OtherItem>()
  const [modifyOtherVisible, handleOtherModifyVisible] = useState<boolean>(false)

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = () => {
    const userType = localStorage.getItem('user_type')
    try {
      setOtherLoading(true)
      if (userType === '1') {
        customRiskParamsApi.getfxbs()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setOtherData(otherOriginData(res.data))
              setOtherLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
      } else {
        customRiskParamsApi.superAdminGetfxbs()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setOtherData(otherOriginData(res.data))
              setOtherLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
      }
    } catch (err) {
      message.error('发生了意想不到的问题！')
    }
  }

  const otherOriginData = (store: IFxbsData[]) => {
    const otherOriginData: OtherItem[] = []
    store.map((item, i) => {
      if (item.type === 4) {
        otherOriginData.push(
          {
            zfz: item.zfz,
            fxd: item.fxd ? item.fxd : "-",
            key: `otherOrigin${i}`,
            jy: item.jy ? item.jy : "-"
          }
        )
      }
    })
    return otherOriginData
  }

  const handleOtherUpdate = () => {
    const zfz = form.getFieldValue('zfz')
    const fxd = form.getFieldValue('fxd')
    const jy = form.getFieldValue('jy')
    const updateArr = _.cloneDeep(otherdata)


    console.log(updateArr)
  }

  const OtherUpdateForm = (record: OtherItem) => {
    return (
      <Modal
        title={<strong>配置修改</strong>}
        width={1040}
        visible={modifyOtherVisible}
        destroyOnClose
        cancelText='取消'
        okText='提交修改'
        centered
        key='modify'
        onCancel={() => {
          handleOtherModifyVisible(false)
          setOtherCurrentRow(undefined)
        }}
        onOk={() => {
          handleOtherModifyVisible(false)
          setOtherCurrentRow(undefined)
          handleOtherUpdate()
        }}
      >
        <Form
          layout='vertical'
          form={form}
          key='modifyOperateZb'
          colon={false}
          style={{ padding: '12px' }}
        >
          <FormItem
            label='营运能力总分'
            name='zfz'
            key='formzfz'
          >
            <Input style={{ width: '200px' }} />
          </FormItem>
          <FormItem
            label='存在的风险点'
            name='fxd'
            key='formfxd'
          >
            <Input.TextArea style={{ width: '400px' }} />
          </FormItem>
          <FormItem
            label='风险控制建议'
            name='jy'
            key='formjy'
          >
            <Input.TextArea style={{ width: '400px' }} />
          </FormItem>
        </Form>
      </Modal>
    )
  }

  const FormItem = Form.Item
  return (
    <>
      <Card title='总分内容配置' style={{ marginTop: 20, height: '400px' }}>
        <Table
          bordered={true}
          loading={otherLoading}
          size='small'
          pagination={{ pageSize: 5 }}
          dataSource={otherdata}
          columns={[
            {
              title: '营运能力总分',
              dataIndex: 'zfz',
              key: 'zfz',
              align: 'center',
              width: '20%',
            },
            {
              title: '存在的风险点',
              dataIndex: 'fxd',
              key: 'fxd',
              width: '20%',
              align: 'center'
            },
            {
              title: '风险控制建议',
              dataIndex: 'jy',
              key: 'jy',
              width: '20%',
              align: 'center'
            },
            {
              title: '操作',
              dataIndex: 'operate',
              key: 'operate',
              align: 'center',
              width: '20%',
              render: (_: any, record: Item) => (
                <Fragment>
                  <a
                    key='operate'
                    onClick={() => {
                      handleOtherModifyVisible(true)
                      setOtherCurrentRow(record)
                    }}
                  >
                    配置
                  </a>
                </Fragment>
              )
            }
          ]}
        />
      </Card>
      {otherCurrentRow && <OtherUpdateForm key={otherCurrentRow.key} zfz={otherCurrentRow.zfz} type={otherCurrentRow.type} fxd={otherCurrentRow.fxd} jy={otherCurrentRow.jy} />}
    </>
  );
};