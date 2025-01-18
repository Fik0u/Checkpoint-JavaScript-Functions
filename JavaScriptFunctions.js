// I - String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.
function ReverseString(str) {
    var revStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
           revStr = revStr + str[i];
    }

          return revStr;
  }

  console.log(ReverseString("Hello")); //output = "olleH"


//   Count Characters: Create a function that counts the number of characters in a string.
 function CountCar(string){

       return string.length;
 }

 console.log(CountCar("Hello"));  // La console imprime 5.


//  Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalize(str) {
    var capStr = str[0].toUpperCase();
  
      for (var i = 1; i < str.length; i++) {
            if (str[i - 1] === " ") {
                capStr += str[i].toUpperCase();
          } else {
                capStr += str[i];
      }
    }
  
     return capStr;
  }
  
  console.log(capitalize("je suis développeur")) //output = Je Suis Développeur

//   **************************************************************************************************************************************
// II - Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
 function minMax(arr) {
var min = arr[0];
var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
             min = arr[i];
        }
        if (arr[i] > max) {
             max = arr[i];
        }
    }
      return `Le minimum est ${min} et le maximum est ${max}.`;
  }

  console.log(minMax([1,3,9,4,6])) //output = Le minimum est 1 et le maximum est 9.


// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumofArr(tab){
    var sum = 0;
    
       for(var i=0; i<tab.length; i++)
          sum+= tab[i];
          
     return sum; 
    }
    
    console.log(sumofArr([5,3,9,2])) //output = 19


// Filter Array: Implement a function that filters out elements from an array based on a given condition.
 function filterArr(arr){
var arrPositive = [];
    
      for (var elt of arr)
        if( elt>0)
           arrPositive.push(elt);
           
      return arrPositive;
    }
    
    console.log(filterArr([1,9,-4,2,-7])) // output = [1,9,2]

// **************************************************************************************************************************************
// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
 function factorial(n) {
var fact = 1;
     for (var i = n; i >= 1; i--) {
       fact = fact * i;
    }

    return fact;
  }

  console.log(factorial(5)) //output = 120


// Prime Number Check: Create a function to check if a number is prime or not.
 function Prime(n) {
    for (var i = 2; i < n; i++) {  // par souci d'optimisation, on peut mettre i <= n/2
       if (n % i === 0) {

         return false;
      }
    }
  
      return true;
  }
  
  console.log(Prime(5)) // output = true


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
 function Fibonacci(n){
var arr = [0,1];
  if(n===0) return arr[0];
  if(n===1) return arr;
  
    for (var i=2; i <= n; i++)
       arr[i] = arr [i-1]+arr[i-2];
    
      return arr;
}

console.log(Fibonacci(6)) //output = [ 0, 1, 1, 2, 3, 5, 8 ]