/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import { Table, Form, Card, Alert, message, Modal, Row, Col, Input, Radio, Button } from 'antd';
import { IAdminGetMatchDegreeFeedBack, IMatchDegree } from '../model/adminParams';
import { adminParamsApi } from '../api/adminParams';
import { statusCode } from '../../../common/model/statusCode';
import { useHistory } from 'react-router';
import _ from 'lodash';

const transFormDegree: any = {
  0: <div style={{ color: 'red' }}>较弱</div>,
  1: <div style={{ color: 'brown' }}>一般</div>,
  2: <div style={{ color: 'green' }}>较强</div>,
}

const FormItem = Form.Item
const RadioGroup = Radio.Group

export const MatchDegree = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [addRulesVisible, handleAddRulesVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<IMatchDegree>()
  const [store, setStore] = useState<IAdminGetMatchDegreeFeedBack>()
  const history = useHistory()
  const userType = localStorage.getItem('user_type')
  const [resArr, setResArr] = useState<IMatchDegree[]>()
  const [isExist, handleIsExist] = useState<boolean>(false)

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = async () => {
    setLoading(true)
    try {
      if (userType === '1' || userType === '2') {
        const res = await adminParamsApi.getMatchDegree()
        if (res.errorCode === statusCode.tokenIsNotVaild) {
          message.error('登录信息过期，请重新登陆！')
          history.push('/loginadmin')
        }
        setStore(res)
        setResArr(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = (id: number) => {
    const cznl = form.getFieldValue('debt_ability')
    const ylnl = form.getFieldValue('profit_ability')
    const bz = form.getFieldValue('bz_ability')
    const ppd = form.getFieldValue('ppd')
    const User_type = localStorage.getItem('user_type')
    try {
      message.loading('正在配置中。。。', 3)
      const resArrFinal = _.cloneDeep(resArr)
      // eslint-disable-next-line array-callback-return
      resArrFinal.map((item: IMatchDegree) => {
        if (item.id === id) {
          item.cznl = cznl
          item.ylnl = ylnl
          item.bz = bz
          item.ppd = ppd
        } else {
          handleIsExist(true)
          // eslint-disable-next-line array-callback-return
          return
        }
      })
      isExist && resArrFinal.push({
        cznl: cznl,
        ylnl: ylnl,
        bz: bz,
        ppd: ppd
      })

      if (User_type === '1') {
        adminParamsApi.modifyMatchDegree(resArrFinal)
          .then(res => {
            if (res.errorCode === statusCode.success) {
              loadPage()
              message.success('配置成功')
            }
          })
      }
    } catch (err) {
      message.error('出错了！')
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
          onOk={() => {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined)
            handleUpdate(record.id)
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
              debt_ability: record.cznl,
              bz_ability: record.bz,
              ppd: record.ppd
            }}
          >
            <FormItem
              label={<strong><h3>偿债能力</h3></strong>}
              name='debt_ability'
              key='debt_ability'
            >
              <RadioGroup value={record.cznl} buttonStyle='solid'>
                <Row key='cznl'>
                  <Col key='cznl-1'>
                    <Radio.Button value={0}>较弱</Radio.Button>
                  </Col>
                  <Col key='cznl-2'>
                    <Radio.Button value={1}>一般</Radio.Button>
                  </Col>
                  <Col key='cznl-3'>
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
            </FormItem>
            <FormItem
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
                      <span>对于仅小于某一值，需填{'  < y '}，例如{'  < 0.5 '}。</span>
                    </li>
                  </ul>
                </>
              }
            >
              <Input style={{ width: '200px' }} />
            </FormItem>
            <FormItem
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


  const AddRulesForm = () => {
    return (
      <Fragment>
        <Modal
          title={<strong>添加规则</strong>}
          width={640}
          visible={addRulesVisible}
          destroyOnClose
          cancelText='取消'
          okText='添加'
          key='addRules'
          centered
          onCancel={() => {
            handleAddRulesVisible(false)
          }}
          onOk={() => {
            handleAddRulesVisible(false);
            handleUpdate(0)
          }}
        >
          <Form
            layout='vertical'
            form={form}
            style={{ padding: 20 }}
            key='modifyForm'
            colon={false}
            initialValues={{
              debt_ability: 0,
              profit_ability: 0
            }}
          >
            <FormItem
              label={<strong><h3>偿债能力</h3></strong>}
              name='debt_ability'
              key='debt_ability'
            >
              <RadioGroup buttonStyle='solid'>
                <Row key='cznl'>
                  <Col key='cznl-1'>
                    <Radio.Button value={0}>较弱</Radio.Button>
                  </Col>
                  <Col key='cznl-2'>
                    <Radio.Button value={1}>一般</Radio.Button>
                  </Col>
                  <Col key='cznl-3'>
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
              <RadioGroup buttonStyle='solid'>
                <Row key='ylnl'>
                  <Col key='ylnl-1'>
                    <Radio.Button value={0}>较弱</Radio.Button>
                  </Col>
                  <Col key='ylnl-2'>
                    <Radio.Button value={1}>一般</Radio.Button>
                  </Col>
                  <Col key='ylnl-3'>
                    <Radio.Button value={2}>较强</Radio.Button>
                  </Col>
                </Row>
              </RadioGroup>
            </FormItem>
            <FormItem
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
            </FormItem>
            <FormItem
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
                  <span>对于仅小于某一值，需填{'  < y '}，例如{'  < 0.5 '}。</span>
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
        <div className='rightContent' style={{ float: 'right', padding: '12px' }}>
          <Button type='primary' onClick={() => handleAddRulesVisible(true)}>添加规则</Button>
        </div>
        <Table
          style={{ marginTop: 10, textAlign: 'center' }}
          bordered
          size='small'
          loading={loading}
          dataSource={store?.data}
          columns={[
            {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
              align: 'center',
              render: (text, record, index) => `${index + 1}`
            },
            {
              title: '偿债能力',
              dataIndex: 'cznl',
              key: 'cznl',
              align: 'center',
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
              align: 'center',
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
              align: 'center'
            },
            {
              title: '融资能力与融资需求匹配度',
              dataIndex: 'ppd',
              key: 'ppd',
              align: 'center'
            },
            {
              title: '操作',
              dataIndex: 'operation',
              key: 'operation',
              align: 'center',
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
          ]}
          pagination={{
            pageSize: 5
          }}
        />
      </Card>
      {currentRow && <UpdateForm id={currentRow.id} bz={currentRow.bz} cznl={currentRow.cznl} ppd={currentRow.ppd} ylnl={currentRow.ylnl} />}
      <AddRulesForm />
    </>
  );
};
