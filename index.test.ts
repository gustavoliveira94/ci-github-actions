import { getLastName } from '.'

describe('Testing function getLastName', () => {
    it('should return last name', () => {
        expect(getLastName('Gustavo Oliveira')).toBe('Oliveiras')
    })
})