// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from 'react'

import fetchProducts from '../../api/fetchproducts'
import ProductCard from '../ProductCard'
import Loading from '../Loading'
import AppContext from '../../context/AppContext'

import './index.css'

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  )
}

export default Products
