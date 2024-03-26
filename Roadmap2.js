var obj={
    name: 'Rahul',
    age: 10,
    address: ["delhi","banglore","kolkatta"] // array inside object


}
//console.log(obj.address[2])

//for(var key in obj)
//{
 //   console.log(object.keys(obj))
//}

//-----functions

//function add (a,b)
//{
//    return a+b
//}
 //var sum= add(5,4)
 //console.log(sum)

/* function Fact(n)
 {
    let fact=1;
    for( let i=n;i>=1;i--)
    {
        fact*=i;
    }
    return fact
 }

 let n=5
 console.log(Fact(n))*/

 // Pass by Value and Pass by reference-------------------------------------------------------
//var variable=10
 //function addfunct(a)
 //{
 //   a=a +10
 //}
 //console.log(variable) // here variable doesn't change because the vari8able has passd its copy(i.e the pass by value)

 //pass by reference-----------------------------------------------------------------------------

 /*function arrayChange(arr)
 {
    arr[0]=10
    arr[1]=20
 }
 var arr=[1,2]
 console.log(arr)
 arrayChange(arr)    // pass by refernce happening thats why array is getting changed
 console.log(arr)*/
  
///--- functions and object

/*function solve(obj)
{
     obj.name="ankit"
}
var obj={
    name: " sneha"
}
console.log(obj)
solve(obj)
console.log(obj)*/

// window is the platform that is provided by browser... we donot code for that
// understand what is differnce between window and document object