const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//THE ARC METHOD
//CODE FOR STEP 4 GOES HERE
ctx.beginPath();
ctx.arc(100, 100, 20, 0, Math.PI); // semi-circle (based on instructions)
ctx.stroke();



//THE RECT METHOD
//CODE FOR STEP 8 GOES HERE
ctx.beginPath();
ctx.rect(80, 30, 150, 100);
ctx.stroke();



//THE FONT METHOD
//CODE FOR STEP 12 GOES HERE
ctx.font = "30px Arial";
ctx.strokeText("My Canvas Project!", 40, 30);
