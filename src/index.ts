import { calculateTerm } from './app'

const inputs = [0, 1, 2, 3, 4, 5, 76, 545421, 87123641123172368]

inputs.map((input: number, key: number) => {
    const result = calculateTerm(input)
    console.table({ input, result })
})
