const  pencil = document.getElementById("pencil");
let isPencilActive = false;
const colorPicker = document.getElementById("color-picker");


function onPencilClick(e){
  pencil.classList.toggle("active");
  isPencilActive = !isPencilActive;
  if(isPencilActive){
    drawingColor=colorPicker.value;
    canvas.style.cursor ="crosshair";
    canvas.addEventListener("mousedown",onMouseDown);
  }else{
    canvas.removeEventListener("mousedown",onMouseDown);
  }
}

pencil.addEventListener("click",onPencilClick);
