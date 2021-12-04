/* eslint-disable jsx-a11y/anchor-is-valid */
import { Alert, Col, Form, message, Modal, Radio, Row, Table, Tag } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { statusCode } from '../../common/model/statusCode'
import { IAllUsersInfo } from '../ManageUsers/model/adminUser'
import { adminUsersApi } from './api/adminUsers'
import { superAdminUsersApi } from './api/superAdminUsers'
import { IAllUsersFB } from './model/adminUser'



const FormItem = Form.Item
const RadioGroup = Radio.Group

export const ManageCharacters: React.FC = () => {
  const [form] = useForm()
  const [store, setStore] = useState<IAllUsersFB>()
  const [loading, setLoading] = useState<boolean>(false)
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<IAllUsersInfo>()
  const auth = localStorage.getItem('user_type')
  const history = useHistory()

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = async () => {
    try {
      const type = localStorage.getItem('user_type')
      if (type) {
        setLoading(true)
        if (type === "1") {
          const res = await adminUsersApi.getAllUser()
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            message.error('登录信息过期，请重新登陆！')
            history.push('/loginadmin')
          }
          setStore(res)
        } else if (type === "2") {
          const res = await superAdminUsersApi.getAllUser()
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            message.error('登录信息过期，请重新登陆！')
            history.push('/loginadmin')
          }
          setStore(res)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const UpdateForm = (record: IAllUsersInfo) => {
    return (
      <Fragment>
        <Form
          form={form}
          style={{ padding: 20 }}
          key='modifyForm'
          initialValues={{
            email: record.email,
            state: record.state
          }}
        >
          <Modal
            title={<strong>信息编辑</strong>}
            width={640}
            visible={updateModalVisible}
            okButtonProps={(auth === "1" && record.type === 1) || (auth === "2" && record.type === 2) ? { disabled: true } : { disabled: false }}
            destroyOnClose
            cancelText="取消"
            okText="提交"
            key='modify'
            centered
            onCancel={() => {
              handleUpdateModalVisible(false);
              setCurrentRow(undefined)
            }}
            onOk={() => {
              if (record.email === form.getFieldValue('email')) {
                message.error('邮箱重复了！')
              } else {
                handleUpdateModalVisible(false);
                setCurrentRow(undefined)
                // handleUpdate(record.userName, record.email)
              }
            }}

          >
            {((auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2)) && (
              <Alert type='warning'
                message="同等级管理员不允许相互修改,管理员不允许修改超级管理员信息！"
              />
            )}
            <Row key='state' style={{ padding: '12px' }}>
              <Col span={12} key='state' style={{ marginTop: 20 }}>
                <FormItem
                  label={<strong><h3>身份</h3></strong>}
                  colon={false}
                  name='state'
                  key='state'
                >
                  <RadioGroup value={record.state} buttonStyle='solid'
                    disabled={(auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2) ? true : false}>
                    <Row key='authorize'>
                      <Col>
                        <Radio.Button value={0}>普通用户</Radio.Button>
                      </Col>
                      <Col>
                        <Radio.Button value={1}>管理员</Radio.Button>
                      </Col>
                      <Col>
                        <Radio.Button value={2}>超级管理员</Radio.Button>
                      </Col>
                    </Row>
                  </RadioGroup>
                </FormItem>
              </Col>
            </Row>
          </Modal>
        </Form>
      </Fragment>
    )
  }

  return (
    <div key='Character-Manage-Container' style={{ padding: 24, margin: 0, height: 400, background: "#fff" }}>
      <Table
        size='middle'
        loading={loading}
        dataSource={store?.data}
        pagination={{ pageSize: 5 }}
        rowKey="Characters"
        bordered={true}
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
            align: 'center',
            render: (_: any, record: IAllUsersInfo) => {
              if (record.type === 1) {
                if (record.state !== -1) {
                  return (
                    <Tag color='geekblue'>管理员</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>管理员</Tag>
                  )
                }
              } else if (record.type === 2) {
                if (record.state !== -1) {
                  return (
                    <Tag color='volcano'>超级管理员</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>超级管理员</Tag>
                  )
                }
              } else {
                if (record.state !== -1) {
                  return (
                    <Tag color='pink'>普通用户</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>普通用户</Tag>
                  )
                }
              }
            }
          },
          {
            title: "操作",
            dataIndex: "operate",
            key: "operate",
            align: "center",
            render: (_: any, record: IAllUsersInfo) => (
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
          }
        ]}
      />
      {currentRow && <UpdateForm email={currentRow.email} hobby={currentRow.hobby}
        id={currentRow.id} password={currentRow.password} state={currentRow.state}
        type={currentRow.type} userName={currentRow.userName} />}
    </div>
  )
}