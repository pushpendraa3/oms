import React, { useEffect, useState } from 'react'
import AddOrders from './AddOrders'

const ShowOrder = () => {
  // fetch orders from backend
  // show it
  // also show add order 
  // should rerender if called from addOrder
  const [orders, setOrders] = useState([])
  const [product, setProduct] = useState({})

  function getOrders() {
    fetch("http://localhost:3000/orders")
      .then(res => res.json())
      .then(data => {
        console.log("orders:", data.orders)
        //  console.log("products:", data.orders[0].product)
        setOrders(data.orders)
        setProduct(data.orders[0].product)
      })
      .catch(err => {
        console.error("error:", err)
      })

  }
useEffect(() => {
    getOrders()
}, [])

if(orders.length === 0) return <h3>Loading data..</h3>
  return (
    <div>
      <AddOrders onOrderCreated={getOrders}/>

      <h2>Orders</h2>
      {orders.map((obj) => {
        // console.log(obj)
        return(
          <div key={obj.id}>
          <h3>{obj.id}, {obj.quantity}</h3> 
          </div>
        )
      })}
        <span>{product.name}, {product.price}, {product.category}</span>
          
     
    </div>
  )
}

export default ShowOrder
