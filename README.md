[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24054750&assignment_repo_type=AssignmentRepo)
#  04.8 - Intro to Canvas API - Learning Exercise (Part II)

##  The Arc Method

1. On line 10 of your HTML, type an opening and closing canvas tags: `<canvas></canvas>`

2. Give your canvas the id of "myCanvas"

3. Create a style for myCanvas.  Give it the following properties and values:
* width - 400px
* height - 400px
* border - your choice 

4. In your JavaScript:
* Un-comment lines 3 - 5.
* On line 6 type:
ctx.arc(50, 50, 50, 0, 2*Math.PI);
* On line 7 type: ctx.stroke();

You should have a circle!

5. Now on line 6, change the first two numbers in the parenthesis from 50 to 100.  

What happened!? The circle moved!  The first number represents the x axis, and the second equals the y axis!

6. Now change the third number on line 6 from 50 to 20 - the circle is smaller!  You've just shortened the radius.

7. Lastly, delete the "2*" on line 6 so that it just reads "Math.PI".  What happened?  we now have a semi-circle!  


##  The Rect Method

8. On line 13 of your JavaScript, type ctx.rect(80, 30, 150, 100);

9. On line 14 type: ctx.stroke();
We have a rectangle!

10. Customize the first two numbers on line 13 to adjust the position of the rectangle.

11. Now adjust the third and fourth numbers on line 13 to customize the height and width.

##  The Font Method 

12. On line 19 of your JavaScript, type ctx.font = "30px Arial";

13. On line 20, type ctx.strokeText("Hello World!", 40, 30);

14.  Now adjust the two numbers on line 20 to reposition your text.

15.  Lastly, change the message on the display to something of your choice.

16.  Congrats!  You're done - submit your work in Google Classroom!