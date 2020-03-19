var open = document.querySelector(".button-title-search");
var form = document.querySelector(".form-without-title");

open.addEventListener("click", function(evt){	
evt.preventDefault();
form.classList.toggle("form-hide");
})