import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'

const SpecificProductById = () => {

  const {data, isError, isLoading} = useGetProductByIdQuery(2)
  if (isError) {
    return <h1>OhoooNoooo We got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
}

export default SpecificProductById ;