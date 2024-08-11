import React from 'react';
import { Button, Space, Table } from 'antd';
import Modal from '../modal/Modal';
import EditBlogForm from '../createBlogForm/CreateBlogForm';
import { isAction } from '@reduxjs/toolkit';
import { useDeleteUsersMutation } from '../../context/api/usersApi';

const TableUsers = ({ data: blogsData }) => {

    const [deleteBlog, { data: deletedData, isLoading }] = useDeleteUsersMutation()


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Budget',
            dataIndex: 'budget',
            key: 'budget',
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Modal title={"Edit"}>
                        <EditBlogForm />
                    </Modal>
                    <Button loading={isLoading} onClick={() => deleteBlog(record.action)}>Delete</Button>
                    {/* <button onClick={() => deleteBlog(record.action)}>Delete</button> */}
                </Space>
            )
        },
    ];

    const data = blogsData.map((user, inx) => (
        {
            key: `${inx}`,
            name: `${user.fname} ${user.lname}`,
            budget: `${user.budget}`,
            // desc: `${blog.desc}`,
            action: [`${user._id}`]
        }

    )) || []

    return <div className="">
        <Table className='' columns={columns} dataSource={data} />
    </div>
}
export default TableUsers;