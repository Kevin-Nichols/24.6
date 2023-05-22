function firstZero(arr, start = 0, end = arr.length -1){
    if(end >= start){
        let middle = start + Math.floor((end - start) / 2);

        if((middle === 0 || arr[middle -1] === 1) && arr[middle] === 0){
            return middle;
        } 

        if(arr[middle] === 1){
            return firstZero(arr, (middle +1), end);
        } else {
            return firstZero(arr, start, (middle - 1));
        }
    }
    return -1;
}

function countZeroes(arr) {
    let first = firstZero(arr);

    if(first === -1){
        return 0;
    } else {
        return arr.length - first;
    }
}

module.exports = countZeroes