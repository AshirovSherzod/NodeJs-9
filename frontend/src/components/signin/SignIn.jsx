import React, { useEffect } from 'react';
import { useSignInMutation } from '../../context/api/userApi'
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch,  } from 'react-redux';
import { useNavigate} from 'react-router-dom'
import { setToken, setUser } from '../../context/slices/authSlice';


const App = () => {

  const [signIn, { data, isSuccess }] = useSignInMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.payload.token))
      dispatch(setUser(data.payload.user))
      navigate("/dashboard")
    }
  }, [isSuccess])

  const handleSubmit = (values) => {
    signIn(values)
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <div className='flex items-center justify-center min-h-screen flex-col gap-4'>
    <Form
      layout='vertical'
      className='w-96 max-sm:w-full'
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        // layout='vertical'
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
        // layout='vertical'
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        // offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item>
        <Button className='w-full' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
};
export default App;