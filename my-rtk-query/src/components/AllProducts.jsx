import React from "react";
import { useGetAllProductQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  if (isError) {
    return <h1>OhoooNoooo We got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.products.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
