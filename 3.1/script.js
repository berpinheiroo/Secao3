const btnDirection = document.getElementById("btnDirection");
const shopForm = document.querySelector(".shopForm");
const btnGrid = document.getElementById("btnGrid");


btnDirection.addEventListener("click", function() {
  shopForm.style.flexDirection = "column";
  shopForm.style.display = "flex";
  shopForm.style.width = "250px";
});

btnGrid.addEventListener("click", function() {
  shopForm.style.display = "grid";
  shopForm.style.gridTemplateColumns = "250px 25px 250px";
  shopForm.style.gridTemplateRows = "1fr 250px 1fr";
  shopForm.style.gridTemplateAreas = "'i1 . i2' 'i4 i5 i2' 'i3 i3 i3' 'i6 i6 i6'";
  shopForm.children[0].style.gridArea = "i1";
  shopForm.children[1].style.gridArea = "i2";
  shopForm.children[2].style.gridArea = "i3";
  shopForm.children[3].style.gridArea = "i4";
  shopForm.children[4].style.gridArea = "i5";
  shopForm.children[5].style.gridArea = "i6";
  shopForm.children[2].style.display = "flex";
});
