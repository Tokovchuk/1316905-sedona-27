var open = document.querySelector(".button-title-search");
var form = document.querySelector(".form-s");
var ff = document.querySelector(".form-without-title")
var checkin = form.querySelector("[name=check-in-date]")
var checkout = form.querySelector("[name=check-out-date]")
var adults = form.querySelector("[name=number-of-adults]")
var children = form.querySelector("[name=number-of-children]")

open.addEventListener("click", function(evt){	
	evt.preventDefault();
	ff.classList.remove("error-form");
	open.classList.remove("error-form");
	ff.classList.toggle("close-form");
});

form.addEventListener("submit", function(evt){	
	if (!checkin.value || !checkout.value || !adults.value || !children.value) {
		evt.preventDefault();
		ff.classList.remove("error-form");
     	ff.offsetWidth = ff.offsetWidth;
     	open.classList.remove("error-form");
     	open.offsetWidth = ff.offsetWidth;
      	ff.classList.add("error-form");
      	open.classList.add("error-form");
	}
});

