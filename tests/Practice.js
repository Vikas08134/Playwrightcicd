let a=10;
let b=20;

a=a+b; //10+20=30
b=a-b; //30-20=10
a=a-b; //30-10=20

console.log("a=" + a + " and b=" + b)
console.log("a=" + a + "and b=" + b)

//reverse of string

function reverseOfString(str){

    return str.split('').reverse().join('')
}
console.log(reverseOfString("Vikas"))

//palindrome

function removeDuplicate(arr){
  
  return[...new set(arr)];
}

console.log(removeDuplicate([1,2,2,3,4,5,5,6]))
