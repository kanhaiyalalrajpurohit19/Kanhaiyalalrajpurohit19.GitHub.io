function toggleMenu(){

let menu=document.getElementById("menuBox");

menu.style.display=menu.style.display==="block"?"none":"block";

}

function showCategory(type){

let gallery=document.getElementById("gallery");

gallery.innerHTML="";

for(let i=1;i<=20;i++){

let img=document.createElement("img");

img.src="images/"+type+i+".jpg";

img.onclick=function(){

showPopup();

}

gallery.appendChild(img);

}

}

function showPopup(){

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

function sendMessage(e){

e.preventDefault();

let fname=document.getElementById("fname").value;

let lname=document.getElementById("lname").value;

let company=document.getElementById("company").value;

let state=document.getElementById("state").value;

let country=document.getElementById("country").value;

let msg=document.getElementById("msg").value;

let text=
"Name: "+fname+" "+lname+
"%0ACompany: "+company+
"%0AState: "+state+
"%0ACountry: "+country+
"%0AMessage: "+msg;

window.open("https://wa.me/919460574256?text="+text);

}
