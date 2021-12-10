import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { TableForm } from './TableForm';
const { Dragger } = Upload;
interface IUploadFormProps {
  uploadContent: number
}

export const UploadForm: React.FC<IUploadFormProps> = (prop) => {
  const [mainZbstore, setMainZbStore] = useState(undefined)
  const [profitStore, setProfitStore] = useState(undefined)
  const [cashFlowStore, setCashFlowStore] = useState(undefined)
  const [balanceSheetStore, setBalanceSheetStore] = useState(undefined)
  const [companyInfoStore, setCompanyInfoStore] = useState(undefined)
  const [companySturctStore, setCompanyStruceStore] = useState(undefined)
  // const baseURL = `/fuyin`
  const props = {
    name: 'file',
    multiple: true,
    action: `file/upload-excel?type=${prop.uploadContent}`,
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
        if (prop.uploadContent === 0) {
          setMainZbStore(info.file.response.data)
        } else if (prop.uploadContent === 1) {
          setProfitStore(info.file.response.data)
        } else if (prop.uploadContent === 2) {
          setCashFlowStore(info.file.response.data)
        } else if (prop.uploadContent === 3) {
          setBalanceSheetStore(info.file.response.data)
        } else if (prop.uploadContent === 4) {
          setCompanyInfoStore(info.file.response.data)
        } else if (prop.uploadContent === 5) {
          setCompanyStruceStore(info.file.response.data)
        }
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

  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击进行上传</p>
        <p className="ant-upload-hint">
          可选择上传主要指标、利润表、现金流量表、资产负债表、公司基本信息、股东结构
        </p>
      </Dragger>
      <TableForm mainZb={mainZbstore} profit={profitStore} cashFlow={cashFlowStore}
        balanceSheet={balanceSheetStore} companyInfo={companyInfoStore} companyStruct={companySturctStore}
      />
    </>
  )
}