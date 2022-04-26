// Js code
const message = document.querySelector("[data-message]");
const img = document.getElementById("logo");
const resX = document.getElementById('x-res');
const resY = document.getElementById('y-res');


//temporary function to check coords
document.addEventListener("mousemove", (e) => {
    resX.innerHTML = e.clientX;
    resY.innerHTML = e.clientY;
})

// Five locations you can drop the dots.
// The coords object contains dropzone coordinates. Within each dropzone coordinate there is a list
// of acceptable x & y coordinates
// currently this is manually checked, however once functional I'll try to make this auto calculate the proper dropzone. 
//It'll also be more accurate that way.
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


//drop function