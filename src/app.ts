export const calculateTerm = (position: number): number => {
    const numberOfConsecutive = 4
    let residue = (position % numberOfConsecutive) + 1

    const dividedByConsecutive = parseInt(`${position / numberOfConsecutive}`)
    const result = dividedByConsecutive * 2 + residue

    return result
}
