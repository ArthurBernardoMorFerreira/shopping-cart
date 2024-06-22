// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import fetchProducts from '../../api/fetchproducts'
import AppContext from '../../context/AppContext'

import './index.css'

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  const { setProducts, setLoading } = useContext(AppContext)

  async function handleSearch(event) {
    event.preventDefault()

    setLoading(true)

    const products = await fetchProducts(searchValue)

    setProducts(products)

    setLoading(false)
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        required
        className="search__input" 
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button type="submit" className="search__button">   
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar
