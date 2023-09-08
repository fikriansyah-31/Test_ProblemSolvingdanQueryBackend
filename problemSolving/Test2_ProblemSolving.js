function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        positiveCount++;
      } else if (arr[i] < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
    }
  
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;
  
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
  }
  
  // Input
  const n = 6;
  const arr = [-4, 3, -9, 0, 4, 1];