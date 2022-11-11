export const calculateTerm = (number: number): number => {
    const basicSequence: number[] = [1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8]

    const sequenceLenght = basicSequence.length - 1

    if (number <= sequenceLenght) {
        return basicSequence[number]
    }
    console.log('hola')
    return 0
}
