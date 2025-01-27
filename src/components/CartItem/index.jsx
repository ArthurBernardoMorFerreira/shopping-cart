// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import propTypes from 'prop-types'

import { BsFillCartDashFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'

import AppContext from '../../context/AppContext'

import './index.css'

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext) 
  const { id, thumbnail, title, price } = data

  function handleRemoveItem() {
    const updateItems = cartItems.filter((item) => item.id != id)
    setCartItems(updateItems)
  }

  return (
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt=""
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button" 
          className="button__remove-item"
          onClick={handleRemoveItem}
        > <BsFillCartDashFill /> </button>
      </div>
    </section>
  )
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired

export default CartItem
