function findRotationCount(arr, start = 0, end = arr.length - 1) {
    let middle =  Math.floor((start + end) / 2);

    if(end === start){
        return start;
    }
    if(end < start){
        return 0;
    }
    if(arr[middle] < arr[middle - 1] && middle > start){
        return middle;
    }
    if(arr[middle + 1] < arr[middle] && middle < end){
        return middle + 1;
    }
    if(arr[end] > arr[middle]){
        return findRotationCount(arr, start, middle - 1);
    }
    return findRotationCount(arr, middle + 1, end);
}

module.exports = findRotationCount