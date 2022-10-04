import {React, useState, useRef } from "react"

const ProductList = allProducts => {
  const [basket, setBasket] = useState([])
  const [subtotal, setSubTotal] = useState(0)
  const currentProduct = useRef("")
  const products = allProducts.data
  
  const handleClick = (id) =>{
    const aux = basket;
    aux.push(id)
    setBasket(aux)
    currentProduct.current = id
    console.log(currentProduct)
    console.log("basket", basket)
    basket.forEach(item => {      
        const aux = subtotal + item.price
        setSubTotal(aux)
  })}
  
        return (
          <div className="bg-gray-100">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Available Products</h2>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.title} className="group relative" 
                  onClick={() => {
                    handleClick(product)
                    }}>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                          </a>
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">
                    Total: ${subtotal}
              </p >
              <p className="text-xl font-medium text-gray-900">
                Items: {basket.length}
              </p>
              </div>
            </div>
          </div>
        )
}

export default ProductList