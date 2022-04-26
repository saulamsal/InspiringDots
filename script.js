const message = document.querySelector("[data-message]");
const img = document.getElementById("logo");
const dots = document.querySelectorAll("[data-dots]")


//REMEMBER TO REMOVE!!!
const resX = document.getElementById('x-res');
const resY = document.getElementById('y-res');
document.addEventListener("mousemove", (e) => {
    resX.innerHTML = e.clientX;
    resY.innerHTML = e.clientY;
})

// Five locations you can drop the dots.
// The coords object contains dropzone coordinates. Within each dropzone coordinate there is a list
// of acceptable x & y coordinates
// currently this is manually checked, however once functional I'll try to make this auto calculate the proper dropzone. 
// It'll also be more accurate that way.
// DropOne: Top circle --> Counter clockwise direction
const coords = {
    dropOne: {
        x: [349, 431],
        y: [929, 1012]
    },
    dropTwo: {
        x: [447, 526],
        y: [777, 861],
    },
    dropThree: {
        x: [542, 624],
        y: [840, 926],
    },
    dropFour: {
        x: [510, 589],
        y: [1026, 1110],
    },
    dropFive: {
        x: [365, 447],
        y: [1052, 1133],
    }
}


//dragstart event listener


function main() {
    dots.forEach(dot => {
        dot.addEventListener("dragstart", dragStart, { once: true });
        dot.addEventListener("ondrop", drop);
    });
}

//drag start function - source border gets dashed to indicate drag has started
//data of object getting moved stored in plain text.
function dragStart(e) {
    e.currentTarget.style.border = "dashed 4px #000";
    e.dataTransfer.setData("text/plain", e.target.id);
}

//we want to check the following:
//if the selected dot is dropped outside the dropzone, it'll go back to it's original position.
//we also want to check if there isn't another dot there already. If there is one, the dragged object will return to its original position.
function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    console.log(data);
    e.target.appendChild(document.getElementById(data))
    e.dataTransfer.clearData();
}


//reset function, dragged items get sent back to their original position.
function reset(e) {

}

main();