/* eslint-disable jsx-a11y/anchor-is-valid */
import ApiFilled from '@ant-design/icons/lib/icons/ApiFilled'
import { Alert, Form, Input, message, Modal, notification, Radio, Table, Tag } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { statusCode } from '../../common/model/statusCode'
import { superAdminUsersApi } from '../ManageCharacters/api/superAdminUsers'
import { IAllUsersInfo } from '../ManageCharacters/model/adminUser'
import { adminUsersApi } from './api/adminUsers'



const FormItem = Form.Item
const RadioGroup = Radio.Group

export const ManageUsers: React.FC = () => {
  const [form] = useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [store, setStore] = useState<IAllUsersInfo[]>()
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
      if (auth) {
        setLoading(true)
        if (auth === '1') {
          const res = await adminUsersApi.getAllUser()
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            history.push('/loginadmin')
          }
          setStore(res.data)
        } else if (auth === '2') {
          const res = await superAdminUsersApi.getAllUser()
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            history.push('/loginadmin')
          }
          setStore(res.data)
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = (username?: string, mail?: string) => {
    const email = form.getFieldValue('email')
    const password = form.getFieldValue('password')
    const state = form.getFieldValue('state')
    const type = form.getFieldValue('type')
    const User_type = localStorage.getItem('user_type')
    try {
      message.loading('???????????????...', 3)
      if (User_type === '1') {
        adminUsersApi.modifyUsrs({
          userName: username,
          email: email,
          state: state,
          type: type,
          password: password
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('????????????')
            if (email) {
              notification.open({
                message: '??????',
                description: '???????????????????????????????????????????????????!??????????????????',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
                duration: 3
              })
            }
            loadPage()
          } else if (res.errorCode === statusCode.tooFrequently) {
            message.error('???????????????????????????????????????')
          }
        })
      } else if (User_type === '2') {
        superAdminUsersApi.modifyUsrs({
          userName: username,
          email: email,
          state: state,
          type: type,
          password: password
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('????????????')
            if (email) {
              notification.open({
                message: '??????',
                description: '???????????????????????????????????????????????????!??????????????????',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
                duration: 3
              })
            }
            loadPage()
          } else if (res.errorCode === statusCode.tooFrequently) {
            message.error('???????????????????????????????????????')
          }
        })
      }
    } catch (err) {
      message.error('????????????????????????')
    }
  }

  const UpdateForm = (record: IAllUsersInfo) => {
    return (
      <Fragment>
        <Modal
          title={<strong>????????????</strong>}
          width={640}
          visible={updateModalVisible}
          okButtonProps={(auth === "1" && record.type === 1) || (auth === "2" && record.type === 2) ? { disabled: true } : { disabled: false }}
          destroyOnClose
          cancelText="??????"
          okText="??????"
          key='modify'
          centered
          onCancel={() => {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined)
          }}
          onOk={() => {
            if (record.email === form.getFieldValue('email')) {
              message.error('??????????????????')
            } else {
              handleUpdateModalVisible(false);
              setCurrentRow(undefined)
              handleUpdate(record.userName, record.email)
            }
          }}
        >
          <Form
            form={form}
            layout="vertical"
            style={{ padding: 20 }}
            key='modifyForm'
            initialValues={{
              email: record.email,
              state: record.state
            }}
          >
            {((auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2)) && (
              <Alert type='warning'
                message="???????????????????????????????????????,????????????????????????????????????????????????"
              />
            )}
            <FormItem
              label={<strong><h3>??????</h3></strong>}
              name='state'
              key='state'
            >
              <RadioGroup value={record.state} buttonStyle='solid'
                disabled={(auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2) ? true : false}
              >
                <Radio.Button value={0}>??????</Radio.Button>
                <Radio.Button value={-1}>??????</Radio.Button>
              </RadioGroup>
            </FormItem>
            <FormItem
              label={<strong><h3>??????</h3></strong>}
              colon={false}
              name='email'
              key='email'
              rules={[{
                validator: (_, value) => {
                  if (record.email === value) {
                    return Promise.reject(new Error("???????????????????????????"))
                  } else {
                    return Promise.resolve()
                  }
                }
              }]}
            >
              <Input style={{ width: '200px' }} disabled={(auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2) ? true : false} />
            </FormItem>
            <FormItem
              label={<strong><h3>??????</h3></strong>}
              colon={false}
              name='password'
              key='password'
            >
              <Input style={{ width: '200px' }} disabled={(auth === "1" && (record.type === 1 || record.type === 2)) || (auth === "2" && record.type === 2) ? true : false} />
            </FormItem>
          </Form>
        </Modal>
      </Fragment>
    )
  }

  return (
    <div key='UserManage-Container' style={{ padding: 24, margin: 0, height: 400, background: "#fff" }}>
      <Table
        pagination={{ pageSize: 5 }}
        size='middle'
        loading={loading}
        dataSource={store}
        rowKey="Users_Manage"
        bordered={true}
        columns={[
          {
            title: "?????????",
            dataIndex: 'userName',
            key: 'userName',
            align: 'center',
            width: '20%'
          },
          {
            title: "??????",
            dataIndex: 'email',
            key: 'email',
            align: 'center',
            width: '20%'
          },
          {
            title: "??????",
            dataIndex: 'state',
            key: 'state',
            align: 'center',
            width: '20%',
            render: (_: any, record: IAllUsersInfo) => {
              if (record.state === 0) {
                return (
                  <Tag color='green'>??????</Tag>
                )
              } else {
                return (
                  <Tag color='grey'>??????</Tag>
                )
              }
            }

          },
          {
            title: "????????????",
            dataIndex: 'type',
            key: 'type',
            align: 'center',
            width: '20%',
            render: (_: any, record: IAllUsersInfo) => {
              if (record.type === 1) {
                if (record.state !== -1) {
                  return (
                    <Tag color='geekblue'>?????????</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>?????????</Tag>
                  )
                }
              } else if (record.type === 2) {
                if (record.state !== -1) {
                  return (
                    <Tag color='volcano'>???????????????</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>???????????????</Tag>
                  )
                }
              } else {
                if (record.state !== -1) {
                  return (
                    <Tag color='pink'>????????????</Tag>
                  )
                } else {
                  return (
                    <Tag color='grey'>????????????</Tag>
                  )
                }
              }
            }
          },
          {
            title: "??????",
            dataIndex: 'operate',
            key: 'operate',
            align: 'center',
            width: '20%',
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
                  ??????
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