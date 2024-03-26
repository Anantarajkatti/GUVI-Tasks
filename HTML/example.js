var arr=[2,3,4,5,6,7,8]

var newarr=arr.map((num)=>
                        {
                            
                            if(num%2==0)
                            return num
                        
                        } )
console.log(newarr)
var sum= 0
arr.map((num)=>{return sum=sum+num})
console.log(sum)
var factarr=arr.map((num)=>
{ 
    fact=1
    while(num!=0)
    {
        fact=fact*num
        num--
    }
    return fact
}) 
console.log(factarr)
