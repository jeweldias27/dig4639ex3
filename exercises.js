function aFunction() {
    console.log("A functionw was run")
    return 1
}

let functionReference = aFunction
{
    function callFunctionTimes(functionParameter) {
        for (let i = 0; i < times; i++) {
            return functionParameter()
        }
    }
}
// console.log(aFunction())
// console.log(functionReference())
console.log(callFunctionTimes(functionReference, 3))
