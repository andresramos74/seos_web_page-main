import {render, screen} from '@testing-library/react'
import Header from '.'
import '@testing-library/jest-dom'

test('renders content', () =>{
  const component = render(<Header />)
  component
})