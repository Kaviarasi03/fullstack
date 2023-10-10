const div = document.querySelector("div");
const input = document.createElement("input");
input.value = "angular course";
input.type = "text";
input.placeholder = "enter some content";
input.id = "course_field";
const h1 = document.createElement("h1");
h1.innerText  = "dynamic content in html";
const button = document.createElement("button");
button.textContent = "click me";
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener("click",function() {
    window.alert("hey , this is a button");
});