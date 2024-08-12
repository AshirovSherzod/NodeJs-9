import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEditBlogMutation } from '../../context/api/blogs';

const CreateUsersForm = ({ id }) => {

    const [editBlog, { data, error, isLoading, }] = useEditBlogMutation()
    console.log(data);
    console.log(error);



    const onFinish = (values) => {
        editBlog(values)
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
            label="First name"
            name="lname"
            rules={[
                {
                    required: true,
                    message: 'Please fil the input!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Last name"
            name="lname"
            rules={[
                {
                    required: false,
                    message: 'Please fil the input!F',
                },
            ]}
        >
            <Input placeholder='optional' />
        </Form.Item>

        <Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
};
export default CreateUsersForm;