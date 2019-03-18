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

// PASSWORD

// ----- Setup: add dummy password text field and add toggle button
$('input[type=password]').each(function(){
  var el = $(this), elPH = el.attr("placeholder");
  
  el.addClass("offPage").before('<input type="text" class="passText" placeholder="' + elPH + '" />');
});

$('form').append('<small><a href="#" class="togglePassText">Toggle Password Visibility</a></small>');


// ----- keep text in sync
$('input[type=password]').keyup(function(){
  var elText = $(this).val();
  $('.passText').val(elText);
});
$('.passText').keyup(function(){
  var elText = $(this).val();
  $('input[type=password]').val(elText);
});

// ----- Toggle button functions
$('a.togglePassText').click(function(e){

  $('input[type=password], .passText').toggleClass("offPage");

  // -- prevent any default actions
  e.preventDefault();

});
