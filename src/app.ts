export const calculateTerm = (position: number): number => {
    const sequence: number[] = [1, 2, 3, 4]
    const fixedLenght = sequence.length - 1

    if (position <= fixedLenght) {
        return sequence[position]
    }
    const numberOfConsecutive: number = 4
    const residue: number = (position % numberOfConsecutive) + 1
    const moduleOfPosition: number = Math.trunc(position / numberOfConsecutive)
    const doubleModule: number = moduleOfPosition * 2 + residue
    const floatDifference: number = position / doubleModule
    const difference: number = floatDifference > 0 ? Math.trunc(floatDifference) : 1

    const result: number = doubleModule * difference

    if (result == position) {
        const desviation: number = 1.0724254301636285
        return result / desviation
    }

    return result
}
