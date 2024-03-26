fetch("https://restcountries.com/v3.1/all")
.then ((res)=>res.json())
 .then ((data)=>{
    console.log(data)
     let mainDiv= document.getElementById('cards')
    for(var i=0;i<=data.length;i++)
    {  
       console.log(data[i].flags.png )
       // console.log(data[i].name.c) 
       cardDiv =document.createElement('div')
       cardDiv.setAttribute("class", "col-sm-3");
       cardDiv.innerHTML=`<div class="card">
                        <div class="card-body style=  "height:250px" >
           <h4 class="card-header" style="text-align: center;">${data[i].name.common}</h4>
           <img class="card-img-top img-fluid" src="${data[i].flags.png}" alt="Card image cap" style=  "height:120px ;"   >
           <div class="card-block">
           <div style="text-align: center;">
           <p class="card-text">capital:</p>
           <p class="card-text">Region:</p>
           <p class="card-text">Country code :</p>
           <a href="index2.html" class="btn btn-primary">Weather Report </a>
           </div>
           </div>
       </div>`
       mainDiv.append(cardDiv)
    }
    
 })

