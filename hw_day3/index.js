// 1. Write a JavaScript function that reverse a number.
function reverseNumber(x) {
  let res = 0;
  while (x !== 0) {
    const num = x % 10;
    x = parseInt(x / 10);
    res = res * 10 + num;
  }
  return res;
}
let x = 33243;
console.log("Question 1");
console.log("Input: x = " + x + " Output: " + reverseNumber(x));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
const word2 = "hananah";
function isPalindrome(word) {
  let i = 0,
    j = word.length - 1;
  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log("Question 2");
console.log("Input: String = " + word2 + " Output: " + isPalindrome(word2));

// 3. Write a JavaScript function that generates all combinations of a string.
const word3 = "dog";
function getAllCombinations(word) {
  let resList = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      const subString = word.slice(i, j);
      // const subString = word.subString(i,j); // Error: word.subString is not a function??
      resList.push(subString);
    }
  }
  return resList;
}
console.log("Question 3");
console.log(
  "Input: String = " + word3 + " Output: " + getAllCombinations(word3)
);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function isLetter(character) {
  const re = /^[A-Za-z]+$/;
  if (character.match(re) == null) {
    return false;
  } else {
    return true;
  }
}
function orderLetters(word) {
  let resList = [];
  for (let i = 0; i < word.length; i++) {
    if (isLetter(word[i])) {
      resList.push(word[i]);
    }
  }
  resList.sort();
  return resList.join("");
}

const word4 = "webmaster23";
console.log("Question 4");
console.log("Input: String = " + word4 + " Output: " + orderLetters(word4));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.

function convertString(string) {
  let wordList = [];
  for (let word of string.split(" ")) {
    //let in => index
    word = word[0].toUpperCase() + word.slice(1); //arr 里的元素是固定的,需要使用index来改变
    wordList.push(word);
  }
  return wordList.join(" ");
}
const word5 = "the quick brown fox";
console.log("Question 5");
console.log("Input: String = " + word5 + " Output: " + convertString(word5));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
function longestString(String) {
  let max = 0;
  const map = {};
  for (let word of String.split(" ")) {
    max = Math.max(max, word.length);
    if (!map[word.length]) {
      map[word.length] = word;
    }
  }
  return map[max];
}
const word6 = "Web Development Tutorial test1111111";
console.log("Question 6");
console.log("Input: String = " + word6 + " Output: " + longestString(word6));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.

function countVowels(string) {
  const consonantSet = new Set([
    "B",
    "C",
    "D",
    "F",
    "G",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "S",
    "T",
    "V",
    "X",
    "Z",
    "H",
    "R",
    "W",
    "Y"
  ]);
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toUpperCase();
    if (char !== " " && !consonantSet.has(char)) {
      res++;
    }
  }
  return res;
}
const word7 = "The quick brown fox";
console.log("Question 7");
console.log("Input: String = " + word7 + " Output: " + countVowels(word7));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
function checkPrime(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
const number8 = 9;
console.log("Question 8");
console.log("Input: number = " + number8 + " Output: " + checkPrime(number8));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number,
// string, and undefined.
function getType(arg) {
  return typeof arg;
}
const arg9 = 9;
console.log("Question 9");
console.log("Input: argument = " + arg9 + " Output: " + getType(arg9));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(x, y) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(new Array(y).fill(0));
  }
  return result;
}
const x10 = 3,
  y10 = 3;
console.log("Question 10");
console.log(
  "Input: x = " + x10 + " y =" + y10 + " Output: " + matrix(x10, y10)
);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
function findSecndNumbers(list) {
  const res = [];
  list.sort();
  res.push(list[1]);
  res.push(list[list.length - 2]);
  return res;
}
const list11 = [3, 2, 1, 4, 5];
console.log("Question 11");
console.log("Input: list = " + list11 + " Output: " + findSecndNumbers(list11));

// 12. Write a JavaScript function which says whether a number is perfect.
function perfectNumber(number) {
  //sum
  let sum = 0;
  //find all divisors
  let num = number;
  for (let i = 1; i < num; i++) {
    if (number % i === 0) {
      num = number / i;
      sum = sum + num + i;
    }
  }
  return sum === number * 2;
}
const number12 = 496;
console.log("Question 12");
console.log(
  "Input: number = " + number12 + " Output: " + perfectNumber(number12)
);

// 13. Write a JavaScript function to compute the factors of a positive integer.
function positiveFactors(number) {
  const res = [];
  let num = number;
  for (let i = 0; i < num; i++) {
    if (number % i === 0) {
      res.push(i);
      num = number / i;
      res.push(num);
    }
  }
  return res;
}
const number13 = 496;
console.log("Question 13");
console.log(
  "Input: number = " + number13 + " Output: " + positiveFactors(number13)
);

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
function amountTocoins(number, list) {
  list.sort(function (a, b) {
    return a - b;
  });
  let res = [];
  for (let i = list.length - 1; i >= 0; i--) {
    if (number / list[i] >= 1) {
      let times = parseInt(number / list[i]);
      number = number % list[i];
      while (times > 0) {
        times--;
        res.push(list[i]);
      }
    }
  }
  if (number === 0) {
    return res;
  } else {
    return -1;
  }
}
const number14 = 46,
  list14 = [25, 10, 5, 2, 1];
console.log("Question 14");
console.log(
  "Input: number = " +
    number14 +
    " , list = " +
    list14 +
    " Output: " +
    amountTocoins(number14, list14)
);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.
function powerFunction(x, y) {
  let power = 1;
  while (y > 0) {
    y--;
    power *= x;
  }
  return power;
}
const x15 = 3,
  y15 = 3;
console.log("Question 15");
console.log(
  "Input: x = " + x15 + " , y = " + y15 + " Output: " + powerFunction(x15, y15)
);

// 16. Write a JavaScript function to extract unique characters from a string.
function removeDuplicates(string) {
  let set = new Set();
  for (let char of string) {
    set.add(char);
  }
  //set to string
  // const res = Array.from(set).join("");
  const res = [...set].join("");
  return res;
}
const string16 = "thequickbrownfoxjumpsoverthelazydog";
console.log("Question 16");
console.log(
  "Input: String = " + string16 + " Output: " + removeDuplicates(string16)
);

//????有问题❓
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified
// string.
function getOccurrences(string) {
  const res = [];
  let maps = new Map();
  for (let char of string) {
    console.log(char);
    if (maps.has(char)) {
      console.log("有" + maps[char]);
      maps[char] = maps.get(char) + 1;
    } else {
      maps.set(char, 1);
    }
  }
  console.log(maps.size);
  return maps;
}
const string17 = "abcca";
console.log("Question 17");
console.log(
  "Input: String = " + string17 + " Output: " + getOccurrences(string17)
);

// // 18. Write a function for searching JavaScript arrays with a binary search.
function solution(array, target) {
  let left = 0,
    right = array.length - 1;
  array.sort(function (a, b) {
    return a - b;
  });
  return binarySearch(array, left, right, target);
}

function binarySearch(array, left, right, target) {
  //Recursive
  // if(right < left ){
  //   return -1;
  // }else{
  //   const mid = parseInt((left + right) / 2);
  //   console.log("mid index = " + mid);
  //   console.log(array[mid]);
  //   if (array[mid] === target) {
  //     console.log("get the target");
  //     return mid;
  //   } else if (target < array[mid]) {
  //     console.log("to the left");
  //     return binarySearch(array, left, mid - 1, target);
  //   } else {
  //     console.log("to the right");
  //     return binarySearch(array, mid + 1, right, target);
  //   }
  // }

  //Iteration
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const target18 = 10,
  list18 = [25, 10, 5, 2, 1];
console.log("Question 18");
console.log(
  "Input: number = " +
    target18 +
    " , list = " +
    list18 +
    " Output: " +
    solution(list18, target18)
);

// 19. Write a JavaScript function that returns array elements larger than a number.
function allLarger(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= target) {
      array.splice(i);
      //delete array[i];
    }
  }
  return array;
}
const target19 = 10,
  list19 = [25, 10, 5, 2, 1];
console.log("Question 19");
console.log(
  "Input: number = " +
    target19 +
    " , list = " +
    list19 +
    " Output: " +
    allLarger(list19, target19)
);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const res = [];
  while (length > 0) {
    length--;
    const randomIndex = getRandomInt(0, characters.length);
    res.push(characters[randomIndex]);
  }
  return res.join("");
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const number20 = 9;
console.log("Question 20");
console.log(
  "Input: number = " + number20 + " Output: " + generateRandomString(number20)
);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string
function countOccurences(string, letter) {
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      res++;
    }
  }
  return res;
}
const string22 = "microsoft.com",
  letter22 = "o";
console.log("Question 22");
console.log(
  "Input: string = " +
    string22 +
    " , letter = " +
    letter22 +
    " Output: " +
    countOccurences(string22, letter22)
);

// 23. Write a JavaScript function to find the first not repeated character.
function firstDistinctLetter(string) {
  const charList = Array.from(string);
  charList.sort();
  let duplicate = "";
  for (let i = 0; i < charList.length - 1; i++) {
    if (charList[i] === duplicate) {
      continue;
    } else if (charList[i] === charList[i + 1]) {
      duplicate = charList[i];
    } else {
      return charList[i];
    }
  }
  return charList[charList.length - 1];
}
const string23 = "abcabcdde";
console.log("Question 23");
console.log(
  "Input: string = " + string23 + " Output: " + firstDistinctLetter(string23)
);

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        // swap(list[j], list[j+1]);
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
// function swap(list, i, j) {
//   let temp = list[i];
//   list[i] = list[j];
//   list[j]= temp;
//   return list;
// }??
const list24 = [3, 2, 1, 4, 5];
console.log("Question 24");
console.log("Input: list = " + list24 + " Output: " + bubbleSort(list24));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
function longestWord(list) {
  let max = 0;
  const map = {};
  for (let word of list) {
    max = Math.max(max, word.length);
    if (!map[word.length]) {
      map[word.length] = word;
    }
  }
  return map[max];
}
const list25 = ["Australia", "Germany", "United States of America"];
console.log("Question 25");
console.log("Input: String = " + list25 + " Output: " + longestWord(list25));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.
function longestSubstringWithoutRepeatingChars(str) {
    let longest = "";
    let current = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      const index = current.indexOf(char);
  
      if (index === -1) {
        current += char;
        if (current.length > longest.length) {
          longest = current;
        }
      } else {
        current = current.slice(index + 1) + char;
      }
    }
  
    return longest;
  }
  

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function executeFunction(func) {
    func();
  }
  
  function sayHello() {
    console.log("Hello!");
  }
  
  executeFunction(sayHello); // outputs "Hello!"
  

// 29. Write a JavaScript function to get the function name.
function getFunctionName(func) {
    return func.name;
  }
  
