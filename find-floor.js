function findFloor(arr, n, start = 0, end = arr.length - 1) {
    let middle = Math.floor((start + end) / 2);

    if(n >= arr[end]) return arr[end];

    if(start > end ) return -1;

    if(middle > 0 && arr[middle - 1] <= n && n < arr[middle]) return arr[middle - 1];

    if(arr[middle] === n) return arr[middle];

    if(n < arr[middle]) return findFloor(arr, n, start, middle -1);

    return findFloor(arr, n, middle + 1, end);
}

module.exports = findFloor