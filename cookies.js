let settings = document.getElementsByClassName("cookie-container")[0];

let value = ("; " + document.cookie).split(`; name=`).pop().split(";")[0];
console.log(value, "value");
//check if the user has already visited
if (value.length != 0) {
	settings.style.display = "none";
}

let input = document.getElementById("popup-input");
let close = document.getElementById("close");
close.addEventListener("click", function () {
	if (input.value == "") return (settings.style.display = "none");
	document.cookie = "name=" + input.value + ";max-age=86400;";
	value = input.value;

	console.log(document.cookie, input.value);
	settings.style.display = "none";
});