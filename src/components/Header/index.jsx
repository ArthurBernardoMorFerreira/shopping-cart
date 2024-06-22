// eslint-disable-next-line no-unused-vars
import React from "react"
import SearchBar from "../SearchBar"
import CartButton from "../CartButton"

import './index.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  )
}

export default Header
