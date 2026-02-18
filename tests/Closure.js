//variable which is outside the function can be accessed inside the function.

let data = 10;
function test()
{
console.log(data)
}
test()  //output 10.

//variable which is inside the function cannot be accessede out side the function.

function test2(){

    let b=100;
}

console.log(b)
test2()  //output b is undefined

