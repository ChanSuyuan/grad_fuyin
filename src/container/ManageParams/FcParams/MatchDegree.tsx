/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import { Table, Form, Card, Alert, message, Modal, Row, Col, Input, Radio } from 'antd';
import { IAdminGetMatchDegreeFeedBack, IMatchDegree } from '../model/adminParams';
import { adminParamsApi } from '../api/adminParams';
import { statusCode } from '../../../common/model/statusCode';
import { useHistory } from 'react-router';

const transFormDegree: any = {
  0: <div style={{ color: 'red' }}>较弱</div>,
  1: <div style={{ color: 'yellow' }}>一般</div>,
  2: <div style={{ color: 'green' }}>较强</div>,
}

const FormItem = Form.Item
const RadioGroup = Radio.Group

export const MatchDegree = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState<boolean>(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<IMatchDegree>()
  const [store, setStore] = useState<IAdminGetMatchDegreeFeedBack>()
  const history = useHistory()
  const userType = localStorage.getItem('user_type')

  useEffect(() => {
    getMatchDegree()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMatchDegree = async () => {
    setLoading(true)
    try {
      if (userType === '1' || userType === '2') {
        const res = await adminParamsApi.getMatchDegree()
        if (res.errorCode === statusCode.tokenIsNotVaild) {
          message.error('登录信息过期，请重新登陆！')
          history.push('/loginadmin')
        }
        setStore(res)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const UpdateForm = (record: IMatchDegree) => {
    return (
      <Fragment>
        <Modal
          title={<strong>自定义参数</strong>}
          width={640}
          visible={updateModalVisible}
          destroyOnClose
          cancelText='取消'
          okText='提交'
          key='modify'
          centered
          onCancel={() => {
            handleUpdateModalVisible(false)
            setCurrentRow(undefined)
          }}

        >
          <Form
            layout='vertical'
            form={form}
            style={{ padding: 20 }}
            key='modifyForm'
            colon={false}
            initialValues={{
              profit_ability: record.ylnl,
              debt_ability: record.cznl
            }}
          >
            <FormItem
              label={<strong><h3>偿债能力</h3></strong>}
              name='debt_ability'
              key='debt_ability'
            >
              <RadioGroup value={record.cznl} buttonStyle='solid'>
                <Row key='cznl'>
                  <Col>
                    <Radio.Button value={0}>较弱</Radio.Button>
                  </Col>
                  <Col>
                    <Radio.Button value={1}>一般</Radio.Button>
                  </Col>
                  <Col>
                    <Radio.Button value={2}>较强</Radio.Button>
                  </Col>
                </Row>
              </RadioGroup>
            </FormItem>
            <FormItem
              label={<strong><h3>盈利能力</h3></strong>}
              name='profit_ability'
              key='profit_ability'
            >
              <RadioGroup value={record.ylnl} buttonStyle='solid'>
                <Row key='ylnl'>
                  <Col>
                    <Radio.Button value={0}>较弱</Radio.Button>
                  </Col>
                  <Col>
                    <Radio.Button value={1}>一般</Radio.Button>
                  </Col>
                  <Col>
                    <Radio.Button value={2}>较强</Radio.Button>
                  </Col>
                </Row>
              </RadioGroup>
            </FormItem><FormItem
              label={<strong><h3>企业资产与融资金额比例</h3></strong>}
              name='bz_ability'
              key='bz_ability'
              tooltip={
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
                </>
              }
            >
              <Input style={{ width: '200px' }} />
            </FormItem><FormItem
              label={<strong><h3>融资能力与融资需求匹配度</h3></strong>}
              name='ppd'
              key='ppd'
              tooltip={
                <>
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
            >
              <Input style={{ width: '200px' }} />
            </FormItem>
          </Form>
        </Modal>
      </Fragment>
    )
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
      render: (_: any, record: IMatchDegree) => (
        <Fragment>
          <a
            key='operate'
            onClick={() => {
              handleUpdateModalVisible(true)
              setCurrentRow(record)
            }}
          >
            配置
          </a>
        </Fragment>
      )
    },
  ];

  return (
    <>
      <Card title='融资匹配度参数'>
        <Alert type='warning'
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
        <Form component={false}>
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
      {currentRow && <UpdateForm id={0} bz={''} cznl={0} ppd={0} ylnl={0} />}
    </>
  );
};
