const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
  
function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
}
  
toggleSwitch.addEventListener("change", switchTheme, false);
  
var input = document.getElementById("input");
var output = document.getElementById("output");

function calc(value) {
    if (value == "AC"){
        input.innerHTML = "";
        output.innerHTML = 0;
    }else if (value == "C"){
        input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
        output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML);
    }else if (value == "="){
        output.innerHTML = eval(input.innerHTML);
    }else {
        input.innerHTML += value;
    }
}