import React from 'react';
import { Modal } from 'antd';
import { IAllUsersInfo } from '../../ManageCharacters/model/adminUser';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<IAllUsersInfo>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<IAllUsersInfo>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {

  return (
    <Modal
      title="信息配置"
      width={640}
      visible={props.updateModalVisible}
      cancelText="取消"
      okText="确认"
      onCancel={() => {
        props.onCancel()
      }}
    >
    </Modal>

  )

};

export default UpdateForm;
