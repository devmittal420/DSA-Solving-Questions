// Q1. String reverse without using inbult function.

// const originialString = "Hello World";
// function reverseString(str) {
//     let reverse = '';
//     for(let i=str.length - 1 ; i>=0;i--)
//     {
//         reverse += str[i];
//     }
//     return reverse;
// }
// const reversedString = reverseString(originialString);
// console.log(reversedString);

// Q2. longest palindrom program.

// function longestPalindrom(s){
//     if(!s || s.length === 0)
//     {
//         return '';
//     }
//     let longest = '';
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i+1; j <= s.length; j++) {
//             const substring = s.slice(i,j);

//             if(isPalindrom(substring) && substring.length > longest.length)
//             {
//                 longest = substring;
//             }
//         }
//     }
//     return longest;
// }
// function isPalindrom(str){
//     return str === str.split('').reverse().join('');
// }
// const inputString = "hello world bob madam";
// const result = longestPalindrom(inputString);
// console.log(result);

// Q3. check if a string is an anagram.

// const str1 = "master";
// const str2 = "smater";
// function isAnagram (str1,str2){
//     if(str1.length !== str2.length)
//     {
//         return '';
//     }
//     const sortedstr1 = str1.split('').sort().join('');
//     const sortedstr2 = str2.split('').sort().join('');
//     return sortedstr1 === sortedstr2;
// }
// if(isAnagram(str1,str2))
// {
//     console.log("Anagram");
// }
// else
// {
//     console.log("Not Anagram");
// }

// Q4. String reverse without reversing of individual words
// (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

// function stringReverse(str) {
//     return str.split(' ').reverse().join(' ');
// }
// const input = "Dev Mittal is a good boy";
// const result = stringReverse(input);
// console.log(result);

// Q5. To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method.

//      1st Method     by doing lower case.

// function isPalindrom(str){
//     const lowercase = str.toLowerCase();
//     const reverseStr = str.split('').reverse().join('');
//     return reverseStr === lowercase;
// }
// console.log(isPalindrom("1211"));

//    2nd Method       without using lower case

// function isPalindrom(str){
//     const reverseStr = str.split('').reverse().join('');
//     return reverseStr === str;
// }
// console.log(isPalindrom("-121"));

//    3rd Method      replace or remove all special characters in this method

// function isPalindrom(str){
//     const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     const reverseStr = cleanStr.split('').reverse().join('');
//     return reverseStr === cleanStr;
// }
// console.log(isPalindrom("madam"));

// Q6. To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing.

// function isPalindrom(str) {
//   const len = str.length;

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return "Not palindrom";
//     }
//   }
//   return "Palindrom";
// }

// const str = "121";
// const result = isPalindrom(str);
// console.log(result);

// Q7. Remove Duplicate characters from String.

// function removeDuplicates (str){
//     const char = str.split('');
//     const uniqueChar = {};

//     const filterChar = char.filter(char =>{
//         if(uniqueChar[char])
//         {
//             return false ;
//         }
//         else{
//             uniqueChar[char] = true;
//             return true;
//         }
//     }
//     );

//     const output = filterChar.join('');
//     return output;
// }

// const inputString = "Dev Mittal";
// const output = removeDuplicates(inputString);
// console.log(output);

// Q9. To find longest word from a string using (for of Loop) means iterate by an elements not by indexing.

// function findLongestWord(str){
//     const string = str.split(' ');
//     let max = 0;
//     let longestWord = '';

//     string.forEach( word => {
//         if (word.length > max) {
//             max = word.length;
//             longestWord = word;
//         }
//     });
//     return longestWord;
// }

// const input = "dev mittal is a good boy";
// const output = findLongestWord(input);
// console.log(output);

// Q10. To find longest word from a string using custom code.

// function longestWord (str){
//     const string = str.split(' ');
//     let max = 0;
//     let longest = '';
//     string.forEach(word => {
//         if(word.length > max)
//         {
//             max = word.length;
//             longest = word;
//         }
//     });
//     return longest;
// }
// const input = "Dev mittal is a happiest boy";
// const output = longestWord(input);
// console.log(output);

// Q11. To find longest common string from array of strings.

// Q12. To find vowels and its count in a given string.

// function findVowels(str){
//     const string = str.toLowerCase();
//     const vowels = {
//         'a' : 0,
//         'e' : 0,
//         'i' : 0,
//         'o' : 0,
//         'u' : 0
//     };
//     for (let char of string) {
//         if (char in vowels) {
//             vowels[char]++;
//         }
//     }
//     return vowels;
// }
// const input = "Dev mittal is a good boy";
// const output = findVowels(input);
// console.log(output);

// Q13. To find character occurance from the string.

// function characterOccurence (str){

//     const chars = {};
//     for (let char of str) {
//         if (chars[char]) {
//             chars[char]++;
//         }
//         else{
//             chars[char] = 1;
//         }
//     }
//     return chars;
// }
// console.log(characterOccurence("hello"));

// Q14. reverse program and input "-123" and output "-321".

// function reverse(str){
//     const number = Math.abs(str).toString();
//     const string = number.split('').reverse().join('');
//     return str < 0 ? -string : string;
// }
// console.log(reverse("-123"));

// Q15. To find the second largest number in an array.

// function secondLargestNumber(arr) {
//     let max = 0;
//     let secondMax = 0;
//     arr.forEach(word => {
//         if(word > max)
//         {
//             secondMax = max;
//             max = word;
//         }
//     });
//     return secondMax;
// }
// const input = [1,2,3,4,5,6,7,8,8,8,9,9];
// console.log(secondLargestNumber(input));

// Q16. To find the largest number in an array from convert an string.

// function largestNumber(arr) {
//     const arrayConvert = arr.split(',').map(Number);
//     let max = arrayConvert[0];
//     arrayConvert.forEach(word => {
//         if(word > max)
//         {
//             max = word;
//         }
//     });
//     return max;
// }
// const input = "1,2,3,4,5,7,4,3,2,6"
// console.log(largestNumber(input));

// Q17. To find the largest number in an array.

// function largestNumber(arr) {
//     let max = 0;
//     arr.forEach(word => {
//         if(word > max)
//         {
//             max = word;
//         }
//     });
//     return max;
// }
// const input = [1,4,7,3,8,3,9,7,8,5];
// console.log(largestNumber(input));

// Q18. To find the smallest number in an array.

// function largestNumber(arr) {
//     let max = Infinity;
//     arr.forEach(word => {
//         if(word < max)
//         {
//             max = word;
//         }
//     });
//     return max;
// }
// const input = [1,4,7,3,8,3,9,7,8,5];
// console.log(largestNumber(input));

// Q19. To find the kth largest number in an array

// function KthLargestNumber(arr,k) {
//     const newArray = [new Set(arr)];
//     newArray.sort((a,b) => b-a);
//     return arr[k-1];
// }
// const input = [1,4,7,3,8,3,9,7,8,5];
// const k=3;
// console.log(KthLargestNumber(input,k));

// Q20. To find the third largest number in an array.

// function thirdLargestNumber(arr) {
//     let max = 0;
//     let secondMax = 0;
//     let thirdMax = 0;
//     arr.forEach(word => {
//         if(word>max)
//         {
//             secondMax = max;
//             max = word;
//             if(secondMax>)
//         }

//     });
// }

// Q21. Given an integer array Arr of size N the task is to find the count of elements whose value is greater than all of its prior elements.
// Note : 1st element of the array should be considered in the count of the result.
// For example,
// Arr[]={7,4,8,2,9}
// As 7 is the first element, it will consider in the result.
// 8 and 9 are also the elements that are greater than all of its previous elements.
// Since total of  3 elements is present in the array that meets the condition.
// Hence the output = 3.

// function greaterElement(arr) {

//     const firstElement = arr[0];
//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > firstElement)
//         {
//             count++;
//         }
//     }
//     return count;
// }

// const input = [4,4,6,3,6,7,8,9];
// console.log(greaterElement(input));

// Q22. Add two numbers.

// function addNumber(num1,num2) {
//     let i = num1.length-1;
//     let j = num2.length-1;
//     let value = 0;
//     let carry = 0;
//     while(i >= 0 || j >= 0 || carry > 0)
//     {
//         if(i >= 0){value1 = parseInt(num1[i]);}
//         else{value1 =0;}
//         if (j >= 0){ value2 = parseInt(num2[j]);}
//         else{value2 =0;}
//         const sum = value1 + value2 + carry;
//         carry = Math.floor(sum / 10);
//         value = (sum % 10 + value).toString();
//         i--;
//         j--;
//     }
//     return value;
// }
// const num1 = "12345678765432123456765432234567654";
// const num2 =  "456784567898765456789876556789";
// const output = addNumber(num1,num2);
// console.log(output);

// Q23. Input - AAAABBCA
//      Output - 4A2B1C1A

// function countingCharacters(chars) {

//     let object = {};
//     let count = 1;
//     for (let i = 0; i < chars.length; i++) {
//             if(chars[i]==chars[i+1])
//             {
//                 count++;
//             }
//             else{
//                 object = object + count + chars[i];
//                 count = 1;
//             }
//        }
//     return object;
// }

// const input = "AAAABBCA";
// console.log(countingCharacters(input));

// Q24. Write a function which should give 1 on 0 and 0 on 1.

// function change(num) {

//     return (num * (-1)) + 1;
// }
// const num = 1;
// console.log(change(num));

// Q25. To find character occurrence from the string. and another method is for remove duplicate characters in string. and find maximum character
//      occurence.

// function characterOccurence(char) {
//     let register = {};
//     // let maxOccurence = 0;                     // USING THIS FOR FINDING MAXIMUM OCCURENCE IN STRING.
//     for (let i = 0; i < char.length; i++) {
//         if(!register[char[i]])
//         {
//             register[char[i]] = 0;
//         }

//         // register[char[i]] = 0;                     // BY THIS METHOD WE CAN REMOVE DUPLICATE CHARACTERS FROM SRTING.

//         register[char[i]]++;

//         // if(maxOccurence == 0 || register[char[i]] > register[maxOccurence])   // FOR FINDING MAX OCCURENCE CHARACTER.
//         // {
//         //     maxOccurence = char[i];
//         // }
//     }
//     // console.log(maxOccurence);
//     return register;
// }
// const input = "Hello";
// console.log(characterOccurence(input));

// Q26. if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and
//      ends at 3 (inclusive). The resulting string will be "dcbaefd".

// FOR SOLVING THREE CASES.

// function reversePrefix(str,ch1,ch2,ch3)
// {
//     let string = "";
//     let remainingString = "";
//     let storeChIndex = 0;
//     let found = false;
//     let concatenate;

//     for (let i = 0; i < str.length; i++) {
//         if((str[i] === ch1) || (str[i] === ch2) || (str[i] === ch3))
//         {
//             storeChIndex = i;
//             break;
//         }
//     }

//     if(storeChIndex != 0)
//     {
//         for (let i = storeChIndex ;i >=0; i--) {
//             remainingString = remainingString +str[i];
//         }

//         for (let i = storeChIndex + 1 ;i < str.length; i++) {
//             string = string +str[i];
//         }
//         concatenate = remainingString.concat(string);
//         return concatenate;
//     }
//     else{
//         return str;
//     }
// }
// console.log(reversePrefix("abcdefd","d"));
// console.log(reversePrefix("xyxzxe","z"));
// console.log(reversePrefix("abcd","z"));

//        FOR SOLVING ONLY ONE CASE.

// function reversePrefix(str){

//     let string = "";
//     let remainingString = "";
//     let storeChIndex = 0;
//     let found = false;
//     let concatenate;

//     for(let i = 0;i < str.length; i++)
//     {
//         if(str[i] === ch)
//         {
//             storeChIndex = i;
//             found = true;
//             string = str[i] + string;
//             break;
//         }
//         string = str[i] + string;
//     }

//     if(found == true)
//     {
//         for (let i = storeChIndex + 1; i < str.length; i++)
//         {
//             remainingString = remainingString + str[i];
//         }
//         concatenate = string.concat(remainingString);
//         return concatenate;
//     }
//     else{
//         return str;
//     }
// }
// const input = "abcef";
// const ch = "d";
// console.log(reversePrefix(input));

// Q27. Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
//      Return the positive integer k. If there is no such integer, return -1.

// function largestPositiveInteger(arr)
// {
//     for(i = 0; i < arr.length; i++)
//     {
//         for(j = i+1; j < arr.length; j++)
//         {
//             if(arr[i] == -arr[j])
//             {
//                     return Math.abs(arr[i]) + " is the only valid k we can find in the array";
//                     break;
//             }
//         }
//     }
//     return -1;
// }
// const input = [-1,2,-3,3,2];
// console.log(largestPositiveInteger(input));

// Q28. Generate OTP as per user choice getOTP(3) getOTP(4).

// function otp(num) {

// }

// Q29. To find a first pair from a number array whose sum is zero.

// function firstPair(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] == 0)
//             {
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }
// const input = [1,2,,3,4,5,-2];
// console.log(firstPair(input));

// Q30. Find all possible pairs from a number array which sum is zero.

// function allPossiblePair(arr){
//     let array = [] ;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] == 0)
//             {
//                 array.push([arr[i],arr[j]]);
//             }
//         }
//     }
//     return array;
// }
// const input = [1,2,3,-3,4,5,-2,4];
// console.log(allPossiblePair(input));

// Q31.  Find the pair of 2 nums whose sum is k, input [1,2,3,6,-1,3,5,-2,-4, 4], K = 4.

//    USING TWO LOOPS

// function pairOFTwoNumbers(nums) {

//     let pair = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] == k)
//             {
//                 pair.push([nums[i],nums[j]]);
//                 pair.pop([nums[i],nums[j]]);
//                 break;
//             }
//         }
//     }
//     return pair;
// }
// const input = [1,2,3,6,-1,3,5,-2,-4, 4];
// const k=4;
// console.log(pairOFTwoNumbers(input));

//                            USING ONE LOOP

// function pairOFTwoNumbers(nums,k) {

//     const register = {};
//     const array = [];

//     for (let i = 0; i < nums.length; i++) {
//         const word = k - nums[i];

//         if(!(register[word] === undefined))
//         {
//             array.push([register[word],i]);
//             delete register[word];
//         }
//         register[nums[i]] = i;
//     }
//     return array;
// }
// const nums = [1,2,3,6,-1,3,5,-2,-4, 4];
// const k=4;
// console.log(pairOFTwoNumbers(nums,k));

// Q32. Find the pair of 3 nums whose sum is k, input [1,2,3,6,-1,3,5,-2,-4,4] , K = 5.

// function threePairSum(nums) {
//     let array = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let ii = i+1;ii < nums.length; ii++) {
//             for (let iii = i+2; iii < nums.length; iii++) {
//                 if(nums[i] + nums[ii] + nums[iii] === k)
//                 {
//                     array.push([nums[i],nums[ii],nums[iii]]);
//                     array.pop([nums[i],nums[ii],nums[iii]]);
//                     // console.log([nums[i],nums[ii],nums[iii]]);
//                     console.log(array);
//                     // break;
//                 }
//                 // console.log([nums[i],nums[ii],nums[iii]]);
//                 // console.log(nums[i]);
//             }
//         }
//     }
//     // return array;
// }

// const input = [1,2,3,6,-1,3,5,-2,-4,4];
// const k = 4;
// console.log(threePairSum(input));

// Q33. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//      Symbol       Value
//      I             1
//      V             5
//      X             10
//      L             50
//      C             100
//      D             500
//      M             1000
//
//      Input: s = "III"
//      Input: s = "LVIII"
//      Input: s = "MCMXCIV"

// function romanNumbers(nums) {

//     register = {
//         value : I : 1,
//         value : V : 5,
//         value : X : 10,
//         value : L : 50,
//         value : C : 100,
//         value : D : 500,
//         value : M : 1000
//     };
// }

// Q34. To find unique values from 2 arrays and keep into one array. i.e. Union.

// function unique(nums) {

//     let input = [];
//     let unique = [];
//     let array = [];
//     for (let i = 0; i < input1.length; i++) {
//         input.push(input1[i]);
//     }
//     for (let i = 0; i < input2.length; i++) {
//         input.push(input2[i]);
//     }
//     for (let i = 0; i < input.length; i++) {
//         if(!array[input[i]])
//             {
//                 array[input[i]] = true;
//                 unique.push(input[i]);
//             }
//     }
//     return unique;
// }
// const input1 = [1,2,3,4,4,6,8];
// const input2 = [2,4,6,3,6,9,4,5,2,3];
// console.log(unique(input1));

// Q35. To find common values from 2 arrays and keep into one array. i.e. Intersection.

// function commonValues(arr) {
//     let array1 = [];
//     let array2 = [];

//     let input1Unique = [];
//     let input2Unique = [];

//     let intersection = [];
//     for (let i = 0; i < input1.length; i++) {
//         if (!array1[input1[i]]) {
//             array1[input1[i]] = true;
//             input1Unique.push(input1[i]);
//         }
//     }
//     for (let i = 0; i < input2.length; i++) {
//         if (!array2[input2[i]]) {
//             array2[input2[i]] = true;
//             input2Unique.push(input2[i]);
//         }
//     }
//     for (let i = 0; i < input1Unique.length; i++) {
//         if(input2Unique.includes(input1Unique[i]))
//         {
//             intersection.push(input1Unique[i]);
//         }
//     }
//     return intersection;
// }
// const input1 = [1,2,5,6,4,6,6,4];
// const input2 = [4,6,8,6,4,2,6,9,7];
// console.log(commonValues(input1,input2));

// Q36. Write a function to find the longest common prefix string amongst an array of strings.
//      If there is no common prefix, return an empty string "".
//      Input: str = ["flower","flow","flight"]
//      Output: "fl"

// function longestCommonPrefix(strs) {
//     for(i=0;i < strs[0].length;i++)
//     {
//         for(j = 1;j < strs.length;j++)
//         {
//             if(strs[0][i] != strs[j][i])
//             {
//                 return strs[0].slice(0,i);
//             }
//         }
//     }
//     return strs[0];
// }
// const strs = ["TRICYCLE","TRIANGLE","TRIPOD"];
// console.log(longestCommonPrefix(strs));

// Q37. Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21.

// function fibonacciSeries(nums) {
//     let numbers = [];
//     let num1 = 0;
//     let num2 = 1;
//     for (let i = 0; i < nums.length; i++) {
//         numbers.push(num1);
//         let num3 = num1 + num2;
//         num1 = num2;
//         num2 = num3;
//     }
//     return numbers;
// }
// const input = [0, 1, 1, 2, 3, 5, 8, 13, 21];
// console.log(fibonacciSeries(input));

// Q38 . armstrong number.

// Q39. Remove Duplicates from Sorted Array.
//      Input: nums = [1,1,2]
//      Output: 2, nums = [1,2,_]

// function removeDuplicates(nums) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++)
//   {
//     if(nums[i]!==nums[i+1])
//     {
//         nums[k] = nums[i];
//         k++;
//     }
//   }
//   return k;
// }
// const nums = [1,1,2];
// let k = removeDuplicates(nums);
// console.log("output : " + k , "nums : " + nums.slice(0,k));

// Q40.  Search insert program

// function searchInsert(nums){
//   let k =nums.length - 1;
//   // nums.sort((a,b) => a-b);
//   for(let i=0;i<nums.length;i++)
//   {
//     if(target < nums[0])
//     {
//         return i;
//     }
//     else if(target === nums[i])
//       {
//           return i;
//       }
//     else if(target !== nums[i])
//     {
//       if(target > nums[i] && target < nums[i+1])
//       {
//           return i+1;
//       }
//       else if(target > nums[k])
//       {
//           return k+1;
//       }
//     }
//   }
// }
// const input = [-1,3,5,6];
// target = 0;
// console.log(searchInsert(input));

// Q41. Longest Substring Without Repeating Characters
//      Example 1:

//      Input: s = "abcabcbb"
//      Output: 3
//      Explanation: The answer is "abc", with the length of 3.

//      Example 2:

//      Input: s = "bbbbb"
//      output: 1
//      Explanation: The answer is "b", with the length of 1.

//      Example 3:

//      Input: s = "pwwkew"
//      Output: 3
//      Explanation: The answer is "wke", with the length of 3.
//      Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// function lengthOfLongestSubstring(str) {
//     let c = 0;
//     let max = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0 ;j < str.length; j++) {
//             if(str[i] !== str[j+1])
//             {
//                 console.log(str[i]);
//                 // max = j;77

//             }
//             if(str[i] === str[j+1])
//             {
//                 return 0;
//             }
//         }
//         // i = max;
//     }
// }
// const input = "pwkew";
// console.log(lengthOfLongestSubstring(input));

// Q42. frequency Sort program
//      input - "cCaaAAbbbBBB"
//      Output - "bbbBBBaaAAcC"

// function frequencySort(str) {
//     const register = {};

//     for (let i = 0; i < str.length; i++) {
//         if(!register[str[i]])           // we check if any character is not in register so it gives count 0 to that character.
//         {
//             register[str[i]] = 0;
//         }
//         register[str[i]]++;           // now it count every character and store it in register.
//     }
//     // console.log(register);

//     const array = Object.entries(register);       //  now we have to convert it in array with its character and its frequency [char,freq].
//     // console.log(array);

//     array.sort((a,b) => b[1] - a[1]);           //  now we have to sort it in descending order for maintain frequency.
//     console.log(array);
//     let concatenate = "";               // we use this for joining all characters.

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0 ; j < array[i][1]  ; j++)
//         {
//             concatenate += array[i][0];
//             // console.log(concatenate);
//         }
//     }
//     return concatenate;
// }
// const input = "cCaaAAbbbBBB";
// console.log(frequencySort(input));

// Q43. var input = [
//                   [1, 2, 3, 4],
//                   [5, 6, 7, 8],
//                   [9, 10, 11, 12],
//                   [13, 14, 15, 16]
//                 ];

//     Output -> Hint - Sprial in clockwise order
//     [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5,6,7,11,10]

// function spiralClockwise(arr) {

//     let array = [];

//     let up = 0;
//     let down = arr.length - 1;
//     let left = 0;
//     let right = arr[0].length - 1;

//     while (left <= right && up <= down) {

//         for (let i = left; i <= right; i++) {
//             array.push(arr[up][i]);
//             // console.log(array);
//         }
//         up++;

//         for (let i = up ; i <= down; i++){
//             array.push(arr[i][right]);
//             // console.log(array);
//         }
//         right--;

//         for (let i = right; i >= left; i--) {
//             array.push(arr[down][i]);
//             // console.log(array);
//         }
//         down--;

//         for (let i = down; i >=up; i--) {
//             array.push(arr[i][left]);
//             // console.log(array);
//         }
//         left++;
//     }
//     return array;
// }

// const input = [
//                 [1, 2, 3, 4],
//                 [5, 6, 7, 8],
//                 [9, 10, 11, 12],
//                 [13, 14, 15, 16]
//               ];
// console.log(spiralClockwise(input));

// Q44.Input: digits = [1,2,3]
//     Output: [1,2,4]
//     Explanation: The array represents the integer 123.
//     Incrementing by one gives 123 + 1 = 124.
//     Thus, the result should be [1,2,4].

// function addOne(digit) {
//     let len = digit.length - 1;
//     for (let i =len  ; i >= 0; i--) {
//         if(digit[i] < 9)
//         {
//             digit[i]++;
//             return digit;
//         }
//         digit[i] = 0;
//         // console.log(digit);
//     }
//     return [1 , ...digit]
// }
// const input = [1,2,3];
// console.log(addOne(input));

// Q45. input = [1,2,3,4,5];
//      output = [1,2,3];
//      and its length comes 3.

// const arr = [1,2,3,4,5];

// for (let i = 0; i < arr.length; i++) {
//     arr.splice(3,);
// }

// console.log(arr);
// console.log(arr.length);

// Q. factorial question using recursion.

// function factorial(n) {
//     let i;
//     if(n==0 || n==1)
//     {
//         return 1;
//     }
//     else{
//         i =  n*factorial(n-1);
//     }
//     return i;
// }
// const input = 5;
// console.log(factorial(input));

// Q. Task for today - Array flattening

//  example 1: nested_array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//  flat_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  example 2: nested_array = [
//     [1, 2, 3, [1,2,3,4, [1,2,3]]],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//  flat_array = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// function nested_array(arr) {
//     flat_array = [];
//     let len = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             flat_array.push(arr[i][j]);
//         }
// }
// return flat_array;
// }
// const input =[[1, 2, 3, [1,2,3,4, [1,2,3]]],[4, 5, 6],[7, 8, 9]];
// console.log(nested_array(input));

//  Another simple method to solve this

// function nested_array(arr) {
//     return arr.flat(Infinity);
// }
// const input =[[1, 2, 3, [1,2,3,4, [1,2,3]]],[4, 5, 6],[7, 8, 9]];
// console.log(nested_array(input));

// class User{
//     constructor(name) {
//         this.name = name;
//         this.phoneNumbers = [];
//     }

//     addPhoneNumber(phoneNumber) {
//         if (!this.phoneNumbers.includes(phoneNumber)) {
//             this.phoneNumbers.push(phoneNumber);
//         }
//     }
// }

// let user1 = new User("Ankit");

// user1.addPhoneNumber("9998887776");

// user1.addPhoneNumber("12345");

// console.log(user1.name);
// console.log(user1.phoneNumbers);

// function mergeTwoLists(num1, num2) {
//     register = [];

//     let i = 0;
//     let j = 0;
//     while (i < num1.length && j < num2.length) {
//         if (num1[i] <= num2[j]) {
//             register.push(num1[i]);
//             i++;
//         } else {
//             register.push(num2[j]);
//             j++;
//         }
//     }
//     console.log(register);
// }
// const num1 = [1,2,4];
// const num2 = [1,3,5];
// console.log(mergeTwoLists(num1,num2));

// // Older way
// let isAllowedToVote;
// let age = 18;

// if (age >= 18) {
//   isAllowedToVote = true;
// } else {
//   isAllowedToVote = false;
// }

// console.log({ isAllowedToVote });

// // If Nested
// if (age >= 18) {
//   if (age === 18) {
//     console.log("Now, they can vote for the first time");
//   } else {
//     console.log("Can vote");
//   }
// } else {
//   console.log("Can not vote");
// }

// // Ternary Way : Medium

// const canVote = age >= 18 ? "Can Vote" : "Can not vote";
// const canVoteV2 =
//   age >= 18 ? age === 18 ? "Now okay, & allowed to vote" : "Can vote" : "Can not vote";

// console.log({ canVote, canVoteV2 });

// Normal Coder
// function canVoteV1(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Good coder
//   function canVoteV2(age) {
//     if (age >= 18) return true;
//     return false;
//   }
//   console.log(canVoteV2);

//   // Better coder
//   function canVoteV3(age) {
//     return age >= 18 ? true : false;
//   }
//   console.log(canVoteV3);

//   // Best coder
//   function canVoteV4(age) {
//     return age >= 18;
//   }
//   console.log(canVoteV4);

//   // Amazing coder
//   const canVoteV5 = (age) => age >= 18;
//   console.log(canVoteV5);

// const matchFruit = (fruit) => {
//     return fruit == "apple" || fruit == "grapes" ? "Sweet" : "Mixed"
// }

// Take an input & check if the count of the character is even then
// check if the character start with vowel then print Valid vowel otherwise, invalid vowel Or print, decline

// check first vowel

// const countCharacter = (input) => {
//     return typeof input === "string" ? input.length % 2 == 0 ? ['a','e','i','o','u'].includes(input[0]) ? "vowel" : "decline" : "decline" : "decline";
// }
// console.log(countCharacter("appl"));

// check last vowel

// const countCharacter = (input) => {
//     check = typeof input === "string" ? input.length % 2 == 0 ?['a','e','i','o','u'].includes(input[0] && input[input.length-1]) ? "vowel" : "decline" : "decline" : "decline";
//     console.log(check);
// }
// console.log(countCharacter("appa"));

// let runLoop = true;
// let count = 1;

// while (runLoop) {
//   console.log("Loop is running: ", count);
//   count++;

//   if (count === 11) {
//     runLoop = false;
//   }
// }

// console.log(Boolean());

// import { Linking, Platform } from 'react-native';
// import { v4 as uuidv4 } from 'uuid';a
// import {
//   getUniqueId,
//   getBrand,
//   getManufacturer,
//   getDeviceId,
//   getSystemVersion,
//   getSystemName,
//   getVersion,
//   getBundleId,
// } from 'react-native-device-info';
// import GetMessage from '@i18n';
// import { Validator } from 'format-utils';
// import { ITaskAttachment } from '@features/Business/Tasks/AddNewTask/types';
// import ToastView, { ShowToast } from '@components/ToastView';
// import {
//   GetAppBundle,
//   GetAppVersion,
//   GetBrowserSessionUUID,
//   GetMobileModel,
//   GetOsName,
//   GetOsVersion,
//   GetVendorName,
// } from '../browser-footprint';
// import { ITaskState } from '@features/Business/Tasks/types';

// export const GetUniqueId = (): string => {
//   return uuidv4();
// };

// export const GetNumericOTP = (): number => {
//   return Number(Math.floor(Math.random() * 900000) + 100000);
// };

// export const IsObjEmpty = (payload: object): boolean => {
//   return Object.keys(payload).length === 0 ? true : false;
// };

// export const HasKey = (obj: any, key: string): boolean => {
//   if (!key || !obj) {
//     return false;
//   }
//   return Object.prototype.hasOwnProperty.call(obj, key);
// };

// export const RedirectToSupportWhatsApp = (): void => {
//   Linking.openURL('http://api.whatsapp.com/send?phone=91' + '9767193181`');
// };

// export const RedirectToDiscord = (): void => {
//   Linking.openURL('https://discord.gg/emRqrFysne');
// };

// export const OpenChatOnWhatsApp = (contactNumber: string): void => {
//   const URL: string = `http://api.whatsapp.com/send?phone=91${contactNumber}`;
//   Linking.openURL(URL);
// };

// export const OpenPhoneDialer = (contactNumber: string): void => {
//   Linking.openURL(`tel:${contactNumber}`);
// };

// export const OpenMapLink = (location: number[]): void => {
//   if (!location || location?.length === 0) {
//     return;
//   }

//   const URL: string = `https://maps.google.com/?q=${location[1]},${location[0]}`;
//   if (Platform.OS === 'web') {
//     window.open(URL, '_blank');
//     return;
//   }
//   Linking.openURL(URL);
// };

// export const GetCurrentGreetings = (): string => {
//   const today = new Date();
//   const curHr = today.getHours();

//   if (curHr < 4) {
//     return GetMessage('IO_HELLO');
//   }
//   if (curHr < 12) {
//     return GetMessage('IO_GOOD_MORNING');
//   }
//   if (curHr < 16) {
//     return GetMessage('IO_GOOD_NOON');
//   }
//   return GetMessage('IO_GOOD_EVENING');
// };

// export const GetDeviceUniqueId = (): string => {
//   return getUniqueId();
// };

// export const GetPushNotificationId = (): string => {
//   return '';
// };

// export const GetAppDeviceInfo = async () => {
//   const deviceId = Platform.OS === 'web' ? await GetBrowserSessionUUID() : getUniqueId();
//   const deviceModel = Platform.OS === 'web' ? GetVendorName() : getBrand();
//   const deviceManufacturer = await getManufacturer();
//   const deviceName = Platform.OS === 'web' ? GetMobileModel() : getDeviceId();
//   const deviceOS = Platform.OS === 'web' ? GetOsName() : getSystemName();
//   const deviceOSVersion = Platform.OS === 'web' ? GetOsVersion() : getSystemVersion();
//   const appVersion = Platform.OS === 'web' ? GetAppVersion() : getVersion();
//   const appPackageName = Platform.OS === 'web' ? GetAppBundle() : getBundleId();
//   const pushNotificationId = GetPushNotificationId();
//   const isPushEnabled = GetPushNotificationId() === '' ? false : true;

//   const payload = {
//     deviceId,
//     deviceModel,
//     deviceManufacturer,
//     deviceName,
//     deviceOS,
//     deviceOSVersion,
//     appVersion,
//     appPackageName,
//     pushNotificationId,
//     isPushEnabled,
//   };

//   console.log('@@@MJ App Device Payload: ', payload);
//   return payload;
// };

// export const FormatIndianPhoneNumber = (phoneNumber: string = ''): string => {
//   if (phoneNumber === '') {
//     return '';
//   }

//   if (Number(phoneNumber.charAt(0)) === 0) {
//     return phoneNumber.substring(1);
//   }

//   let trimmedNumber = phoneNumber.replace('+91', '');
//   if (trimmedNumber.length === 10) {
//     return trimmedNumber;
//   }

//   let key: string = '';
//   const results = trimmedNumber.replace(/[()-/\s]/g, (char: any) => key[char] || '');
//   return results;
// };

// export const GetFileSize = (bytes: number, decimals: number = 2): string => {
//   if (bytes === 0) {
//     return '0 Bytes';
//   }
//   const k = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
//   const i = Math.floor(Math.log(bytes) / Math.log(k));
//   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
// };

// export const GenerateNewAttachmentName = (name: string): string => {
//   console.log('name----: ', name);
//   if (!name || name === '') {
//     console.log('namename: ', name);
//     return '';
//   }
//   const fomattedName: string = name.replace(/[^0-9a-zA-Z.]/g, '-');

//   console.log('fomattedName: ', fomattedName);

//   return `${GetUniqueId()}-${fomattedName}`;
// };

// export const ValidatePhoneNumber = (number: string): boolean => {
//   const reg = new RegExp('^[6-9][0-9]{9}$');
//   return reg.test(number);
// };

// export const ValidateUpiId = (id: string): boolean => {
//   return Validator.vpa(id);
// };

// export const IsExists = (data: any): boolean => {
//   return data === undefined || data === null;
// };

// export const IsEmailValid = (email: string) => {
//   const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (EmailRegex.test(email)) {
//     return true;
//   }
//   return false;
// };

// export const pluralizeString = (count: number, type: string) => {
//   switch (type.toUpperCase()) {
//     case 'FILE':
//       if (!count || count <= 1) {
//         return GetMessage('IO_FILE_ATTACHED');
//       }
//       return GetMessage('IO_FILES_ATTACHED');
//   }
// };

// export const CapitalizeFirstCharacter = (input: string): string => {
//   if (!input || input === '') {
//     return '';
//   }
//   return input.charAt(0).toUpperCase() + input.slice(1);
// };

// export const GetExpenseId = (businessName: string, sysId: string): string => {
//   if (!businessName || !sysId) {
//     return '';
//   }

//   return `${businessName
//     .split(' ')
//     .map((item: string) => item.toUpperCase().substring(0, 1))
//     .join('')}-${sysId}`;
// };

// export const bytesToMegaBytes = (bytes: number) => bytes / (1024 * 1024);

// export function bytesToSize(bytes: number): string {
//   console.log('@MJ bytes: ', bytes);
//   const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//   if (bytes === 0) return 'n/a';
//   const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
//   if (i === 0) return `${bytes} ${sizes[i]}`;
//   return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
// }

// export const IsNotNullAndUndefined = (val: any) => {
//   return val !== null && val !== undefined;
// };

// export const IsNotNullOrUndefined = (val: any) => {
//   return val !== null || val !== undefined;
// };

// export const CapitalizeWord = (char: any, defaultValue?: string) => {
//   if (!char) {
//     return defaultValue;
//   }
//   return char.charAt(0).toUpperCase() + char.slice(1);
// };

// export const GetRandomString = (size: number): string => {
//   let result = '';
//   var characters: string = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789';
//   var charactersLength = characters.length;
//   for (let i = 0; i < size; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// };

// export const ConverMBToBytes = (x: string) => {
//   const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
//   let l = 0,
//     n = parseInt(x, 10) || 0;
//   while (n >= 1024 && ++l) {
//     n = n / 1024;
//   }
//   return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
// };

// export const CompressFile = async (file: any) => {
//   // No support for additional document
//   if (file[0].type !== 'image/jpeg' && file[0].type !== 'image/png') {
//     ShowToast('Only images are supported as attachment.', 'dark');
//     return;
//   }

//   if (file[0].type === 'image/jpeg' || file[0].type === 'image/png') {
//     const Compress = require('compress.js');
//     const compress = new Compress();
//     const compressedFile = await compress.compress([...file], {
//       size: 1,
//       quality: 0.5,
//       maxWidth: 1600,
//       maxHeight: 1600,
//       resize: true,
//     });

//     const { alt, ext, endSizeInMb, prefix, data } = compressedFile[0];
//     const fileItem: ITaskAttachment[] = [
//       {
//         name: `biz-${GetRandomString(7)}-${alt}`,
//         type: ext,
//         size: endSizeInMb * 1048576,
//         prefix: prefix,
//         file: data,
//       },
//     ];

//     return fileItem;
//   }

//   const { name, type, size } = file[0];

//   const fileItem: ITaskAttachment[] = [
//     {
//       name: `biz-${GetRandomString(7)}-${name}`,
//       type: type,
//       size: size,
//       prefix: '',
//       file: file[0],
//     },
//   ];

//   return fileItem;
// };

// export const IsValidURL = (url: string): boolean => {
//   const res = url.match(
//     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
//   );
//   return res !== null;
// };

// export const GetTaskState = (number: number): ITaskState => {
//   switch (number) {
//     case 0:
//       return {
//         key: 0,
//         value: 'all',
//       };
//     case 1:
//       return {
//         key: 1,
//         value: 'draft',
//       };
//     case 2:
//       return {
//         key: 2,
//         value: 'pending',
//       };
//     case 3:
//       return {
//         key: 3,
//         value: 'started',
//       };
//     case 4:
//       return {
//         key: 4,
//         value: 'completed',
//       };
//     default:
//       return {
//         key: 0,
//         value: 'all',
//       };
//   }
// };

// export const OpenUrl = (url: string): void => {
//   const parsedURL: any = IsValidURL(url);
//   if (!parsedURL) {
//     ToastView('The link is not a valid one');
//     return;
//   }
//   console.log(parsedURL);
//   Linking.openURL(parsedURL[0]);
// };

// let age = 18;
// let isMarri ed = true;
// let isEducated = false;

// // Society
// // Invite people who are having age >=18 , should be educated & should married

// if (age >= 18 && (isEducated || isMarried)) {
//   console.log("Allowed in society party");
// } else {
//   console.log("Not Allowed in society party");
// }

// console.log(Boolean(0 && "Zero"));
// console.log(Boolean(0 && "0" && "Zero"));

// let age = 18
// console.log(Boolean(age && isMarried));
// console.log(Boolean(1));

// function reverseInteger(input) {

//     const numStr = Math.abs(input).toString();

//     let reversedStr = '';

//     for (let i = numStr.length - 1; i >= 0; i--) {
//         reversedStr += numStr[i];
//     }
//     const reversedNum = parseInt(reversedStr);
//     return input < 0  ? -reversedNum : reversedNum;
// }
// const input = 123
// const reversedInteger = reverseInteger(input);
// console.log(reversedInteger);

// Q. find unique or intersection element in both array.
//    n = [1,2,3,4,5,6,4,3,2,1]
//    m = [1,2,3,4,5,1]
//    result = [1,2,3,4,5];

// function intersection(n,m) {
//     let obj = {};
//     let emptyArray = [];

//     for (let i = 0; i < n.length; i++) {
//         obj[n[i]] = 1;
//     }

//     for (let i = 0; i < m.length; i++) {
//         if(obj[m[i]])
//         {
//             emptyArray.push(m[i]);
//             delete obj[m[i]];
//         }
//     }

//     console.log(emptyArray);
// }

// const n = [1,2,3,4,5,6,4,3,2,1];
// const m = [1,2,3,4,4,5,1];
// const result = intersection(n,m);
// console.log(result);

// function lengthOfLongestSubstring(input) {

//     let arr = input.split(' ');
//     let max = 0;
//     let emptyStr = {};
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0 ;j < input.length; j++) {
//             if(input[i] !== input[j+1])
//             {
//                 console.log(input[i]);
//                 // max = j;

//             }
//             if(input[i] === input[j+1])
//             {
//                 return 0;
//             }
//         }
//         // i = max;
//     }
// }
// const input = "pwwkew";
// console.log(lengthOfLongestSubstring(input));

// Q.

// function nested_array(arr) {
//     flat_array = [];
//     let len = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             flat_array.push(arr[j]);
//         }
// }
// return flat_array;
// }
// const input =[1, 2, 3, [1,2,3,4]];
// console.log(nested_array(input));

// function countingCharacters(chars) {
//     let object = {};
//     let count = 1;
//     for (let i = 0; i < chars.length; i++) {
//             if(chars[i] == chars[i+1])
//             {
//                 count++;
//             }
//             else{
//                 object = object + count + chars[i];
//                 count = 1;
//             }
//        }
//     return object;
// }
// const input = "AAAABBC";
// console.log(countingCharacters(input));

// Q.largest palindrom

function largestPalindrom(str) {
    const splitStr = str.split(" ");
    let max = 0;
    let largestPalindrome = "";
  
    for (let i = 0; i < splitStr.length; i++) {
      // console.log(splitStr.length);
  
      let word = splitStr[i];
      // console.log(word);
  
      let reversedWord = "";
  
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
  
      if (reversedWord === word) {
        if (word.length > max) {
          max = word.length;
          largestPalindrome = word;
        }
      }
    }
  
    return largestPalindrome;
  }
  
  const str = "Hello madam , my name is neha rawat. I am working with bob since 4 years.";
  console.log(largestPalindrom(str));
  