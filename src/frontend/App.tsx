import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='full-background'>
        <main style={{ paddingTop: '80px', TextAlign: 'center' }}>
        <p>Test site</p>
        <Navbar />
        </main>
      </div>
  )
}

export default App
