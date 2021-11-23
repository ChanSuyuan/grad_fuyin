import { Table } from "antd"
import React from "react"


export class MyRecord extends React.Component {


  getTableConfig() {
    const columns = [
      {
        title: '编号',
        dataIndex: 'id'
      },
      {
        title: '标题',
        dataIndex: 'title'
      },
      {
        title: '时间',
        dataIndex: 'time'
      },
      {
        title: '操作',
        key: 'handle'
      }
    ]

    const tableConfig = {
      columns
    }
    return tableConfig

  }

  render() {

    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, background: "#fff" }}>
          <Table {...this.getTableConfig()} />
        </div>
      </>
    )
  }
}
