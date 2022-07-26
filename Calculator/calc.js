const clear = document.getElementById("clear");
const del = document.getElementById("del");

const equals = document.getElementById("equals");
const input = document.getElementById("input");

const operations = [
  document.getElementById("plus"),
  document.getElementById("minus"),
  document.getElementById("multiply"),
  document.getElementById("divide"),
  document.getElementById("mod"),
];

const operand = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "%",
  ".",
];

const numbers = [
  document.getElementById("0"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
];
numbers.forEach((btn) =>
  btn.addEventListener("click", () => (input.innerText += btn.id))
);
operations.forEach((i) =>
  i.addEventListener("click", () => {
    if (i.id == "plus") input.innerText += "+";
    if (i.id == "minus") input.innerText += "-";
    if (i.id == "multiply") input.innerText += "*";
    if (i.id == "divide") input.innerText += "/";
    if (i.id == "mod") input.innerText += "%";
  })
);

function remove(e) {
  if(input.innerText=="Error" || input.innerText=="Infinity" || input.innerText==="undefined" || input.innerText==="function Error() { [native code] }")
     removeall();
  else
    input.innerText = input.innerText.slice(0, -1);
}
function removeall(e) {
  input.innerText = "";
}
function calculate(e) {
  try{
  input.innerText = eval(input.innerText);
}
catch{
  input.innerText="Error ";
}
}

clear.addEventListener("click", removeall);
del.addEventListener("click", remove);
equals.addEventListener("click",calculate);

document.addEventListener('keydown',(e)=>{
  if(operand.includes(e.key))
     input.innerText+=e.key;
  else if(e.key==="Enter")
     calculate();
  else if(e.key==='Backspace')
     remove();
  else if(e.key==='Escape')
     removeall();
})