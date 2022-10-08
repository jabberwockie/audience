import React from 'react'
import { render, screen } from '@testing-library/react'
import CartButton from '..'

describe('CartButton', () => {
    it('should render', () => {    
        const toggle = jest.fn()

        render(<CartButton toggle={toggle} />)

        const text = screen.getByText('Cart')

        expect(text).toBeInTheDocument()
        
    })
})