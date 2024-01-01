//JSON-- javascript object notation
// array of objects, objects of objects
/*var arr=[
    {
        'name' : "steve",
        'age' : 20
    },
    {
        'name' : "tony",
        'age' : 30

    },
    {
        'name' : "thor",
        'age' : 40
    }
]
let sum=0
//for(let i=0;i<arr.length;i++) // or// for(var obj of arr)
{                                   //{
//                                      sum+=obj.age
                           //         }
    sum=sum+arr[i].age //
}//
console.log(sum)//  */

/*var obj={"employees":[
    {"name":"shyam",'email' : "shyamaraju@gmail.com"},
    {"name":"bob",'email' : "bobraju@gmail.com"},
    {"name":"raja",'email' : "raju@gmail.com"},
]}
 var inputmail="shyamaraju@gail.com"
 for(let i=0;i<obj.employees.length;i++)
 {
    if(inputmail===obj.employees[i].email)
    {
        console.log("employee exist ")
    }
    else
    console.log("doesnot exis")
 }*/

 // function inside object // usually Json is not used for storing the data. using function is in JSON is abnormal.

 var car= {
    'name':'Rahulkumar',
    'age':  20,
    'hasPet': false,
    'funct': function (num1,num2){
        return num1+num2
    }
 } 
 console.log(car.funct(10,20))
 console.log(car['name'])
