import { calculateTerm } from './app'

const input = 76
const result = {
    input,
    result: calculateTerm(input),
}

console.table(result)
