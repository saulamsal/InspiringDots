const message = document.querySelector("[data-message]");
const img = document.getElementById("logo");
const dots = document.querySelectorAll("[data-dots]");
const canvas = document.querySelector("#canvas");

function main() {
  dots.forEach((dot) => {
    dot.addEventListener("dragstart", dragStart, { once: true });
    dot.addEventListener("ondrop", drop);
  });
}

//drag start function - source border gets dashed to indicate drag has started
//data of object getting moved stored in plain text.
function dragStart(e) {
  e.currentTarget.style.border = " 4px dashed";
  e.dataTransfer.setData("text/plain", e.target.id);
}

//we want to check the following:
//if the selected dot is dropped outside the dropzone, it'll go back to it's original position.
//we also want to check if there isn't another dot there already. If there is one, the dragged object will return to its original position.
function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  console.log(data);
  e.target.appendChild(document.getElementById(data));
  e.dataTransfer.clearData();
}

//reset function, dragged items get sent back to their original position.
function reset(e) {}

main();
