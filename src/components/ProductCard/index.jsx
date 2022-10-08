import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import AddToCartModal from "../AddToCartModal";

const ProductCard = (props) => {
  const { product = {}, basket, updateCart, count } = props
  const [open, setOpen] = useState(false)

  const handleClick = (prod) => {
    count.current++
    const newProduct = { ...product, uniqueKey: count.current }
    const aux = [...basket, newProduct];
    updateCart(aux)
    setOpen(!open)
  }

  const handleModal = useCallback(() => {
    setOpen(!open)
  }, [basket])

  return (
    <div key={product.uniqueKey} className="group relative border-2 border-gray-200 rounded-lg pb-5"
      onClick={() => {
        handleClick(product)
      }}>
        <AddToCartModal open={open} setOpen={handleModal}/>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 px-3 flex justify-between">
        <h3 className="text-sm text-gray-700">
          {product.title}
        </h3>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>)
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  basket: PropTypes.array,
  updateCart: PropTypes.func,
  subtotal: PropTypes.number,
  setSubtotal: PropTypes.func,
  uniqueKey: PropTypes.number,
  count: PropTypes.any
};

export default ProductCard