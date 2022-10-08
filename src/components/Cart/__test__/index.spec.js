import React from 'react'
import { render, screen } from '@testing-library/react'
import Cart from '..'

describe('Cart', () => {
    it('should render', () => {
        const basket = []
        const toggle = jest.fn()
        const updateCart = jest.fn()
        const open = true

        render(<Cart open={open} toggle={toggle} basket={basket} updateCart={updateCart}/>)

        const text = screen.getByText('Shopping cart')

        expect(text).toBeInTheDocument()
        
    })
})