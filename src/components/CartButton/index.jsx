import React from "react"
import PropTypes from "prop-types";

const CartButton = ({ toggle }) => {
  return (
    <>
      <button type="button"
        className="text-blue-700 hover:text-white border hover:bg-blue-400 font-medium rounded-lg text-sm pl-5 pr-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        onClick={toggle}>
        <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="blue-700" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
          </path>
        </svg>
        <p className="text-align: center;">
          Cart
        </p>
      </button>
    </>
  )
}

CartButton.propTypes = {
  toggle: PropTypes.func,
};


export default CartButton