//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

array = [] //a place to store the values that are multplies of 3 or 5

for(i = 0; i < 1000; i++){  //the numbers below 1000
  if(i%3 === 0 || i%5===0){   // multiples of 3 OR 5
    array.push(i)  // put them in our array
  }
}

total = array.reduce(function(a, b){return a+b;})  // add up all the indexes in the array
console.log(total) //Bam!
