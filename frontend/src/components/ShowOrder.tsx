import React, { useEffect, useState } from 'react'
import AddOrders from './AddOrders'

const ShowOrder = () => {
  const [orders, setOrders] = useState([])

  function getOrders() {
    fetch("http://localhost:3000/orders")
      .then(res => res.json())
      .then(data => {
        // console.log("orders:", data.orders)
        setOrders(data.orders)
      })
      .catch(err => {
        console.error("error:", err)
      })

  }
  useEffect(() => {
    getOrders()
  }, [])

  if (orders.length === 0) return <h3>Loading data..</h3>
  return (
    <div>
      <AddOrders onOrderCreated={getOrders} />

      <h2>Orders</h2>
      {orders.map((order) => {
        return (
          <div className='orderCard' key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Quantity: {order.quantity}</p>
            <p>Product: {order.product.name}</p>
            <p>Price: {order.product.price}</p>
            <p>Category: {order.product.category}</p>
          </div>
        )
      })}


    </div>
  )
}

export default ShowOrder
