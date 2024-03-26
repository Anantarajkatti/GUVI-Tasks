let arr=[1,2,3,4,5,6,7,8,9,10]
let arr1=[4,5,6]
let arr3=[]
 /*for(let i=0;i<arr.length;i++)
 {
    arr3.push(arr[i])
 }
 for(let i=0;i<arr1.length;i++)
 {
    arr3.push(arr1[i])
 
 }*/
 //arr3= arr1.concat(arr1)


 // spread operator ---->  ...arrayname
 //arr3=[...arr,...arr1]
// console.log(arr3)

 // array destructuring
 //const[b,c,d]=arr1

 //const [a,,...d]=arr  // this is destructuring
 //console.log(a ,d)
 //console.log(b)

 // object destructuring

  /*  var obj={
        a : 1
        ,b:2,
        c: 3
    }
    const {c,a,...rest}= obj;// this will skip c, and a b is taken as rest
    console.log(rest)*/

    //or
    const { a: random,b,..c}= obj // destructures array
    console.log(random) /// will be printing 1

    // object short hand

    var a=10
    var b=20
    var c=30

    var obj={
        d:a,e:b,f:c
    }
    console.log(obj.f)