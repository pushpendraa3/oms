import ShowProduct from './components/ShowProduct'
import './App.css'
import AddProduct from './components/AddProduct'
import { useState } from 'react'
import ShowOrder from './components/ShowOrder'
// import AddOrders from './components/AddOrders'

const App = () => {
  const [countProductCreated, setCountProductCreated] = useState<number>(0)
  return(
    <>
      <AddProduct setCount={setCountProductCreated}/>
      <ShowProduct count={countProductCreated}/>
      <ShowOrder />
      
    </>
  )
}
export default App