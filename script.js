function toggleMenu(){

let menu=document.getElementById("dropdown");

menu.style.display=menu.style.display==="block"?"none":"block";

}

function showCategory(type){

let gallery=document.getElementById("gallery");

gallery.innerHTML="";

for(let i=1;i<=20;i++){

let img=document.createElement("img");

img.src=IMG_20260228_164456.jpg
img.onclick=openPopup;

gallery.appendChild(img);

}

}

function openPopup(){

document.getElementById("popup").style.display="block";

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

let text=`Name:${fname} ${lname}
Company:${company}
State:${state}
Country:${country}
Message:${msg}`;

let url="https://wa.me/919460574256?text="+encodeURIComponent(text);

window.open(url);

}
