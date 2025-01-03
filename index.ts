export type FibArray = [number, number, number];

export default function (fibArray: FibArray) {
  const n = fibArray[2];

  const results = Array.from(fibArray.slice(0, 2));

  for (let i = 2; i < n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }

  return results.pop();
}
