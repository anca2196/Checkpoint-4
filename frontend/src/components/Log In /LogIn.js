import styled from "styled-components"
import bgKanye1 from "../../assets/kanye.jpg"
import { Form, Input, Button, Checkbox } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';



const LogInContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgKanye1}) center/ cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
`

const style = {
    borderRadius: "10px",
    background: "rgba( 100, 7, 7, 1 )",
    color: "white",
    border: "none",
    width:"12rem"
}


const LogIn = ({ setUserLoggedIn}) => {
    const history = useHistory();

        const routeChange = () =>{ 
            history.push("/home");
        }

    const onFinish = (values) => {
        if( values.password === "kanye" && values.username === "kanye" ){setUserLoggedIn(true)}
        routeChange()
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
          <LogInContainer>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            size="large"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button style={style}  htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </LogInContainer>
      
    )
}

export default LogIn;
