import React from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>Error....!</h1>;
  }
  if (isLoading) {
    return <h1>Loading.......!</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-shirt",
        description: "This is the best T shirt from One 8 brand",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      console.error("Error adding new product", error);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
