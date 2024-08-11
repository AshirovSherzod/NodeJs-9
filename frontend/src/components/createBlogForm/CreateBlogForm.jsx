import React, { useEffect } from 'react';
import { Button, message, Form, Input } from 'antd';
import { useCreateBlogsMutation } from '../../context/api/blogs';
// import Title from 'antd/es/skeleton/Title';

const App = () => {

    const [createBlog, { data, error, isLoading, isSuccess}] = useCreateBlogsMutation()
    const [messageApi, contextHolder] = message.useMessage();
    console.log(data);
    console.log(error);

    useEffect(()=> {
        if(isSuccess){
            success()
        }
    }, [isSuccess])


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const errorMessage = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    // const warning = () => {
    //     messageApi.open({
    //         type: 'warning',
    //         content: 'This is a warning message',
    //     });
    // };


    const onFinish = (values) => {
        createBlog(values)

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <Form
        name="basic"
        layout='vertical'
        footer={true}
        initialValues={{
            title: "desc"
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Title"
            name="title"
            rules={[
                {
                    required: true,
                    message: 'Please input your title!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Description"
            name="desc"
            rules={[
                {
                    required: true,
                    message: 'Please input your description!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item>
            {contextHolder}
            <Button loading={isLoading} type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
};
export default App;