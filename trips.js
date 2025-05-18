let read = document.querySelectorAll(".read-more");
read.forEach(function (more) {
  more.addEventListener("click", function () {
    alert(`Unfortunately, the content of this post is not yet available. Sorry for the inconvenience.`);
  });
});