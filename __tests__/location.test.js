updateRemoteStudents = require("../location")

describe("updateRemoteStudents", () => {
    test("Function returns an array", () => {
        testArr = []
        result = updateRemoteStudents(testArr)
        expect(result).toEqual([])
    })
    test("Adds 'location: remote' if location is absent from object", () => {
        testArr = [{ name: 'Ramanujan', age: 22 }]
        result = updateRemoteStudents(testArr)
        expect(result).toEqual([{name: 'Ramanujan', age: 22, property: 'remote'}])

    })
    test("Other 'location' properties are unnaffected", () => {
        testArr = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        result = updateRemoteStudents(testArr)
        expect(result).toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, property: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ])
    })
    test("Original array is unmutated", () => {
        testArr = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        result = updateRemoteStudents(testArr)
        expect(result).not.toBe(testArr)
        expect(testArr).toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ])
    })
})