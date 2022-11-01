import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Alltask from './Alltask'
import Main from './Main'

const Page = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/Alltask' element={<Alltask />}/>
    </Routes>
    
  )
}

export default Page