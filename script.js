//#region Function
function curry(func) {
     return function(first) {
        return function(second) {
            return func(first, second);
        };
    };
}

function sum(x, y) {
    return x + y;
}
//#endregion

let name = curry(sum);

console.log( name(5)(2) );