import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ThreeCanvas from './components/ThreeCanvas'

function App() {

  return (
    <div>
      <h1 className='text-[60px] font-mono font-bold text-center p-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Shiro's Cadillac_2077</h1>
      <ThreeCanvas/>
    </div>
  )
}

export default App
