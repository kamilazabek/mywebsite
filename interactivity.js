let input = document.querySelector(".input");

const button = document.querySelector(".greet");
button.addEventListener("click", function () {
  if (input.value != '') {
    alert(`Hello ${input.value}! I'm glad you're visiting my page :D`);
  }
});


