import React, { useEffect } from 'react';
import { useSignInMutation } from '../../context/api/blogs'
import { Button, Form, Input, notification } from 'antd';
// import { Button,  } from 'antd';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setToken, setUser } from '../../context/slices/authSlice';
// import Notification from '../notfication/Notfication';



const App = () => {

  const [signIn, { data, error, isSuccess, isLoading, isError }] = useSignInMutation()
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.payload.token))
      dispatch(setUser(data.payload.user))
      navigate("/dashboard/manageblog")
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      openNotification()
    }
  }, [isError])

  const handleSubmit = (values) => {
    signIn(values)
  }

  const openNotification = () => {
    api.open({
      message: 'Username or password is wrong',
      description:
        'Try again',
      duration: 3,
    });
  };

  return <div className='flex items-center justify-center min-h-screen flex-col gap-4'>
    <Form
      layout='vertical'
      className='w-[400px] max-sm:w-full border-[1px] p-12 rounded-[5px]'
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
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

      <Form.Item>
        {contextHolder}
        <Button loading={isLoading} className='w-full' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
};
export default App;