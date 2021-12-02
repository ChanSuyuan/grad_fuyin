import React from 'react';
import { Col, Form, Input, message, Modal, Row } from 'antd';
import { IAllUsersInfo } from '../../ManageCharacters/model/adminUser';
import { useForm } from 'antd/lib/form/Form';
import { adminUsersApi } from '../api/adminUsers';
import { superAdminUsersApi } from '../api/superAdminUsers';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<IAllUsersInfo>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: () => void;
  LoadPage: () => void
  updateModalVisible: boolean;
  values: Partial<IAllUsersInfo>;
};

const FormItem = Form.Item
const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [form] = useForm()

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
        props.onSubmit()
        hide()
        message.success('配置成功')
        props.LoadPage()
      } else if (User_type === '2') {
        superAdminUsersApi.modifyUsrs({
          userName: userName,
          email: email,
          state: state,
          type: type
        })
        props.onSubmit()
        hide()
        message.success('配置成功')
        props.LoadPage()
      }
    } catch (err) {
      message.error('配置失败请重试！')
    }
  }

  console.log(props.values.userName)
  return (
    <Form
      form={form}
      layout="vertical"
      style={{ padding: 20 }}
      key='modifyForm'
      initialValues={{
        userName: `${props.values.userName}`
      }}
    >
      <Modal
        title="信息编辑"
        width={640}
        visible={props.updateModalVisible}
        destroyOnClose
        cancelText="取消"
        okText="提交"
        key='modify'
        onCancel={() => {
          props.onCancel()
        }}
        onOk={handleUpdate}
      >
        <div>
          <Row key='Users'>
            <Col span={8} key='userName'>
              <FormItem
                label='用户名称'
                colon={false}
                name='userName'
                key='userName'
              >
                <Input defaultValue={props.values.userName} />
              </FormItem>
            </Col>
            <Col span={8} style={{ marginLeft: 50 }} key='state'>
              <FormItem
                label='状态'
                colon={false}
                name='state'
                key='mail'
              >
                <Input />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={8} key='mail'>
              <FormItem
                label='邮箱'
                colon={false}
                name='mail'
                key='mail'
              >
                <Input />
              </FormItem>
            </Col>
            <Col span={8} style={{ marginLeft: 50 }} key='type'>
              <FormItem
                label='用户角色'
                colon={false}
                name='type'
                key='type'
              >
                <Input />
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>
    </Form>

  )

};

export default UpdateForm;
