export const calculateTerm = (position: number): number => {
    const numberOfConsecutive = 4
    let residue = (position % numberOfConsecutive) + 1

    const moduleOfPosition = parseInt(`${position / numberOfConsecutive}`)
    const doubleModule = moduleOfPosition * 2 + residue

    const floatDifference = position / doubleModule
    const difference = floatDifference > 0 ? Math.trunc(floatDifference) : 1
    const result = doubleModule * difference

    return result
}
