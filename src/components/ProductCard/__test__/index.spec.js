import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '..'

describe('Cart', () => {
    it('should render', () => {
        const product = {        
            id: '5d4aab8ba707c58f2522ddd7',
            title: "Product 1",
            image: "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
            price: 100
        }

        render(<ProductCard product={product}/>)

        const text = screen.getByText('Product 1')

        expect(text).toBeInTheDocument()

    })
})