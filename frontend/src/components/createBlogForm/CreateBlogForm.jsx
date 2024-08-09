import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useCreateBlogsMutation } from '../../context/api/userApi';

const App = () => {

    const [createBlog, { data, error, isLoading, }] = useCreateBlogsMutation()
    console.log(data);
    console.log(error);



    const onFinish = (values) => {
        createBlog(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <Form
        name="basic"
        layout='vertical'
        initialValues={{
            remember: true,
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
            <Button loading={isLoading} type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
};
export default App;