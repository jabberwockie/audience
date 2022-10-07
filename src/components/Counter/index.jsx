import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
  const { items, id } = props
  const aux = items.filter((item) => item.id = id)

  return (
    <div className="p-10 flex">
      <button className="w-6 h-5 rounded-full bg-blue-500 text-white">
        <p className="text-xs">-</p>
      </button>
      <p className="px-2">{aux.length}</p>
      <button className="w-6 h-5 rounded-full bg-blue-500 text-white">
        <p className="text-xs">+</p>
      </button>
    </div>)
}

Counter.propTypes = {
  items: PropTypes.array,
  id: PropTypes.string
};
