let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let sun = document.getElementById("sun");
let sunlight = document.getElementById("sunlight");
let logo1 = document.getElementById("logo1");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);
  if (value > 900) return;
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 0.5 + "px";
  sun.style.top = value * -1.5 + "px";
  sunlight.style.top = value * -1.5 + "px";
  logo1.style.top = value * 1.5 + "px";
});
