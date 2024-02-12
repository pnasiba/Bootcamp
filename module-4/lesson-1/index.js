let title = document.querySelector(".input");
let submit = document.querySelector("#submit");

submit.addEventListener("click", add);

let arr = [];

function add() {
  arr.push({ title: title.value });
  console.log(title.value);
  console.log(arr);
}
