import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Counter } from "../Counter";

export const ProductCard = (props) => {
  const { product = {}, basket, setBasket } = props

  const handleClick = (prod) => {
    const aux = [];
    aux.push(...basket, prod)
    setBasket(aux)
  }

  return (
    <div key={product.title} className="group relative border-2 border-gray-200 rounded-lg pb-5"
      onClick={() => {
        handleClick(product)
      }}>
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
  setBasket: PropTypes.func,
  subtotal: PropTypes.number,
  setSubtotal: PropTypes.func
};