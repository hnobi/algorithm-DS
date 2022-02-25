// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou


function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
for(let i = 0; i < collection.length; i++){
  let allowPush = true;
 for(let key in source){
    if(collection[i][key] !== source[key]){
      allowPush = false;
    }
  }
  if(allowPush){
    arr.push(collection[i])
  }

}

  return arr;
}

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

