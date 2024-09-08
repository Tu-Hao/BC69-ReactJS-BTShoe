import { useState } from 'react'
import './App.css'
import { ShoesStore } from './BTShoe/ShoesStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoesStore/>

    </>
  )
}

export default App
