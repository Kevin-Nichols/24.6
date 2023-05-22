function pivotSearch(arr){
    let start = 0;
    let end = arr.length -1;
    if(arr[start] < arr[end]){
        return 0;
    }

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] > arr[middle + 1]){
            return middle + 1;
        } else if( arr[start] <= arr[middle]){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
}

function binarySearch(arr, n, start, end){
    if(n > arr[end] || n < arr[start]){
        return -1;
    }

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === n){
            return middle;
        } else if(n < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }
    return -1;
}

function findRotatedIndex(arr, n){
    let pivot = pivotSearch(arr);
    
    if(n >= arr[0] && n <= arr[pivot - 1] && pivot > 0){
        return binarySearch(arr, n, 0, pivot -1);
    } else {
        return binarySearch(arr, n, pivot, arr.length - 1);
    }
}

module.exports = findRotatedIndex