// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

import { BsCart2 } from 'react-icons/bs'
import AppContext from '../../context/AppContext'

import './index.css'

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  return (
    <button 
      type="button"
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
      >
      <BsCart2 />
      
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  )
}

export default CartButton
