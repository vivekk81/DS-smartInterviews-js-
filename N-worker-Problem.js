
let arr = [1, 5, 8, 2, 13, 1, 8 , 12, 1, 5, 3, 6]
let k = 5

function validDistribution (arr, n, m, k){
    let sum = 0 
    for(let i = 0; i < n; i++){
        sum += arr[i]
        if(sum > m){
            k--
            sum = arr[i]
        }
    }
    return k >= 1
}

function handleMinimumWorkspace (arr, n, k){
    let l = Math.max(...arr)
    let sum = 0
    arr.forEach(element => {
       sum += element 
    });
    let h = sum
    let ans = sum
    while (l < h){
        let m = Math.floor((l+h)/2)
        let valid = validDistribution(arr, n, m, k)
        if(valid){
            ans = m
            h = m - 1
        }else {
            l = m + 1
        }
    }
    return ans
}

console.log(handleMinimumWorkspace(arr, arr.length, k))