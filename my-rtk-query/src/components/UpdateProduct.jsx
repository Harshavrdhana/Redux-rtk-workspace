import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = (prop) => {
  const [updateProduct, {data,error,isLoading}]= useUpdateProductMutation();


  if(error){
    <h1>Error.......!</h1>
  }
  if(isLoading){
    <h1>Loading.......!</h1>
  }

  const handleUpdateProduct = async()=>{
    try{
      const updatedProductData={
        title: "Title updated",
      };
      await updateProduct({
        id: prop.productId,
        updatedProduct: updatedProductData
      })
    }catch(error){
      console.error("Error updating product:", error );
    }
  }
  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}> Update Product</button>
    </div>
  )
}

export default UpdateProduct