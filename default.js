const checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("theme-style").href = "dark.css";
    localStorage.setItem("theme", "true");
  } else {
    document.getElementById("theme-style").href = "";
    localStorage.setItem("theme", "false");
  }
});

window.onload = function () {
  if (localStorage.getItem("theme") == null) {
    checkbox.checked = false;
    document.getElementById("theme-style").href = "";
  } else if (localStorage.getItem("theme") == "true") {
    console.log("true");
    checkbox.checked = true;
    document.getElementById("theme-style").href = "dark.css";
  } else if (localStorage.getItem("theme") == "false") {
    checkbox.checked = false;
    document.getElementById("theme-style").href = "";
  }
};
