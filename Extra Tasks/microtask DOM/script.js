function Change(para)
{
    para.style.color="red";
    para.style.fontSize="xx-large"
}

function leave(para)
{
    para.style.color="black";
    para.style.fontSize="initial";
}

function promt()
{
    let string = prompt("enter something");
    document.getElementById('demo').innerHTML=string;
}
function showCoord(event)
{
    let x= event.clientX;
    let y= event.clientY;
    let text='X coordinate::-'+ x +' Y coordinate:-'+ y;
  document.getElementById('coord').innerHTML= text;
}
function show(){
var string= document.getElementById('texts').value ;
console.log(string)
document.getElementById('demo1').innerHTML=string
} 
function countChar()
{
    var string= document.getElementById('Tarea').value;
    var maxlimit=(10-string.length)
    if(maxlimit>0)
   document.getElementById('stringlen').innerHTML=maxlimit
    else
    document.getElementById('stringlen').innerHTML='sorry!!!!! exceeds limit'
}


