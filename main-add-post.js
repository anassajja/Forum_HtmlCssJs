const container = document.querySelector(".container"),
privacy = container.querySelector(".post .privacy"),
arrowBack = container.querySelector(".audience .arrow-back");

privacy.addEventListener("click", () => {
  container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
  container.classList.remove("active");
});

// get the modal element
var modal = document.getElementById("create-post-modal");

// get the button that opens the modal
var btn = document.getElementById("create-post-button");


// when the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

