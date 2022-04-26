
# InspiringDots

The InspiringApps logo has lost its dots. I aim to build a web-based tool to help
us restore them.

# Project Plan

Get the coordinates of the empty spaces in the maze (after styling). Once the dots are being dropped it'll check to see if the dot is being dropped on a coordinate of the empty circles. If it is being dropped in a spot where there is an empty circle it'll fill the empty spot. If it's being dropped at a coordinate that isn't specified, it'll go back to it's original starting position.

Update 1: Issue with using solely the drag & drop API is that I wouldn't be able to properly specify a "drop zone". Thus I'll be creating a custom drop effect.

Update 2: The issue isn't with the drag & drop API. I've found the solution to the dropzone issue. I'm going to create 5 divs, place them where the 5 holes are in the logo. This way I can easily create the drag&drop functions without too much clutter.




## HTML5 & CSS3

- Creating a canvas div that will contain all of the elements.
- Simple reset of margins & padding
- Utilize Drag & Drop API that HTML5 provides for simplicity sake.