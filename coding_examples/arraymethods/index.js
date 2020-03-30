const arr1 = [3, 4, 5, 6, 7, 8, 9]

const arr2 = arr1.filter((index, counter) => {
    (index / 2).isInteger ? index : '';
})

console.log(arr1, arr2)
console.log(this)