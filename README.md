
# InspiringDots

The InspiringApps logo has lost its dots. I aim to build a web-based tool to help
us restore them.

# Project Plan

Get the coordinates of the empty spaces in the maze (after styling). Once the dots are being dropped it'll check to see if the dot is being dropped on a coordinate of the empty circles. If it is being dropped in a spot where there is an empty circle it'll fill the empty spot. If it's being dropped at a coordinate that isn't specified, it'll go back to it's original starting position.

- Update 1: Issue with using solely the drag & drop API is that I wouldn't be able to properly specify a "drop zone". Thus I'll be creating a custom drop effect.

- Update 2: The issue isn't with the drag & drop API. I've found the solution to the dropzone issue. I'm going to create 5 divs, place them where the 5 holes are in the logo. This way I can easily create the drag&drop functions without too much clutter.

- Update 3: Finished the dropzones. Cleaned up useless code in the script file. There is one slight issue, since I'm positioning everything relative to the canvas the dropzone dots move when displaying the winning message. To fix this all I need to do when removing "display: none;" with the winning message is: subtract 20px with each dropzone from the top.

- Update 4: fixed the issue of having to change the 20px from the dropzones. I changed up the HTML & CSS so it's not necessary anymore. I've also made it so the dots are divs instead of images. It's easier to drag & drop like that + no unnecessary loading of images if they're simple dots.




## HTML5 & CSS3

- Creating a canvas div that will contain all of the elements.
- Simple reset of margins & padding
- Utilize Drag & Drop API that HTML5 provides for simplicity sake.

## Javascript code:

- Create a drag, drop & hover over function
- Add event listener to dots for dragging & dropping
- Add event listener to dropzones for dropping the dots
- Make sure to substract 20px from dropzones at top element