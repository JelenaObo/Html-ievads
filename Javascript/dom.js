console.log(window);

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(innerHeight);

console.log(window.location);
console.log(window.document);

// window.location = "https://google.com"
// window.open("https://google.com")

localStorage.setItem("key1", 1000);
sessionStorage.setItem("key2", 1000);

console.log(window.location);
console.log(window.document);
console.log(window.document.title); //JavaScript Basics
console.log(window.document.body);
console.log(window.document.body.children);
console.log(window.document.body.children[1]);


window.document.body.children[1].textContent = "Sis ir jauns teksts";

// console.log(window.document.body.children[2].children[0]);
// window.document.body.children[2].children[0].innerHTML = "<strong> text </strong>";
// window.document.body.children[2].children[0].style.color = "red";
// window.document.body.children[2].children[0].style.backgroundColor = "blue";


console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);



console.log(document.getElementsByTagName("li"))
// window.document.getElementsByTagName("li").style.backgroundColor = "pink";
// console.log(window.document.getElementsByTagName("ul").lastElementChild);

console.log(document.querySelector('ul li')) //ieksa ir elementa  klase. dabu 1.elements
console.log(document.querySelectorAll('ul li')) //visi elementi

var p = document.createElement("p");
p.textContent = "New Paragraph from JS"
p.style.fontSize = "20px";

// var li = document.querySelector("li");
var li = document.querySelectorAll("li")[3];
li.appendChild(p)

var li = document.querySelectorAll("li")[1]
li.remove();

document.querySelectorAll("li")[1].style.backgroundColor = "blue";


//EVENTS
window.onload = function(){
    console.log("window loaded");
    alert("Jusu lapa ir gatava");
}

var btn = document.querySelector("button");
btn.onclick = function() {
    console.log("clicked");
}

btn.onclick = function(){
    console.log("Other click");
}

var p = document.querySelector("p")
p.onclick = function(){
    console.log("Paragraph clicked")
}

console.log(btn)

//listeners

var p = document.querySelector("p")

function listener1(){
    console.log("Listener1")
}

function listener2(){
    console.log("Listener2")
}

p.addEventListener("click", listener1);
p.addEventListener("click", listener2);

function mouseDownLi(){
    console.log("Mouse Down")
}

function mouseUpLi(){
    console.log("Mouse Up")
}


p.addEventListener("mousedown", mouseDownLi);
p.addEventListener("mouseup", mouseUpLi);

setTimeout(function(){
    p.removeEventListener("click", listener1)
}, 2000)
