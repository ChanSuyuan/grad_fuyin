import { message, Table } from "antd"
import React, { useEffect, useState } from "react"
import { recordApi } from "./api/record"
import { IRecordInfo } from "./model/record"


export const FrcRecord = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [res, setRes] = useState<IRecordInfo[]>()
  useEffect(() => {
    getRes()
  }, [])
  const getRes = async () => {
    setLoading(true)
    try {
      const res = await recordApi.getRecordInfo(0)
      setRes(res.data)
    } catch (err) {
      message.error('出现了意想不到的问题', err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, background: "#fff" }} >
        <Table
          size="small"
          loading={loading}
          dataSource={res}
          columns={[
            {
              title: '标题',
              dataIndex: 'title',
              width: 300,
              align: 'center'
            },
            {
              title: '时间',
              dataIndex: 'createTime',
              align: 'center'
            },
            {
              title: '操作',
              key: 'handle',
              align: 'center'
            }
          ]}
        />
      </div>
    </>
  )
}
