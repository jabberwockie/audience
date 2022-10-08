import React from 'react'
import { render, screen } from '@testing-library/react'
import AddToCartModal from '..'

describe('Add to cart modal', () => {
    it('should render', () => {
        const setOpen = jest.fn()
        const open = true
        render(<AddToCartModal open={open} setOpen={setOpen}/>)

        const text = screen.getByText('Item added to cart!')

        expect(text).toBeInTheDocument()
        
    })
})