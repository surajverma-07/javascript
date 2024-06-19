// let score = "33ccccc "//Nan
let score = null//0
// const {score} = req.body
console.log(typeof score);
console.log(typeof (score));

let valueInNuber = Number(score)
console.log(typeof valueInNuber);
console.log(valueInNuber);//NaN/0/

// "33" -> 33
// "23adf" -> NaN
// null -> 0
// true -> 1
// false -> 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true , 0 -> false
// "" -> false
// "suraj" -> ture

let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)