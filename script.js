function toggleMenu(){

let menu = document.getElementById("dropdown");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}

function sendMessage(e){

e.preventDefault();

let fname=document.getElementById("fname").value;

let lname=document.getElementById("lname").value;

let company=document.getElementById("company").value;

let state=document.getElementById("state").value;

let country=document.getElementById("country").value;

let msg=document.getElementById("msg").value;

let text = `Name: ${fname} ${lname}
Company: ${company}
State: ${state}
Country: ${country}
Message: ${msg}`;

let url="https://wa.me/919460574256?text="+encodeURIComponent(text);

window.open(url);

}

function openCategory(name){

alert("20 "+name+" products will appear here.");

}
