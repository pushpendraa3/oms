import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
type ShowProductProps = {
  count: number
}
export type Product = {
  id: number
  name: string
  price: number
  category?: string
}
const ShowProduct = ({ count }: ShowProductProps) => {
    const [productList, setProductList] = useState<Product[]>([])

    useEffect(() => {
    fetch("http://localhost:3000/products/")
    .then(res => res.json())
    .then((data: { data: Product[] }) => {
      setProductList(data.data)
    })
    }, [count])

    if(productList.length === 0) return <div>Loading data</div>

  return (
    <div>
      {productList.map((obj) => {
        return <ProductCard key={obj.id} data={obj}></ProductCard>
      })}
    </div>
  )
}

export default ShowProduct
