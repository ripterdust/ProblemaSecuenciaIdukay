export const calculateTerm = (position: number): number => {
    const successiveNumbers: number = 3
    if (position <= successiveNumbers) {
        return position + 1
    }

    return 0
}
