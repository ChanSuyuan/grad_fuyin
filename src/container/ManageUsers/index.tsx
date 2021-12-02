/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Col, Form, Input, message, Modal, Row, Table } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { Fragment, useEffect, useState } from 'react'
import { superAdminUsersApi } from '../ManageCharacters/api/superAdminUsers'
import { IAllUsersInfo } from '../ManageCharacters/model/adminUser'
import { adminUsersApi } from './api/adminUsers'



const FormItem = Form.Item

export const ManageUsers: React.FC = () => {
  const [form] = useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [store, setStore] = useState<IAllUsersInfo[]>()
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<IAllUsersInfo>()

  useEffect(() => {
    loadPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadPage = async () => {
    try {
      const type = localStorage.getItem('user_type')
      if (type) {
        setLoading(true)
        if (type === '1') {
          const res = await adminUsersApi.getAllUser()
          setStore(res.data)
        } else if (type === '2') {
          const res = await superAdminUsersApi.getAllUser()
          setStore(res.data)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = () => {
    const hide = message.loading('正在配置中')
    const userName = form.getFieldValue('userName')
    const email = form.getFieldValue('email')
    const state = form.getFieldValue('state')
    const type = form.getFieldValue('type')
    const User_type = localStorage.getItem('user_type')
    try {
      if (User_type === '1') {
        adminUsersApi.modifyUsrs({
          userName: userName,
          email: email,
          state: state,
          type: type
        })
        handleUpdateModalVisible(false);
        setCurrentRow(undefined)
        hide()
        message.success('配置成功')
        loadPage()
      } else if (User_type === '2') {
        superAdminUsersApi.modifyUsrs({
          userName: userName,
          email: email,
          state: state,
          type: type
        })
        handleUpdateModalVisible(false);
        setCurrentRow(undefined)
        hide()
        message.success('配置成功')
        loadPage()
      }
    } catch (err) {
      message.error('配置失败请重试！')
    }
  }

  const UpdateForm = (record: IAllUsersInfo) => {
    console.log('状态', record.state)
    console.log('邮箱的值', record.email)
    return (
      <Fragment>
        <Form
          form={form}
          layout="vertical"
          style={{ padding: 20 }}
          key='modifyForm'
        >
          <Modal
            title={<strong>信息编辑</strong>}
            width={640}
            visible={updateModalVisible}
            destroyOnClose
            cancelText="取消"
            okText="提交"
            key='modify'
            onCancel={() => {
              handleUpdateModalVisible(false);
              setCurrentRow(undefined)
            }}
            onOk={handleUpdate}
          >
            <Row key='Users' style={{ padding: '12px' }}>
              <Col span={8} key='state'>
                <FormItem
                  label={<strong><h3>状态</h3></strong>}
                  colon={false}
                  name='state'
                  key='state'
                >
                  <Input />
                </FormItem>
              </Col>
              <Col span={8} key='mail' style={{ marginLeft: 80 }}>
                <FormItem
                  label={<strong><h3>邮箱</h3></strong>}
                  colon={false}
                  name='mail'
                  key='mail'
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (record.email === value) {
                          return Promise.reject(new Error('重复邮箱！'));
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input />
                </FormItem>
              </Col>
            </Row>
          </Modal>
        </Form>
      </Fragment>
    )
  }
  return (
    <Card key='UserManage-Container'>
      <Table
        pagination={{ pageSize: 5 }}
        size='middle'
        loading={loading}
        dataSource={store}
        rowKey="Users_Manage"
        bordered={true}
        columns={[
          {
            title: "用户名",
            dataIndex: 'userName',
            key: 'userName',
            align: 'center'
          },
          {
            title: "邮箱",
            dataIndex: 'email',
            key: 'email',
            align: 'center'
          },
          {
            title: "状态",
            dataIndex: 'state',
            key: 'state',
            align: 'center',

          },
          {
            title: "用户角色",
            dataIndex: 'type',
            key: 'type',
            align: 'center'
          },
          {
            title: "操作",
            dataIndex: 'operate',
            key: 'operate',
            align: 'center',
            render: (_: any, record: IAllUsersInfo) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
    </Card>
  )
}