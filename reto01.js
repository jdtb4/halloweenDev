const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;

  const dp = Array(cols).fill(0);

  dp[0] = dream[0][0];

  for (let j = 1; j < cols; j++) {
    dp[j] = dp[j - 1] + dream[0][j];
  }

  for (let i = 1; i < rows; i++) {
    dp[0] += dream[i][0];
    for (let j = 1; j < cols; j++) {
      dp[j] = dream[i][j] + Math.min(dp[j], dp[j - 1]);
    }
  }
  return dp[cols - 1];
}

console.log(findSafestPath(dream)); // 7
