/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Col, Form, Input, message, Modal, Row, Table } from "antd";
import _ from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { statusCode } from "../../../common/model/statusCode";
import { IZdyzb, IZdyzbFzs } from "../model/adminParams";
import { customRiskParamsApi, IFxbsData } from "./api/customRisk";
import { transForm } from "./transform";
interface Item {
  key: string
  zbName?: string
  bbz?: string
  normal?: number[]
  unnormal?: number[]
}
interface OtherItem {
  key: string
  zfz?: string
  fxd?: string
  jy?: string
  type?: number
}


export const PayDebt: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const [otherLoading, setOtherLoading] = useState<boolean>(false)
  const history = useHistory()

  const [resdata, setResData] = useState<Item[]>()
  const [otherdata, setOtherData] = useState<OtherItem[]>()

  const [modifyVisible, handleModifyVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<Item>()
  const [otherCurrentRow, setOtherCurrentRow] = useState<OtherItem>()
  const [modifyOtherVisible, handleOtherModifyVisible] = useState<boolean>(false)

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = () => {
    const userType = localStorage.getItem('user_type')
    try {
      setLoading(true)
      setOtherLoading(true)
      if (userType === '1') {
        customRiskParamsApi.getRiskZb()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setResData(originData(res.data.zdyzb, res.data.zdyzbFzs))
              setLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
        customRiskParamsApi.getfxbs()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setOtherData(otherOriginData(res.data))
              setOtherLoading(false)
            }
          })
      } else {
        customRiskParamsApi.getsuperAdminRiskZb()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setResData(originData(res.data.zdyzb, res.data.zdyzbFzs))
              setLoading(false)
            } else if (res.errorCode === statusCode.tokenIsNotVaild) {
              message.error('登录信息过期，请重新登陆！')
              history.push('/loginadmin')
            }
          })
        customRiskParamsApi.superAdminGetfxbs()
          .then(res => {
            if (res.errorCode === statusCode.success) {
              setOtherData(otherOriginData(res.data))
              setOtherLoading(false)
            }
          })
      }
    } catch (err) {
      message.error('发生了意想不到的问题！')
    }
  }

  const otherOriginData = (store: IFxbsData[]) => {
    const otherOriginData: OtherItem[] = []
    store.map((item, i) => {
      if (item.type === 2) {
        otherOriginData.push(
          {
            zfz: item.zfz,
            fxd: item.fxd,
            key: `otherOrigin${i}`,
            jy: item.jy ? item.jy : "-"
          }
        )
      }
    })
    return otherOriginData
  }

  const originData = (zdStore: IZdyzb, zdyStore: IZdyzbFzs[]) => {
    const originData: Item[] = []
    originData.push(
      {
        zbName: '流动比率',
        key: 'ld',
        bbz: zdStore.ld,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'ld') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'ld') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '速动比率',
        key: 'sd',
        bbz: zdStore.sd,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'sd') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'sd') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '现金流量比率',
        key: 'xjllb',
        bbz: zdStore.xjllb,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'xjllb') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'xjllb') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '资产负债率 (%)',
        key: 'zcfzl',
        bbz: zdStore.zcfzl,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'zcfzl') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'zcfzl') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '资本周转率 (%)',
        key: 'zbzzl',
        bbz: zdStore.zbzzl,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'zbzzl') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'zbzzl') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '清算价值比率',
        key: 'qsjzbl',
        bbz: zdStore.qsjzbl,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'qsjzbl') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'qsjzbl') {
            return item.unnormal
          }
        })
      },
      {
        zbName: '利息支付倍数',
        key: 'lszfbs',
        bbz: zdStore.lszfbs,
        normal: zdyStore.map(item => {
          if (item.zbKey === 'lszfbs') {
            return item.normal
          }
        }),
        unnormal: zdyStore.map(item => {
          if (item.zbKey === 'lszfbs') {
            return item.unnormal
          }
        })
      },
    )
    return originData
  }


  const handleUpdate = (zbName?: string) => {
    const key = transForm[zbName]
    const bzz = form.getFieldValue('bzz')
    const normal = form.getFieldValue('normal')
    const unnormal = form.getFieldValue('unnormal')
    const userType = localStorage.getItem('user_type')
    try {
      if (userType === '1') {
        customRiskParamsApi.customRiskZb([
          {
            key: key,
            bzz: bzz,
            normal: normal,
            unnormal: unnormal
          }
        ]).then(res => {
          if (res.errorCode === statusCode.success) {
            loadPage()
          }
        })
      } else {
        customRiskParamsApi.superAdminCustomRiskZb([
          {
            key: key,
            bzz: bzz,
            normal: normal,
            unnormal: unnormal
          }
        ]).then(res => {
          if (res.errorCode === statusCode.success) {
            loadPage()
          }
        })
      }

    } catch (err) {
      message.error('出现了意想不到的变化')
    }
  }

  const UpdateForm = (record: Item) => {
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
                  label='标准值设置'
                  name='bzz'
                  key='formbbz'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='正常值'
                  name='normal'
                  key='formnormal'
                >
                  <Input style={{ width: '200px' }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem
                  label='不正常值'
                  name='unnormal'
                  key='formunnormal'
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

  const handleOtherUpdate = () => {
    const zfz = form.getFieldValue('zfz')
    const fxd = form.getFieldValue('fxd')
    const jy = form.getFieldValue('jy')
    const updateArr = _.cloneDeep(otherdata)


    console.log(updateArr)
  }

  const OtherUpdateForm = (record: OtherItem) => {

    return (
      <Modal
        title={<strong>配置修改</strong>}
        width={1040}
        visible={modifyOtherVisible}
        destroyOnClose
        cancelText='取消'
        okText='提交修改'
        centered
        key='modify'
        onCancel={() => {
          handleOtherModifyVisible(false)
          setOtherCurrentRow(undefined)
        }}
        onOk={() => {
          handleOtherModifyVisible(false)
          setOtherCurrentRow(undefined)
          handleOtherUpdate()
        }}
      >
        <Form
          layout='vertical'
          form={form}
          key='modifyOperateZb'
          colon={false}
          style={{ padding: '12px' }}
        >
          <FormItem
            label='营运能力总分'
            name='zfz'
            key='formzfz'
          >
            <Input style={{ width: '200px' }} />
          </FormItem>
          <FormItem
            label='存在的风险点'
            name='fxd'
            key='formfxd'
          >
            <Input.TextArea style={{ width: '400px' }} />
          </FormItem>
          <FormItem
            label='风险控制建议'
            name='jy'
            key='formjy'
          >
            <Input.TextArea style={{ width: '400px' }} />
          </FormItem>
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
              align: 'center'
            },
            {
              title: '标准值设置',
              dataIndex: 'bbz',
              width: '20%',
              align: 'center'
            },
            {
              title: '结果设定',
              width: '40%',
              children: [
                {
                  title: '正常',
                  dataIndex: 'normal',
                  align: 'center',
                  key: 'normal',
                  width: '20%',
                },
                {
                  title: '不正常',
                  dataIndex: 'unnormal',
                  width: '20%',
                  align: 'center',
                  key: 'unnormal',
                },
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
      {currentRow && <UpdateForm key={currentRow.key} bbz={currentRow.bbz} normal={currentRow.normal} zbName={currentRow.zbName} unnormal={currentRow.unnormal} />}
      <Card title='附加' style={{ marginTop: 20, height: '400px' }}>
        <Table
          bordered={true}
          loading={otherLoading}
          size='small'
          pagination={{ pageSize: 5 }}
          dataSource={otherdata}
          columns={[
            {
              title: '营运能力总分',
              dataIndex: 'zfz',
              key: 'zfz',
              align: 'center',
              width: '20%',
            },
            {
              title: '存在的风险点',
              dataIndex: 'fxd',
              key: 'fxd',
              width: '20%',
              align: 'center'
            },
            {
              title: '风险控制建议',
              dataIndex: 'jy',
              key: 'jy',
              width: '20%',
              align: 'center'
            },
            {
              title: '操作',
              dataIndex: 'operate',
              key: 'operate',
              align: 'center',
              width: '20%',
              render: (_: any, record: Item) => (
                <Fragment>
                  <a
                    key='operate'
                    onClick={() => {
                      handleOtherModifyVisible(true)
                      setOtherCurrentRow(record)
                    }}
                  >
                    配置
                  </a>
                </Fragment>
              )
            }
          ]}
        />
      </Card>
      {otherCurrentRow && <OtherUpdateForm key={otherCurrentRow.key} zfz={otherCurrentRow.zfz} type={otherCurrentRow.type} fxd={otherCurrentRow.fxd} jy={otherCurrentRow.jy} />}
    </>
  );
};