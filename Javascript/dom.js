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

console.log(window.document.body.children[2].children[0]);
window.document.body.children[2].children[0].innerHTML = "<strong> text </strong>";
window.document.body.children[2].children[0].style.color = "red";
window.document.body.children[2].children[0].style.backgroundColor = "blue";


console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);



console.log(document.getElementsByTagName("li"))
window.document.getElementsByTagName("li").style.backgroundColor = "pink";