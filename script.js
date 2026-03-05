function toggleMenu(){

let menu=document.getElementById("dropdown")

menu.style.display = menu.style.display==="block" ? "none":"block"

}

function openWhatsApp(){

window.open(
"https://wa.me/919460574256?text=✨welcome%20to🙏%20Rajpurohit%20marble%20and%20granite%20💫",
"_blank")

}

function sendMessage(e){

e.preventDefault()

let text =

`Name: ${fname.value} ${lname.value}
Company: ${company.value}
State: ${state.value}
Country: ${country.value}
Message: ${msg.value}`

let url="https://wa.me/919460574256?text="+encodeURIComponent(text)

window.open(url,"_blank")

}

function loadProducts(type){

let box=document.getElementById("productBox")

box.innerHTML=""

for(let i=1;i<=20;i++){

let img=document.createElement("img")

img.src="https://source.unsplash.com/300x300/?"+type+"&sig="+i

img.onclick=function(){showDetails(type,i)}

box.appendChild(img)

}

}

function showDetails(type,i){

let html=`
<h3>${type} Product ${i}</h3>
<p>Price : ₹${1000+i*50}</p>
<p>Length : ${5+i} ft</p>
<p>Width : ${2+i} ft</p>
<p>Thickness : ${10+i} mm</p>
`

document.getElementById("details").innerHTML=html

document.getElementById("popup").style.display="block"

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
