var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);
function setgradient()
{
	body.style.background = "linear-gradient(to right, " + color1.value+ ", "+ color2.value+ ")";
	css.textContent=body.style.background + ";";

}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);