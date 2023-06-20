// Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number
// within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Parameters: Are you ever given an empty array? What then?
// Are you always given digits?

// Return: Whatever number was given, it is now split up into an array and the order
// of the number is reversed.

// Example: If we were given 9544 => [4,4,5,9]
//                           2356 => [6,5,3,2]
//                           undefined => not a number

//P: make a function that takes in a number
function reverseArray(num) {
  //make number a string and split it up
  let numArray = num.toString().split('').reverse()

  //reverse array
  return Number(...numArray)

  //make array integers again and return
}

reverseArray(9544) //should return 4459
console.log(reverseArray(2356), [6532])

//didn't work, try map
function reverseArray(num) {
  //make number a string and split it up
  let numArray = num.toString().split('').reverse()

  //reverse array
  //make array integers again and return
  return numArray.map((e) => parseInt(e))
}
//just needed to map through and make each string element into an integer
