import { useEffect, useState } from 'react'
import AddOrders from './AddOrders'
import type { Product } from './ShowProduct'

type Order = {
  id: number
  product: Product
  productId: number
  quantity: number
}

const ShowOrder = () => {
  const [orders, setOrders] = useState<Order[]>([])

  function getOrders() {
    fetch("http://localhost:3000/orders")
      .then(res => res.json())
      .then((data: { data: Order[] }) => {
        // console.log("data.data:", data.data)
        setOrders(data.data)
      })
      .catch(err => {
        console.error("error:", err.message)
      })

  }
  useEffect(() => {
    getOrders()
  }, [])

  if (orders.length === 0) return <h3>Loading data..</h3>
  return (
    <div>
      <AddOrders onOrderCreated={getOrders} />
      {/* types needed for onOrderCreated in AddOrders */}

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
