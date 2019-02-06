$(document).ready(function() {
  $(".menu-btn").on("click", function() {
    $(".nav ul").toggleClass("open");
  });

  function animate() {
    $(".headtext")
      .hide()
      .fadeIn(5000);
  }

  window.onload = animate;
});
