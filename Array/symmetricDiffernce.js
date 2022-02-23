function symDiff(arr1, arr2) {
  const obj = {}
  const symDiff = []
  for (let i = 0; i < arr1.length; i++) {
    if (i !== arr1.indexOf(arr1[i])) continue
    obj[arr1[i]] = obj[arr1[i]] + 1 || 1
  }
  for (let j = 0; j < arr2.length; j++) {
    if (j !== arr2.indexOf(arr2[j])) continue
    obj[arr2[j]] = obj[arr2[j]] + 1 || 1
  }

  for (const key in obj) {
    if (obj[key] === 1) {
      symDiff.push(parseInt(key))
    }
  }

  return symDiff;
}

function sym(args) {
  const len = arguments.length - 1;
  let diff = symDiff(arguments[0], arguments[1])
  let i = 1
  while (i < len) {
    diff = symDiff(diff, arguments[i + 1])
    i++
  }
  return diff;

}


sym([1, 2, 3], [5, 2, 1, 4]);
