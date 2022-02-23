/**
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 There is a large pile of socks that must be paired by color. 
 Given an array of integers representing the color of each sock, 
 determine how many pairs of socks with matching colors there are.
   Example

n = 9 and arr =[10, 20, 20, 10, 10, 30, 50, 10, 20] returns 3;
n = 7 and arr =[1,2,1,2,1,3,2] returns 2

 */


//simple solution
function sockMerchant(n, ar) {
let totalPair = 0;
ar = ar.sort((a,b) => a- b)
for(let i = 0; i< n; i++){
  if(ar[i] === ar[i + 1]){
    totalPair +=1;
    i +=1
  }
}

return totalPair
}

// better
function stockAndCount( n, arr ) {
    let pairs = 0;
    const colors = arr.reduce((acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});

    Object.keys(colors).forEach( n => {
        let _pair = parseInt( colors[n] / 2);
        if ( _pair >= 1 ) pairs += _pair;
    });

    return pairs;
}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10 ,20])