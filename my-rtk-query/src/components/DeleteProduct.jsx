import React from "react";
import { useDeleteProductMutation } from "../app/service/dummyData";

const DeleteProduct = (prop ) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

    if (isError) {
      return <h1>OhoooNoooo We got an error</h1>;
    }
  
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    const handleDeleteProduct=async()=>{
      try{
        await deleteProduct(prop.productId)
      }catch(error){
        console.error("Error deleting product:", error)
      }
    }

  return (
    <div>
      <h1>{data?.title? `${data.title} successfully deleted`: ""}</h1>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
