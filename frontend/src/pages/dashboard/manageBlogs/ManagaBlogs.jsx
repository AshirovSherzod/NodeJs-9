import React from 'react'
import { useGetBlogsQuery } from '../../../context/api/userApi'
import Table from '../../../components/table/Table'

const ManagaBlogs = () => {
    const { data, isSuccess } = useGetBlogsQuery()
    console.log(data?.payload)



    return (
        <div className="w-full">
            <h1>Hello</h1>
            <Table data={isSuccess ? data?.payload : []}/>
        </div>
    )
}

export default ManagaBlogs