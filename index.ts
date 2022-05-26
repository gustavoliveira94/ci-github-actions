export const getLastName = (name: string) => {
    const splitName = name.split(' ')
    const lastName = splitName[splitName.length - 1]

    return lastName;
}