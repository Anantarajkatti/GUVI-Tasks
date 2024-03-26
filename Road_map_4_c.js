// in object comparison if order of keys changes it is not similar

/*var obj1= {
    'a':10,
    'b':5
}
var obj2={
    'a':10,
    'b':5
}

if(obj1.a===obj2.a)
{
    console.log('same')
}
else
console.log('no')*/


//Notes---class
// scope and hoisting---------------------------

/* scope -- of a variable is , where can that variable will be used and how long is used -- is the scope of that variable
            inside the curly brackets is known as block

var ---is the declaration which makes variable globally accessable  (if, for, while loop blocks) the variable declared in these bloks are accessible
let - creats variable and makes it available only inside  the block not outside
const--- this creates variable which value cannot be changed and not accessible outside the block
* var variable in function block is not accessible outside.. apply copy by reference and copy by value 

// hoisting---
    in JS we can assign value first then declration is allowed in var.... but let and const is not  possible 

    {
        const a=50
        function f()
        {
            console.log(a)/// here a can be accessible because it is inside upper brackets
        }
        f()
    }
    

//// functions----------------------------------
function call is important to execute the function
passing the parameter is done using comma
    in function return is command to come out of function
    any statement after the return is not executable 
    string can be passed in the return

    // types of function

    1) user defined and inbuilt function
       user defined is user who defines function for his operation
       inbuilt is already built functions such a join,split, slice,math.pow()
    2) named and anonymous function
        function name(parameter){......}
        const variablename= function ( parameter){.....}--- this is the un named function assigned to variable
                  calling it looks like---- variable -----name(parameter)-----

                  function canbe replace by =>
                  ex :- const fact= (n)=>{
                    n=n*n-1 
                  } 