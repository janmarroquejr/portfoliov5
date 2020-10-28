const checkbox = document.querySelector("input[type=checkbox]");
const link = document.getElementById("theme-style");
let theme = localStorage.getItem("theme");

if (theme === null) {
  localStorage.setItem("theme", false);
  checkbox.checked = false;
} else if (theme === true) {
  checkbox.checked = theme;
  console.log("CHECKED");
}

checkbox.addEventListener("change", (e) => {
  if (e.target.checked || theme == true) {
    link.href = "dark.css";
    localStorage.setItem("theme", true);
  } else {
    link.href = "";
    localStorage.setItem("theme", false);
  }
});
