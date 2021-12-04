import { message, Table } from "antd"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { statusCode } from "../../common/model/statusCode"
import { recordApi } from "./api/record"
import { IRecordInfo } from "./model/record"


export const FrcRecord = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [res, setRes] = useState<IRecordInfo[]>()
  const history = useHistory()
  const userType = localStorage.getItem('user_type')
  useEffect(() => {
    getRes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getRes = async () => {
    setLoading(true)
    try {
      if (userType === '0') {
        const res = await recordApi.getRecordInfo(0)
        if (res.errorCode === statusCode.tokenIsNotVaild) {
          message.error('登录信息过期，请重新登陆！')
          history.push('/login')
        }
        setRes(res.data)
      } else if (userType === '1') {
        const res = await recordApi.adminGetRecordInfo(0)
        if (res.errorCode === statusCode.tokenIsNotVaild) {
          message.error('登录信息过期，请重新登陆！')
          history.push('/loginadmin')
        }
        setRes(res.data)
      } else if (userType === '2') {
        const res = await recordApi.superAdminGetRecordInfo(0)
        if (res.errorCode === statusCode.tokenIsNotVaild) {
          message.error('登录信息过期，请重新登陆！')
          history.push('/loginadmin')
        }
        setRes(res.data)
      }
    } catch (err) {
      message.error('出现了意想不到的问题', err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, margin: 0, height: 350, background: "#fff" }} >
        <Table
          size="small"
          loading={loading}
          dataSource={res}
          pagination={{ pageSize: 5 }}
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
