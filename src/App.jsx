import React from 'react'
import Background from "./Components/Background"
import Foreground from './Components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-white'>
     <Background/>
     <Foreground/>
     
    </div>
  )
}

export default App