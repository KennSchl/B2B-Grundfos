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
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}