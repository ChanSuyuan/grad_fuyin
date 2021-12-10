import { Card, Table } from "antd"
import React, { Fragment, useEffect, useState } from "react"
import { adminSystemApi } from "./api/admin"
import { superAdminSystemApi } from "./api/superAdmin"
import { ILog } from "./model/admin"

export const SystemLog: React.FC = () => {
  const [store, setStore] = useState<ILog[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const type = localStorage.getItem('user_type')
  const loadPage = async () => {
    setLoading(true)
    try {
      if (type === '1') {
        const res = await adminSystemApi.getSystemParams()
        setStore(res.data)
      } else if (type === '2') {
        const res = await superAdminSystemApi.getSystemParams()
        setStore(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <Card title='操作日志'>
        <Table
          bordered={true}
          size='middle'
          loading={loading}
          dataSource={store}
          columns={[
            {
              title: '用户名',
              key: 'userName',
              dataIndex: 'userName',
              align: 'center'
            },
            {
              title: 'IP地址',
              key: 'ip',
              dataIndex: 'ip',
              align: 'center'
            },
            {
              title: '类型',
              key: 'type',
              dataIndex: 'type',
              align: 'center'
            },
            {
              title: '操作时间',
              key: 'operationTime',
              dataIndex: 'operationTime',
              align: 'center'
            },
            {
              title: '描述',
              key: 'description',
              dataIndex: 'description',
              align: 'center'
            },
            {
              title: '结果',
              key: 'result',
              dataIndex: 'result',
              align: 'center'
            }
          ]}
        />
      </Card>
    </Fragment>
  )
}