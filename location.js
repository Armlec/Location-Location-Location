function updateRemoteStudents (arr) {
    newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push({...arr[i]});
        if (!arr[i].hasOwnProperty("location")) {
            newArr[i].property = "remote"
        }
    }

    return newArr;
}

studentArr = [
    { name: 'Hypatia', age: 31, location: 'leeds' },
    { name: 'Ramanujan', age: 22 },
    { name: 'Tao', age: 47, location: 'manchester' }
  ]

module.exports = updateRemoteStudents

console.log(updateRemoteStudents(studentArr))
console.log(studentArr)