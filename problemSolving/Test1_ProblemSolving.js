function findMinMaxSum(arr) {
  let minSum = Number.MAX_SAFE_INTEGER;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    const currentSum = totalSum - arr[i];
    minSum = Math.min(minSum, currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  return [minSum, maxSum];
}

const input = '1 2 3 4 5';

const arr = input.split(' ').map(Number);

const [minSum, maxSum] = findMinMaxSum(arr);

console.log(minSum, maxSum);
