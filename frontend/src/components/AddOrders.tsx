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


/*
import React, { useState, useEffect } from 'react'

const AddProduct = ({ setCount, count }) => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price,
                category
            })

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(() => {
                setCount(prev => prev + 1)
                setName("")
                setCategory("")
                setPrice(0)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>add product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="category">Category</label>
                <input type="text" name="" id="" value={category} onChange={(e) => setCategory(e.target.value)} />

                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="" value={price} onChange={(e) => setPrice(Number(e.target.value))} />

                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct

*/