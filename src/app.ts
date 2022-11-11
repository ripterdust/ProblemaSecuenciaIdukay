export const calculateTerm = (position: number): number => {
    const successiveNumbers: number = 3
    if (position <= successiveNumbers) {
        return position + 1
    }

    const numberOfConsecutive = 4
    const residue = (position % numberOfConsecutive) + 1
    const dividedByConsecutive = parseInt(`${position / numberOfConsecutive}`)
    const result = dividedByConsecutive * 2 + residue

    return result
}
