import { React, useState, useCallback, useEffect } from "react"
import Cart from "../Cart"
import CartButton from "../CartButton"
import { ProductCard } from "../ProductCard"

const Catalogue = allProducts => {
  const products = allProducts.data
  const [basket, setBasket] = useState([])
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  const updateCart = useCallback((updatedBasket) => {
    setBasket(updatedBasket)
  }, [basket])

  return (
    <div className="bg-gray-100">
      <div className="flex p-5 justify-end">
        <Cart
          open={open}
          toggle={toggle}
          basket={basket}
          updateCart={updateCart}
        />
        <CartButton toggle={toggle} />
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Available Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              basket={basket}
              setBasket={setBasket}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Catalogue