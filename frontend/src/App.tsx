import ShowProduct from './components/ShowProduct'
import './App.css'
import AddProduct from './components/AddProduct'
import { useState } from 'react'

const App = () => {
  const [countProductCreated, setCountProductCreated] = useState(0)
  return(
    <>
      <AddProduct count={countProductCreated} setCount={setCountProductCreated}/>
      <ShowProduct count={countProductCreated}/>
    </>
  )
}
export default App