import { calculateTerm } from '../app'

describe('This function calculates the nth term', () => {
    test('This calculates the 0 term', () => {
        expect(calculateTerm(0)).toBe(1)
    })

    test('This calculates the 5 term', () => {
        expect(calculateTerm(5)).toBe(4)
    })

    test('calculates the term 76', () => {
        expect(calculateTerm(76)).toBe(39)
    })

    test('Calculates the term 545421', () => {
        expect(calculateTerm(545421)).toBe(272712)
    })

    test('Calculates the term 87123641123172368', () => {
        expect(calculateTerm(87123641123172368)).toBe(81239812739128371)
    })
})
