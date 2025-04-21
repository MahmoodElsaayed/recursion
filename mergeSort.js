function mergeSort(array) {
    if (array.length === 1)
        return array // if array has one element (sorted), return it
    else {
        const midpoint = Math.floor(array.length / 2)
        // sort the left half of the array
        const sortedLeft = mergeSort(getSubArray(array, 0, midpoint))
        // sort the right half of the array
        const sortedRight = mergeSort(
            getSubArray(array, midpoint, array.length)
        )
        // merge the two sorted parts and return the result
        return merge(sortedLeft, sortedRight)
    }
}

function getSubArray(array, start, end) {
    const subArray = []
    for (let i = 0; start < end; i++) {
        subArray[i] = array[start++]
    }
    return subArray
}

function merge(arrayA, arrayB) {
    const mergedArray = []
    let a = 0,
        b = 0,
        m = 0
    // repeat comparison till indecies exceed both arrays
    while (a < arrayA.length || b < arrayB.length) {
        // if one array "runs out", copy the rest of second array into mergedArray and skip to next iteration
        if (a >= arrayA.length) {
            mergedArray[m++] = arrayB[b++]
            continue
        } else if (b >= arrayB.length) {
            mergedArray[m++] = arrayA[a++]
            continue
        }
        // compare the smallest of each list, store the smaller, then increment index to exclude it from following comparisons
        if (arrayA[a] < arrayB[b]) {
            mergedArray[m++] = arrayA[a++]
        } else {
            mergedArray[m++] = arrayB[b++]
        }
    }
    return mergedArray
}

console.log(mergeSort([5, 1, 4, 7, 9, 3, 2, 5, 0]))
