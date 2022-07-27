let creatCArd = () => {

let Name =document.querySelector('.Name').value;
let imageUrl =document.querySelector('.imageUrl').value;
let cardobject = new Object();

cardobject.Name=Name;
cardobject.imageUrl=imageUrl;
cardobject.id = Math.floor(Math.random() * 1000);
cardobject.point = 0;
let conatinercard = document.querySelector('.card');
conatinercard.innerHTML =

`<div class="card" style="width: 18rem;">
 <img src="${cardobject.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">

  <h5 class="card-title">Card title</h5>
 <p>Name = ${cardobject.Name}</p>
 <p>point= ${cardobject.point}</p>
</div>`

}
