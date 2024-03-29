document.addEventListener("DOMContentLoaded", function() {
  const textBlock = document.querySelector(".custom-text-block");
  const overlay = textBlock.querySelector(".overlay");
  const closeBtn = overlay.querySelector(".close-btn");

  textBlock.addEventListener("click", function() {
    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  });
});
