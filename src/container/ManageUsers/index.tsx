import { Card, message, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { superAdminUsersApi } from '../ManageCharacters/api/superAdminUsers'
import { IAllUsersInfo } from '../ManageCharacters/model/adminUser'
import { adminUsersApi } from './api/adminUsers'
import UpdateForm, { FormValueType } from './components/UpdateForm'

export const ManageUsers: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [store, setStore] = useState<IAllUsersInfo[]>()
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<IAllUsersInfo>()

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = async () => {
    try {
      const type = localStorage.getItem('user_type')
      if (type) {
        setLoading(true)
        if (type === '1') {
          const res = await adminUsersApi.getAllUser()
          setStore(res.data)
        } else if (type === '2') {
          const res = await superAdminUsersApi.getAllUser()
          setStore(res.data)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (fields: FormValueType, currentRow?: IAllUsersInfo) => {
    const hide = message.loading('正在配置中')
    console.log('sss')
    try {
      await adminUsersApi.modifyUsrs({
        ...currentRow,
        ...fields
      })
      hide()
      message.success('配置成功')
      return true
    } catch (err) {
      hide()
      message.error('配置失败请重试！');
      return false;
    }
  }


  return (
    <Card>
      <Table
        pagination={{ pageSize: 5 }}
        size='middle'
        loading={loading}
        dataSource={store}
        rowKey="Users"
        bordered={true}
        columns={[
          {
            title: "用户名",
            dataIndex: 'userName',
            key: 'userName',
            align: 'center'
          },
          {
            title: "爱好",
            dataIndex: 'hobby',
            key: 'hobby',
            align: 'center'
          },
          {
            title: "邮箱",
            dataIndex: 'email',
            key: 'email',
            align: 'center'
          },
          {
            title: "密码",
            dataIndex: 'password',
            key: 'password',
            align: 'center'
          },
          {
            title: "状态",
            dataIndex: 'state',
            key: 'state',
            align: 'center'
          },
          {
            title: "用户角色",
            dataIndex: 'type',
            key: 'type',
            align: 'center'
          },
          {
            title: "操作",
            dataIndex: 'operate',
            key: 'operate',
            align: 'center',
            render: (_: any, record: IAllUsersInfo) => [
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key='operate'
                onClick={() => {
                  handleUpdateModalVisible(true)
                  setCurrentRow(record)
                }}
              >
                配置
              </a>
            ]
          }
        ]}
      />
      <UpdateForm
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        onSubmit={async (value) => {
          const success = await handleUpdate(value, currentRow)
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            loadPage()
          }
        }
        }
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />
    </Card>
  )
}