
import '@testing-library/jest-dom'
import Root from "../Root"
import { render } from '@testing-library/react'

test("Renderiza o Root", () => {
    render(<Root />)
    expect(true).toBeTruthy()
})


