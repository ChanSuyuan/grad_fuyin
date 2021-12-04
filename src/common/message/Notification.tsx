import React from "react"
import ApiFilled from "@ant-design/icons/lib/icons/ApiFilled"
import { notification } from "antd"
import { statusCode } from "../model/statusCode"
import { Description, Message } from "./message"

export const notify = (errorCode: any) => {
  if (errorCode === statusCode.userNotExist) {
    return (
      notification.open({
        message: Message.NotExistAccount,
        description: Description.NotExistAccount,
        icon: <ApiFilled style={{ color: '#108ee9' }} />,
        duration: 3
      })
    )
  } else if (errorCode === statusCode.wrongParams) {
    notification.open({
      message: Message.WrongInform,
      description: Description.WrongInform,
      icon: <ApiFilled style={{ color: 'red' }} />,
      duration: 3
    })
  } else if (errorCode === statusCode.disabledAccount) {
    notification.open({
      message: Message.DisabledAccount,
      description: Description.DiabledMessage,
      icon: <ApiFilled style={{ color: 'red' }} />,
      duration: 3
    })
  } else if (errorCode === statusCode.registFailure) {
    notification.open({
      message: Message.RegisterFailed,
      description: Description.RegisterFailedMessage,
      icon: <ApiFilled style={{ color: 'red' }} />,
      duration: 3
    })
  } else if (errorCode === statusCode.notUserAsk) {
    notification.open({
      message: Message.WrongInform,
      description: Description.WrongInform,
      icon: <ApiFilled style={{ color: 'red' }} />,
      duration: 3
    })
  } else if (errorCode === statusCode.errorVerification) {
    notification.open({
      message: Message.ErrorVerification,
      icon: <ApiFilled style={{ color: 'red' }} />,
      duration: 3
    })
  }
}