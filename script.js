const navbar = document.querySelector(".navbar");
const footer = document.querySelector(".footer");
const changeThemeInput = document.querySelector(".change-theme-input");
const changeThemeButton = document.querySelector(".change-theme-btn");

changeThemeButton.addEventListener("click", () => changeColor());
changeThemeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") changeColor();
});

const stringToColor = (str) => {
  str = str.toLowerCase().trim().split(" ")[0]; // Get first word
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash); // a << b = a * (2 ** b)
  }
  var color = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2); // Convert to hex
  }
  return color;
};

const changeColor = () => {
  if (changeThemeInput.value === "") {
    // If input is empty
    alert("Theme name cannot be empty");
    return;
  }

  const color = stringToColor(changeThemeInput.value);
  navbar.style.backgroundColor = color;
  footer.style.backgroundColor = color;
  changeThemeButton.style.backgroundColor = color;
  changeThemeInput.value = ""; // Clear input
};
