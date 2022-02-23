/**  
 * [1, 2, 5, 4, 0] and  [2, 0, 1, 4, 5] returns true
 * [1, 2, 5, 4, 0]a and [2, 4, 5, 0, 11] returns flase
 */
// equal array
const isArrayEqual = (arr1, arr2) => {
  const obj = {};
  if (arr1.length !== arr2.length) return false;

  for (v of arr1) {
    obj[v] = ++obj[v] || 1
  }

  for (v of arr2) {
    if (!obj[v]) return false;
    obj[v] = --obj[v]
  }
  return true
}
isArrayEqual([1, 2, 5, 4, 0], [2, 1, 4, 5])
isArrayEqual([1, 2, 5, 4, 0], [2, 4, 5, 0, 11])