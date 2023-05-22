function firstItem(arr, n, start = 0, end = arr.length -1){
    if(end >= start){
        let middle = Math.floor((start + end) / 2);

        if((middle === 0 || n > arr[middle -1]) && arr[middle] === n){
            return middle;
        } 

        if(n > arr[middle]){
            return firstItem(arr, n, (middle + 1), end);
        } else {
            return firstItem(arr, n, start, (middle - 1));
        }
    }
    return -1;
}

function lastItem(arr, n, start = 0, end = arr.length -1){
    if(end >= start){
        let middle = Math.floor((start + end) / 2);

        if((middle === arr.length - 1 || n < arr[middle + 1]) && arr[middle] === n){
            return middle;
        } 

        if(n < arr[middle]){
            return lastItem(arr, n, start, middle - 1);
        } else {
            return lastItem(arr, n, (middle + 1), end);
        }
    }
    return -1;
}

function sortedFrequency(arr, n) {
    let first = firstItem(arr, n);
    let last = lastItem(arr, n);
    
    if(first == -1){
        return first;
    } else {
        return last - first + 1;
    }
}

module.exports = sortedFrequency