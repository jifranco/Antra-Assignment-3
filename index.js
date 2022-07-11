//1. Write a javascript function that reverses a number
//Example x = 32243
// example output: 34223
function numReverse(number){
    arr=String(number)
    newArr=arr.split('').reverse().join('');
    return newArr
}
console.log(numReverse(2345));

//2. Write a JavaScript function that checks 
//whether a passed string is palindrome or not?

function isPalindrome(text){
    let tempArray = Array.from(text);
    let reversedText = tempArray.reverse().join('');
    return text == reversedText;
}
console.log(isPalindrome('dad'))

/*
/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/
function wordCombination(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combination = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combination.push(temp);
    }
}
  return combination.join("\n")
}

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function alphaOrder(str){
    let word = ''
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letters_order = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,
    'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
    letters_index=str.split('').map((value,index)=>{
        return letters_order[value]
    })
    for (let i=0;i<letters_index.length;i++){
        for (let x=0;x<letters_index.length-1;x++){
            if (letters_index[x+1]<letters_index[x]){
                letter_index=letters_index[x]
                letters_index[x]=letters_index[x+1]
                letters_index[x+1]=letter_index
            }
        }
    }
    letters_index.forEach((letter)=>{word+=letters[letter-1]})
    return word
    
}

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/
function Capitalize(str){
    let words = str.split(' ')
    let output = ' '
    words.map((word)=>{
            let word2=''
            word.split('').map((v,i)=>{
                if(i==0){v=v.toUpperCase()}
                word2+=v
            })
            output+=' '+word2
    })
    return output
}

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/
function longestWord(str){
    let words = str.split(' ')
    let length=0;
    longestWord = []
    for (word in words){
        length = words[word].length>length?words[word].length:length
    }
    for(word in words){
        if (words[word].length==length){
            longestWord.push(words[word])
        }
    }
    return longestWord
}

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
function countVowels(str){
    const Vowels = ['a','e','o','u','w']
    words = str.split(' ')
    let Count=0
    words.map((word,index)=>{
        word.split('').map((letter,index)=>{
            if(Vowels.indexOf(letter)>-1){
                Count+=1
            }
        })
    })
    return Count
}

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
const isPrime = (n)=>{
    for(i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
const Type = (a)=>{
    if(true){
        return typeof(a)
    }
}

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
*/
const matrixIdentity = (n)=>{
    let matrix = []
    for(var x=0;x<n;x++){
        row=[]
        for(var y=0;y<n;y++){
            x===y?row.push('1'):row.push('0')
        }
        matrix.push(row)
    }
    return matrix
}

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/
const Second = (array)=>{
    first=array.sort((a, b) => a - b)[1]
    second=array.reverse()[1]
    return [first,second]
}

/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
const isPerfectNumber = (n)=>{
    var sum = 0
    if(n==1 || n==2 ){return false;}
    for (let i =0;i<n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    if(n==sum){return true}
    for (let i =0;i<=n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    if(sum/n==2){return true}
    return false
}

/*
13. Write a JavaScript function to compute the factors of a positive integer. 
*/
const factorsSum = (n)=>{
    sum = 0
    if(n<=0){return false}
    for(let i=1 ; i<n ;i++){
        if(n%i==0){sum+=i}
    }
    return sum
}
/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
function amountToCoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        new_amount = (amount - coins[0]);
        return [coins[0]].concat( amountToCoins(new_amount, coins) );
        } 
      else
        {
         coins.shift();
         return amountToCoins(amount, coins);
        }
    }
} 

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
*/
const power = ()=>{
        let b = prompt("Enter the base value?")
        if(b==null || isNaN(b)==true){
            b = prompt("Enter the base value?")
        }
        else{b = parseInt(b)}
        let n = prompt("enter the exponent value?  ")
        if(n==null || isNaN(n)==true){
            n = prompt("enter the exponent value?  ")
        }
        else {n=parseInt(n)}
        alert("The exponent of "+ b+" to power "+n+ " is equal to "+ Math.pow(b,n))
}

/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
const unique = (str)=>{
     var unique="";
     for (var x=0;x < str.length;x++)
     {
    
     if(unique.indexOf(str.charAt(x))==-1)
      {
      unique += str[x];  
      
       }
      }
      return unique;  
}  

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
*/
const occurrences =(str)=>{
    let obj = {}
    strToLetters=str.split('')
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let count = 0
    for (letter in letters){
        for(l in strToLetters){
        if(letters[letter] ==strToLetters[l]){count++}
        }
    obj[letters[letter]]=count
    count=0
    }
    return obj
}

/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/
const binarySearch=((array,value)=>{
    let finalResult 
    const myPromise = new Promise ((resolve,reject)=>{
            var result=""
            array = array.sort((a,b)=>{return a-b})
            let middle = Math.floor(array.length/2)
            if(array[middle]==value){result=true}
            if(array[middle]!=value && array.length==1){result= false}
            if(array.length>1){
                if(array[middle]>value){
                binarySearch(array.slice(0,middle),value)
                }
                else{
                    binarySearch(array.slice(middle,array.length),value)
                }
            }
                resolve(result)
        })
        myPromise.then(result=>{
            if(result==undefined){binarySearch(array,value)}
            else{
                if(result==true){
                 console.log("Found")
                }
                else{
                    console.log("Not Found")
                }
            }
        })
})

/*
19. Write a JavaScript function that returns array elements larger than a number. 
*/
const Larger=(array,n)=>{
let largerNumbers =  array.filter(x => x > n);
return largerNumbers
}

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
function generateId(string,length)
{
var text = "";
for(var i=0; i < length; i++ )
{  
text += string.charAt(Math.floor(Math.random() * string.length));
}
return text;
}

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
function combinations(array,n) {
    array2 =  new Array(1 << array.length).fill().map(
      (e1, i) => array.filter((e2, j) => i & 1 << j));
      return array2.filter(a => a.length == n)
}

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/
const Count =(str,letter)=>{
    alert(str.split(letter).length-1);
}

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
function firstNRC(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] < arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    return arr
   }

/*
25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
const  Longest_Country_Name=([...a])=>{
    let array = [...a]
    let comparsionString=""
    array.map((v)=>{
        if(v.length>comparsionString.length){comparsionString=v}
    })
    return comparsionString
}

/*
26. Write a JavaScript function to find longest substring in a given a string without repeating characters
*/
const longestSubstring =(str)=>{
    var max_length= 0, Longestsubstring=''
    var strChar=str.split('');
    var result = '', result2=[]
    for (let i=0;i<strChar.length;i++){
        if(strChar[i]!=strChar[i-1]){
           result+=strChar[i]
           result2.push(result)
        }
        else{result=''}
    }
    let compareString = ''
    result2.map((v,i)=>{
        if(v.length>compareString.length){compareString=v}
    })
    return compareString
}

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
*/
const longestPalindrome =(str)=>{
    var max_length = 0, maxPalindrome=[],result=[]
    for ( var i=0; i<str.length;i++){
        var substr = str.substr(i,str.length)
        for(let x=substr.length;x>0;x--){
            var substring_substring = substr.substr(0,x)
            if(substring_substring<=1)continue
            if(isPalindrome(substring_substring) && substring_substring.length>=max_length){
                max_length=substring_substring.length
                maxPalindrome.push(substring_substring)
            }
        }
    }
    maxPalindrome.map((v,i)=>{
        if (v.length==max_length){result.push(v)}
    })
    return result
}


/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/

function name(name){
    alert(name)
}

function callFunction(func,myname){
    func(myname)
}

/* 
29. Write a JavaScript function to get the function name. 
*/
var x = function x() {
    console.log( arguments.callee.name );
}