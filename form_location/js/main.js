"use strict";
let users = [];

console.log(document);
console.log(window);
console.log(navigator);

fetch('http://ip-api.com/json').then(response => {
    return response.json();
}).then(location => {
    console.log(location);
    document.querySelector("#country").value = location.country;
});

//PASSWORD

function myFunction() {
  let x = document.getElementById("password");
    let eye = document.getElementById("eye");

  if (x.type === "password"){
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    x.type = "text";
  } else {
    x.type = "password";
    eye.classList.add("fa-eye-slash");
          eye.classList.remove("fa-eye");
  }
}

