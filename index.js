const canvas =  document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c= canvas.getContext("2d");

//Drwaing sigle line

// c.beginPath();
// c.moveTo(200,300);
// c.lineTo(400,100);
// c.strokeStyle="red";
// c.lineWidth=4;
// c.stroke();

// c.closePath();

//Drawing multiple lines

//  function drawLine(p1,p2, color, thickness) {
//     c.beginPath();
//     c.strokeStyle = color;
//     c.lineWidth = thickness;
//     c.moveTo(p1.x,p1.y);
//     c.lineTo(p2.x,p2.y);
//     c.stroke();
//     c.closePath();
// }

// drawLine({x:100,y:50},{x:90,y:200},"red",3);
// drawLine({x:50,y:150},{x:300,y:40},"black",3);
// drawLine({x:500,y:500},{x:90,y:200},"blue",3);

//undersatnding Mouse events

//  function onMouseDown(event){
//   let{clientX, clientY}=event;

//     c.beginPath();
//     c.moveTo(clientX, clientY);
//     c.strokeStyle = "blue";
//     c.lineWidth = 4;
//     // c.stroke();



//  }

 
//  function onMouseUp(event){
//     let{clientX, clientY}=event;
//     c.lineTo(clientX, clientY);
//     c.stroke();
//     c.closePath();
//  }



  

//  canvas.addEventListener("mousedown",onMouseDown);
//  canvas.addEventListener("mouseup",onMouseUp);

//free hand

let drawingColor="blue";
let previousPosition = null;
function onMouseDown(e){
    let{clientX:x, clientY:y} = e;
    previousPosition=[x,y];
    c.strokeStyle=drawingColor;


    //now add mouse events here
    canvas.addEventListener("mousemove",OnmOuseMove);
    canvas.addEventListener("mouseup",onMouseUp);


}

function OnmOuseMove(e){
let currentposition  = [e.clientX, e.clientY];
c.beginPath();
c.moveTo(...previousPosition);
c.lineTo(...currentposition);
c.stroke();
c.closePath();
previousPosition = currentposition;

}

function onMouseUp(e){
 canvas.removeEventListener("mousemove",OnmOuseMove);


}
