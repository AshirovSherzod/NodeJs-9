import React from 'react'
import { useGetBlogsQuery } from '../../../context/api/blogs'
import Table from '../../../components/table/Table'
import Modal from '../../../components/modal/Modal';
import CreateBlogForm from '../../../components/createBlogForm/CreateBlogForm';

const ManagaBlogs = () => {
  const { data, isSuccess } = useGetBlogsQuery()
  console.log(data)



  return (
    <div className="w-full">
      <div className="flex justify-end">
        <Modal children={true} title={"Create Blog"}>
          <CreateBlogForm />
        </Modal>
      </div>
      <Table data={isSuccess ? data?.payload : []} />
    </div>
  )
}

export default ManagaBlogs