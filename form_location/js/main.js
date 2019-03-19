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

document.querySelector('#createUserBtn').addEventListener("click", function () {
    createUser();
});

function createUser() {
    // declaring input field variables
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');

    let newUser = {
        name: nameInput.value,
        email: emailInput.value
    };

    users.push(newUser);
    console.log(users);

    // reset input fields
    nameInput.value = "";
    emailInput.value = "";
}

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