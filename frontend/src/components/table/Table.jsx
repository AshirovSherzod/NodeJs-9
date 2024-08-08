import React from 'react';
import { Space, Table, Tag } from 'antd';
import Modal from '../modal/Modal';
import EditBlogForm from '../createBlogForm/CreateBlogForm';
import { isAction } from '@reduxjs/toolkit';
import { useDeleteBlogsMutation } from '../../context/api/userApi';

const App = ({ data: blogsData }) => {

    const [deleteBlog, { data: deletedData, isLoading }] = useDeleteBlogsMutation()


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
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
                    <button onClick={() => deleteBlog(record.action)}>Delete</button>
                </Space>
            )
            // render: () => (
            //     <Space size="middle">
            //         <button>Edit</button>
            //         <button></button>
            //     </Space>
            // ),
        },
    ];

    const data = blogsData.map((blog, inx) => (
        {
            key: `${inx}`,
            name: `${blog.userId.fname}`,
            title: `${blog.title}`,
            desc: `${blog.desc}`,
            action: [`${blog._id}`]
        }

    )) || []
    console.log(blogsData);


    // blogsData.forEach((blog, inx) => {
    //     let obj = 
    //     data.push(obj)
    // })


    return <div className="">
        <Table className='' columns={columns} dataSource={data} />
    </div>
}
export default App;