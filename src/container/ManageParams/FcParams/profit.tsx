/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Col, Form, Input, message, Modal, Row, Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { statusCode } from "../../../common/model/statusCode";
import { IZdyzbModel } from "../model/adminParams";
import { customFcParamsApi } from "./api";
import { transForm } from "./transform";

interface Item {
  key: string
  zbName?: string
  score0?: number[]
  score1?: number[]
  score2?: number[]
  type0?: string[]
  type1?: string[]
  type2?: string[]
}



export const FcProfit: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()
  const [resdata, setResData] = useState<any>()
  const [modifyVisible, handleModifyVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<Item>()

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = () => {
    const userType = localStorage.getItem('user_type')
    try {
      setLoading(true)
      if (userType === '1') {
        customFcParamsApi.getzdyzbModel()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setResData(originData(res.data))
              setLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
      } else {
        customFcParamsApi.getSuperAdminZdyzbModel()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setResData(originData(res.data))
              setLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
      }
    } catch (err) {
      message.error('发生了意想不到的问题！')
    }
  }

  const originData = (store: IZdyzbModel[]) => {
    const originData: Item[] = []
    originData.push(
      {
        zbName: '销售利润率',
        key: 'xslrl',
        type0: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 0) {
            return item.equation
          }
        }),
        type1: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 1) {
            return item.equation
          }
        }),
        type2: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 2) {
            return item.equation
          }
        }),
        score0: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 0) {
            return item.score
          }
        }),
        score1: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 1) {
            return item.score
          }
        }),
        score2: store.map((item) => {
          if (item.zbKey === 'xslrl' && item.type === 2) {
            return item.score
          }
        })
      },
      {
        zbName: '成本费用利润率',
        key: 'cbfylrl',
        type0: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 0) {
            return item.equation
          }
        }),
        type1: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 1) {
            return item.equation
          }
        }),
        type2: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 2) {
            return item.equation
          }
        }),
        score0: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 0) {
            return item.score
          }
        }),
        score1: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 1) {
            return item.score
          }
        }),
        score2: store.map((item) => {
          if (item.zbKey === 'cbfylrl' && item.type === 2) {
            return item.score
          }
        })
      },
      {
        zbName: '总资产利润率',
        key: 'zzclrl',
        type0: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 0) {
            return item.equation
          }
        }),
        type1: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 1) {
            return item.equation
          }
        }),
        type2: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 2) {
            return item.equation
          }
        }),
        score0: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 0) {
            return item.score
          }
        }),
        score1: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 1) {
            return item.score
          }
        }),
        score2: store.map((item) => {
          if (item.zbKey === 'zzclrl' && item.type === 2) {
            return item.score
          }
        })
      },
      {
        zbName: '资本金利润率',
        key: 'zbjlrl',
        type0: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 0) {
            return item.equation
          }
        }),
        type1: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 1) {
            return item.equation
          }
        }),
        type2: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 2) {
            return item.equation
          }
        }),
        score0: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 0) {
            return item.score
          }
        }),
        score1: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 1) {
            return item.score
          }
        }),
        score2: store.map((item) => {
          if (item.zbKey === 'zbjlrl' && item.type === 2) {
            return item.score
          }
        })
      },
      {
        zbName: '股东权益利润率',
        key: 'gdqylrl',
        type0: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 0) {
            return item.equation
          }
        }),
        type1: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 1) {
            return item.equation
          }
        }),
        type2: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 2) {
            return item.equation
          }
        }),
        score0: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 0) {
            return item.score
          }
        }),
        score1: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 1) {
            return item.score
          }
        }),
        score2: store.map((item) => {
          if (item.zbKey === 'gdqylrl' && item.type === 2) {
            return item.score
          }
        })
      },
    )
    return originData
  }

  const handleUpdate = (zbName?: string) => {

    const key = transForm[zbName]
    const equation0 = form.getFieldValue('equation0')
    const equation1 = form.getFieldValue('equation1')
    const equation2 = form.getFieldValue('equation2')
    const score1 = form.getFieldValue('score1')
    const score0 = form.getFieldValue('score0')
    const score2 = form.getFieldValue('score2')
    const userType = localStorage.getItem('user_type')

    // 此处用于可以用 promise.all 但是懒得弄了

    try {
      setLoading(true)
      if (userType === '1') {
        customFcParamsApi.modifyCustomFcZb(
          {
            zbKey: key,
            equation: equation0,
            type: 0,
            score: score0
          })
        customFcParamsApi.modifyCustomFcZb(
          {
            zbKey: key,
            equation: equation1,
            type: 1,
            score: score1
          })
        customFcParamsApi.modifyCustomFcZb(
          {
            zbKey: key,
            equation: equation2,
            type: 2,
            score: score2
          })
      } else {
        customFcParamsApi.superAdminModifyCustomFcZb(
          {
            zbKey: key,
            equation: equation0,
            type: 0,
            score: score0
          })
        customFcParamsApi.superAdminModifyCustomFcZb(
          {
            zbKey: key,
            equation: equation1,
            type: 1,
            score: score1
          })
        customFcParamsApi.superAdminModifyCustomFcZb(
          {
            zbKey: key,
            equation: equation2,
            type: 2,
            score: score2
          })
      }
    } catch (err) {
      message.error('出现了意想不到的变化')
    } finally {
      setLoading(false)
    }
  }



  const UpdateForm = (record: Item) => {
    console.log(record)
    return (
      <Modal
        title={<strong>配置修改</strong>}
        width={1040}
        visible={modifyVisible}
        destroyOnClose
        cancelText='取消'
        okText='提交修改'
        centered
        key='modify'
        onCancel={() => {
          handleModifyVisible(false)
          setCurrentRow(undefined)
        }}
        onOk={() => {
          handleModifyVisible(false);
          setCurrentRow(undefined)
          handleUpdate(record.zbName)
        }}
      >
        <Form
          layout='vertical'
          form={form}
          key='modifyOperateZb'
          colon={false}
        >
          <Card title={record.zbName} bordered={false}>
            <Row>
              <Col span={8}>
                <FormItem
                  label='较强范围'
                  name='equation0'
                  key='formequation0'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='一般范围'
                  name='equation1'
                  key='formequation1'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='较弱范围'
                  name='equation2'
                  key='formequation2'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <FormItem
                  label='较强分数'
                  name='score0'
                  key='formscore0'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='一般分数'
                  name='score1'
                  key='formscore1'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='较弱分数'
                  name='score2'
                  key='formscore2'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
            </Row>
          </Card>
        </Form>
      </Modal>
    )
  }


  const FormItem = Form.Item
  return (
    <>
      <Card title='偿债能力指标配置'>
        <Table
          loading={loading}
          size='middle'
          bordered
          dataSource={resdata}
          columns={[
            {
              title: '指标名称',
              dataIndex: 'zbName',
              width: '20%',
              key: 'zbName',
              align: 'center'
            },
            {
              title: '较强',
              width: '20%',
              align: 'center',
              children: [
                {
                  title: '范围',
                  dataIndex: 'type0',
                  key: 'type0',
                  align: 'center',
                  width: '10%',
                },
                {
                  title: '分数',
                  dataIndex: 'score0',
                  key: 'score0',
                  align: 'center',
                  width: '10%',

                }
              ]
            },
            {
              title: '一般',
              width: '20%',
              align: 'center',
              children: [
                {
                  title: '范围',
                  dataIndex: 'type1',
                  key: 'type1',
                  align: 'center',
                  width: '10%',
                },
                {
                  title: '分数',
                  dataIndex: 'score1',
                  key: 'score1',
                  align: 'center',
                  width: '10%',
                }
              ]
            },
            {
              title: '较弱',
              width: '20%',
              align: 'center',
              children: [
                {
                  title: '范围',
                  dataIndex: 'type2',
                  key: 'type2',
                  align: 'center',
                  width: '10%',
                },
                {
                  title: '分数',
                  dataIndex: 'score2',
                  key: 'score2',
                  align: 'center',
                  width: '10%',
                }
              ]
            },
            {
              title: '操作',
              dataIndex: 'operation',
              key: 'operation',
              align: 'center',
              render: (_: any, record: Item) => (
                <Fragment>
                  <a
                    key='operate'
                    onClick={() => {
                      handleModifyVisible(true)
                      setCurrentRow(record)
                    }}
                  >
                    配置
                  </a>
                </Fragment>
              )
            }
          ]}
          rowClassName="editable-row"
          pagination={false}
        />
      </Card>
      {currentRow && <UpdateForm key={currentRow.key} zbName={currentRow.zbName} type0={currentRow.type0} type1={currentRow.type1} type2={currentRow.type2} />}
    </>
  );
};
