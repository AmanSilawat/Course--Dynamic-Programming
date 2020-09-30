// Implementing prefix
// sum array

// Fills prefix sum array
function fillPrefixSum(arr, n) {
    let prefixSum = [];
    prefixSum[0] = arr[0];

    // Adding present element
    // with previous element
    for (i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    
    console.log(prefixSum);
}

// Driver Code
let arr = [10, 4, 16, 20];
let n = arr.length;

fillPrefixSum(arr, n);