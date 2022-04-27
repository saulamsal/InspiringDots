const message = document.querySelector("[data-message]");
const img = document.getElementById("logo");
const dots = document.querySelectorAll("[data-dots]");
const dropzones = document.querySelectorAll("[data-dropzone]");
const canvas = document.querySelector("#canvas");

dots.forEach((dot) => {
  dot.addEventListener("dragstart", dragStart);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("canvas__dropzone-dragover");
  });

  dropzone.addEventListener("dragleave", (e) => {
    dropzone.classList.remove("canvas__dropzone-dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();

    const dropElId = e.dataTransfer.getData("text/plain");
    const dropEl = document.getElementById(dropElId);
    dropzone.appendChild(dropEl);
    dropzone.classList.remove("canvas__dropzone-dragover");
  });
});

//drag start function - source border gets dashed to indicate drag has started
//data of object getting moved stored in plain text.
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.currentTarget.style.opacity = "0.2";
}

//we want to check the following:
//if the selected dot is dropped outside the dropzone, it'll go back to it's original position.
//we also want to check if there isn't another dot there already. If there is one, the dragged object will return to its original position.
function drop(e) {
  const data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

//reset function, dragged items get sent back to their original position.
function reset(e) {}
