let email = document.querySelector("#exampleInputEmail1");
let signup = document.querySelector("button.signup");

signup.addEventListener("click", function() {
  if (email.value != '') { 
    alert('Thank you for signing up!');
  }
});