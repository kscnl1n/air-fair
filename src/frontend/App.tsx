import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='full-background'>
        <main className='centered-main'>
        <h1>Welcome to Air Fair!</h1>
        <p className='homepage-text'></p>
        <Navbar />
        </main>
      </div>
  )
}

export default App
