function twoSums(arr, target) {
    let sums = [];
    let hashTable = {};
    let sumMinusElement = 0;
    for (let i = 0; i < arr.length; i++) {
        sumMinusElement = target - arr[i];
        if (hashTable[sumMinusElement.toString()] !== undefined) {
            sums.push([arr[i], sumMinusElement]);
        }
        hashTable[arr[i].toString()] = arr[i];
    }
    let result = sums.map(s => {
        return [arr.indexOf(s[0]), arr.indexOf(s[1])]
    })
    return result;
}

console.log(twoSums([1, 2, 3, 4, 5], 6));
console.log(twoSums([2, 7, 11, 15], 13));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));
