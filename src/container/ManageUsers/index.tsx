import { Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { superAdminUsersApi } from '../ManageCharacters/api/superAdminUsers'
import { adminUsersApi } from './api/adminUsers'
import { IAllUsersFB } from './model/adminUser'

export const ManageUsers: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [store, setStore] = useState<IAllUsersFB>()

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
          setStore(res)
        } else if (type === '2') {
          const res = await superAdminUsersApi.getAllUser()
          setStore(res)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Table
        pagination={{ pageSize: 5 }}
        size='middle'
        loading={loading}
        dataSource={store.data}
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
          }
        ]}
      />
    </Card>
  )
}