import React from 'react'
import { useGlobalContext } from '../../context'

// components
import CartContainer from './CartContainer'
// items
import Navbar from './Navbar'

function Appcart() {
  const {loading}=useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default Appcart
