import { calculateTerm } from '../app'

describe('This function calculates the nth term', () => {
    describe('Calculates the term 0', () => {
        expect(calculateTerm(0)).toBe(1)
    })

    describe('calculates the term 5', () => {
        expect(calculateTerm(5)).toBe(4)
    })

    describe('calculates the term 76', () => {
        expect(calculateTerm(76)).toBe(39)
    })

    describe('Calculates the term 545421', () => {
        expect(calculateTerm(545421)).toBe(272712)
    })

    describe('Calculates the term 87123641123172368', () => {
        expect(calculateTerm(87123641123172368)).toBe(81239812739128371)
    })
})
