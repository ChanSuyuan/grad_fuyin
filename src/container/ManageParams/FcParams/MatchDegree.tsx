/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Table, Form, Card, Alert } from 'antd';
import { IAdminGetMatchDegreeFeedBack, IMatchDegree } from '../model/adminParams';
import { adminParamsApi } from '../api/adminParams';

const transFormDegree: any = {
  0: '较弱',
  1: '一般',
  2: '较强'
}

export const MatchDegree = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState<boolean>(false)

  const [store, setStore] = useState<IAdminGetMatchDegreeFeedBack>()
  useEffect(() => {
    getMatchDegree()
  }, [])

  const getMatchDegree = async () => {
    setLoading(true)
    try {
      const res = await adminParamsApi.getMatchDegree()
      setStore(res)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      editable: false,
      align: 'center' as 'center'
    },
    {
      title: '偿债能力',
      dataIndex: 'cznl',
      key: 'cznl',
      width: '15%',
      editable: true,
      align: 'center' as 'center',
      render: (_: any, v: IMatchDegree) => {
        return (
          <span>{transFormDegree[v.cznl]}</span>
        )
      }
    },
    {
      title: '盈利能力',
      dataIndex: 'ylnl',
      key: 'ylnl',
      width: '15%',
      editable: true,
      align: 'center' as 'center',
      render: (_: any, v: IMatchDegree) => {
        return (
          <span>{transFormDegree[v.ylnl]}</span>
        )
      }
    },
    {
      title: '企业资产与融资金额比例',
      dataIndex: 'bz',
      key: 'bz',
      width: '25%',
      editable: true,
      align: 'center' as 'center'
    },
    {
      title: '融资能力与融资需求匹配度',
      dataIndex: 'ppd',
      key: 'ppd',
      width: '25%',
      editable: true,
      align: 'center' as 'center'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center' as 'center',
    },
  ];

  return (
    <>
      <Card title='融资匹配度参数'>
        <Alert type='info'
          message={<strong>填写规则</strong>}
          description={
            <>
              <strong>企业资产与融资金额比例</strong>
              <ul>
                <li>
                  <span>对于仅大于某一值，仅填{' > x '}，例如{' > 1 '}。</span>
                </li>
                <li>
                  <span>对于范围类似于{' 0.5 < x < 1 '}等数值，在输入时请使用{' - '}字符。例如 {' 0.5 - 1 '}。</span>
                </li>
                <li>
                  <span>对于仅小于某一值，需填{' x < y '}，例如{' x < 0.5 '}。</span>
                </li>
              </ul>
              <strong>融资能力与融资需求匹配度</strong>
              <ul>
                <li>
                  <span>可以填写小数例如 0.5 。</span>
                </li>
                <li>
                  <span>可以填写百分数例如 50% 。</span>
                </li>
              </ul>
            </>
          }
        />
        <Form form={form} component={false}>
          <Table
            style={{ marginTop: 10, textAlign: 'center' }}
            bordered
            size='small'
            loading={loading}
            dataSource={store?.data}
            columns={columns}
            pagination={{
              pageSize: 5
            }}
          />
        </Form>
      </Card>
    </>
  );
};
