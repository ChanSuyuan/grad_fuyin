import { Button, Result } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { config } from '../../utils/config'
import { queryParams } from '../../utils/queryParams'
import GlobalFooter from '../GlobalFooter'


export const RegistFeedBack: React.FC = () => {
  const history = useHistory()
  let isShow = false

  const setShow = (v: boolean) => {
    isShow = v
  }

  const code = queryParams('register_result')
  code === "1" && setShow(true)

  const handleChange = (v: number) => {
    v === 1 ? history.push('/login') : history.push('/register')
  }

  return (
    <>
      <div className="container-fluid">
        <a href="../login" className="navbar-brand">
          <span>富银LOGO 预留位置</span>
        </a>
      </div>
      <div className="form-container">
        {isShow ?
          <Result
            status="success"
            title="注册成功"
            subTitle="注册成功！"
            extra={[
              <Button type="primary" key="console" onClick={() => handleChange(1)}>
                返回登陆界面
              </Button>
            ]}
          />
          :
          <Result
            status="error"
            title="注册失败"
            subTitle="注册失败，请返回界面重新注册，原因：链接失效！"
            extra={[
              <Button type="primary" key="console" onClick={() => handleChange(0)}>
                返回注册界面
              </Button>
            ]}
          />
        }
        <div className="footer">
          <GlobalFooter className="footer" copyright={config.copyright} />
        </div>
      </div>
    </>
  )
}


// export class RegistFeedBack extends React.Component {

//   @observable
//   isShow: boolean = false

//   @action
//   setShow(v: boolean) {
//     this.isShow = v
//   }


//   componentDidMount() {
//     const code = queryParams('register_result')
//     if (code === "1") {
//       this.setShow(true)
//     } else {
//       this.setShow(false)
//     }
//   }

//   render() {
//     return (
//       <>
//         <div className="container-fluid">
//           <a href="../login" className="navbar-brand">
//             <span>富银LOGO 预留位置</span>
//           </a>
//         </div>
//         <div className="form-container">
//           {console.log(this.isShow)}
//           {this.isShow ?
//             <Result
//               status="success"
//               title="注册成功"
//               subTitle="注册成功！"
//               extra={[
//                 <Link type="primary" key="console" to="/login">
//                   返回登陆界面
//                 </Link>
//               ]}
//             />
//             :
//             <Result
//               status="error"
//               title="注册失败"
//               subTitle="注册失败，请返回界面重新注册，原因：链接失效！"
//               extra={[
//                 <Link type="primary" key="console" to="/register">
//                   返回登陆界面
//                 </Link>
//               ]}
//             />
//           }
//           <div className="footer">
//             <GlobalFooter className="footer" copyright={config.copyright} />
//           </div>
//         </div>
//       </>
//     )
//   }
// }
