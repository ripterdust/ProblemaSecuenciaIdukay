import { calculateTerm } from './app'

const inputs = [0, 1, 5, 76, 545421, 87123641123172368]

inputs.map((input: number) => {
    calculateTerm(input)
})
