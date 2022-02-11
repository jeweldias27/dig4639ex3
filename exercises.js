function aFunction() {
    console.log("A functionw was run")
    return 1
}

let functionReference = aFunction
{
    function callFunctionTimes(functionParameter, times) {
        for (let i = 0; i < times; i++) {
         functionParameter()
        }
    }
}

let arrayValues = [1, 2, 3, 4] 
for (let item of arrayValues) {
    console.log(item)
}

// console.log(aFunction())
// console.log(functionReference())
 
let aFunc = function () {
    return Math.random()
}

aFunc()
aFunc = undefined

let arrowFunction = () => Math.random()
// console.log(arrowFunction())
let arrowFunction2 = () => { a : 5}
// console.log(arrowFunction2())
 let arrowFunction3 = () => {
    let ranNumer = Math.random();
    return { a: ranNumer}
 }
//  console.log(arrowFunction3())

let arrayNumbers = [1,2,3,4]
for (let item of arrayNumbers) {
        console.log(item)
}

arrayValues.forEach((item) => console.log(time))


//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

export function flattening (list) 
// → [1, 2, 3, 4, 5, 6]

