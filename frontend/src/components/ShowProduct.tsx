import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';

// fetch data from api and set it to state variable

const ShowProduct = ({ count }) => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/products/")
    .then(res => res.json())
    .then(data => setProductList(data.products))
    }, [count])

    if(productList.length === 0) return <div>No data</div>

  return (
    <div>
      {productList.map((obj) => {
        return <ProductCard key={obj.id} data={obj}></ProductCard>
      })}
    </div>
  )
}

export default ShowProduct
