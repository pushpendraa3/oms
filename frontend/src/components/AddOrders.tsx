import React, { useState } from 'react'

const AddOrders = ({ onOrderCreated }) => {
  const [productId, setProductId] = useState(0)
  const [quantity, setQuantity] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId,
        quantity
      })

    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(() => {

        setProductId(0)
        setQuantity(0)
        onOrderCreated()
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        ProductId: <input type="number" name="" id="" value={productId} onChange={(e) => setProductId(Number(e.target.value))} />
        quantity: <input type="number" name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <button type="submit">Add Order</button>
      </form>
    </div>
  )
}

export default AddOrders