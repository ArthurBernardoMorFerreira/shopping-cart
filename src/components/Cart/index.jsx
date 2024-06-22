// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

import CartItem from '../CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

import './index.css'

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((accumulator, item) => item.price + accumulator, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart__active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  )
}

export default Cart
