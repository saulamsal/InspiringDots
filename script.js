const message = document.querySelector("[data-message]");
const dotParent = document.getElementById("dotParent");
const dots = document.querySelectorAll("[data-dots]");
const dropzones = document.querySelectorAll("[data-dropzone]");
const button = document.getElementById("btn");


function main() {
    //we send the data of the div we're moving.
    dots.forEach(dot => {
        dot.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", e.target.id)
        })

    });

    //we loop through each dropzone
    dropzones.forEach(dropzone => {

        //prevent default behaviour.
        dropzone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        //here we remove the opacity once we stop dragging.
        dropzone.addEventListener("dragleave", e => {
            dropzone.classList.remove("canvas__dropzone-dragover")
        });

        console.log(dropzone.childNodes.length)
        // drop logic
        dropzone.addEventListener("drop", e => {
            e.preventDefault();
            //we check to see if the dropzone does not have an element. If not it'll allow a drop
            if (dropzone.childElementCount === 0) {
                const dropElId = e.dataTransfer.getData("text/plain");
                const dropEl = document.getElementById(dropElId);

                //We check to see if the className of the dropzone matches the dot element Id. If it does it can be placed down.
                if (dropzone.classList[1] === dropElId) {
                    dropzone.appendChild(dropEl);
                    dropzone.classList.remove("canvas__dropzone-dragover");

                }
            }

            //we check if the dotParent has no elements. If so that means we won!
            if (dotParent.childElementCount === 0) {
                message.innerText = "🎈You won!🎈";
            }
        });
    });

    //reset button, we check to place back up to 5 dots to the parent
    //Hiding the victory message
    button.addEventListener("click", e => {
        for (i = 0; i <= 5; i++) {
            dots.forEach(dot => {
                dotParent.appendChild(dot);
            })
        }
        message.innerText = "";
    });
}

main();