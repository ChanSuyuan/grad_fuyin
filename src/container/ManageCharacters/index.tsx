import { Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminUsersApi } from './api/adminUsers'
import { superAdminUsersApi } from './api/superAdminUsers'
import { IAllUsersFB } from './model/adminUser'

export const ManageCharacters: React.FC = () => {
  const [store, setStore] = useState<IAllUsersFB>()
  const [loading, setLoading] = useState<boolean>(false)
  const type = localStorage.getItem('user_type')

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = async () => {
    try {
      setLoading(true)
      if (type === "1") {
        const res = await adminUsersApi.getAllUser()
        setStore(res)
      } else if (type === "2") {
        const res = await superAdminUsersApi.getAllUser()
        setStore(res)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="角色管理">
      <Table
        size='middle'
        loading={loading}
        dataSource={store.data}
        pagination={{ pageSize: 10 }}
        key='ManageCharacters'
        columns={[
          {
            title: "用户名",
            dataIndex: 'userName',
            key: 'userName',
            align: 'center'
          },
          {
            title: "角色",
            dataIndex: 'type',
            key: 'type',
            align: 'center'
          }
        ]}
      />
    </Card>
  )
}