const btn = document.getElementById("direction");
const shopForm = document.querySelector(".shopForm");

btn.addEventListener("click", function() {
  shopForm.style.flexDirection = "column";
  shopForm.style.display = "flex";
  shopForm.style.width = "250px";
});
