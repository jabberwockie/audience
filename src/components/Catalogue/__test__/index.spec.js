import React from 'react'
import { render, screen } from '@testing-library/react'
import Catalogue from '..'

describe('Catalogue', () => {
    it('should render', () => {
        const data = []
        render(<Catalogue data={data} />)

        const text = screen.getByText('Available Products')

        expect(text).toBeInTheDocument()
    })
})