import React from 'react'
import { useDeleteProductsMutation, useGetProductsQuery } from '../../../context/api/productsApi'
import { MdDelete } from "react-icons/md";

const ManageProducts = () => {
    const { data } = useGetProductsQuery()
    const [deleteProducts, { isSuccess, }] = useDeleteProductsMutation()
    console.log(data ? data : "not");

    let product = data?.payload?.map(product => (
        <div key={product._id} className="flex flex-col gap-3 border-[1px] p-[20px] rounded-[5px] ">
            <div className=" w-full h-[240px] object-cover">
                <img src={product.urls[0]} alt="" />
            </div>
            <div className="">
                <h1 className=''>{product.title}</h1>
                <p>{product.price}</p>
            </div>
            <div className="flex justify-end">
                <button onClick={()=> deleteProducts(product._id)} className='flex justify-center items-center w-[35px] text-slate-800 cursor-pointer h-[35px] text-2xl'><MdDelete /></button>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="grid gap-5 grid-cols-5">
                {product}
            </div>
        </div>
    )
}

export default ManageProducts