console.log(a);// undefined (Variables are not hoisted in js).......

var a = 10;

console.log(a);

console.log(mul(10, 2)); // function declarations are hoisted in javascript....

function mul(a, b){
    return a*b;
}

mul(2, 5);

//greet(); //-- function expressions are not hoisted in js, same as variables

var greet = function(){
    console.log("Hello")
};
greet();

console.group("Group Text Starts Here")
console.log("Apple is a fruit");
console.warn("Don't Touch");
console.error("Warning !! screen will blast");
console.groupEnd("Group ended !");

