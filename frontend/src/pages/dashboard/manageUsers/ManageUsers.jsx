import Table from '../../../components/table/Table'
import React from 'react'
import { useGetUsersQuery } from '../../../context/api/usersApi'
import Modal from "../../../components/modal/Modal"
// import CreateBlogForm from '../../../components/createBlogForm'
import TableUsers from '../../../components/tableUsers/TableUsers'
import CreateUsersForm from '../../../components/createUsersForm/CreateUsersForm'

const ManageUsers = () => {
  const { data, isSuccess } = useGetUsersQuery()
  console.log(data);

  return (
    <div>
      {/* <Table data={data} /> */}
      <Modal children={true} title={"Create Users"}>
        <CreateUsersForm />
      </Modal>
      <TableUsers data={isSuccess ? data?.payload : []} />
    </div>
  )
}

export default ManageUsers