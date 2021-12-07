import { Upload, message, Radio } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const { Dragger } = Upload;
const RadioGroup = Radio.Group

export const UploadForm: React.FC = () => {
  const baseURL = '/fuyin'
  const [uploadContent, handleUploadContent] = useState<number>(0)

  const props = {
    name: 'file',
    multiple: true,
    action: `${baseURL}/file/upload-excel?type=${uploadContent}`,
    headers: {
      authorization: `${localStorage.getItem('user_token')}`,
      userName: `${localStorage.getItem('user_name')}`,
      ip_address: `${localStorage.getItem('ip_address')}`
    },
    withCredentials: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    }
  }

  const changeUploadContent = (e: any) => {
    if (e.target.value === 0) {
      handleUploadContent(0)
    } else if (e.target.value === 1) {
      handleUploadContent(1)
    } else {
      handleUploadContent(2)
    }
  }

  return (
    <>
      <RadioGroup style={{ padding: '12px' }} defaultValue={0} onChange={changeUploadContent}>
        <Radio value={0}>利润表</Radio>
        <Radio value={1}>资产负债表</Radio>
        <Radio value={2}>现金流量表</Radio>
      </RadioGroup>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击进行上传</p>
        <p className="ant-upload-hint">
          请依次上传利润表、资产负债表、资金流动表
        </p>
      </Dragger>
    </>
  )
}