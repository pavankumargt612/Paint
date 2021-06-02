var mouse_event="empty";
var last_x_position,last_y_position;

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=5;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
mouse_event="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove );

function my_mousemove(e){
    current_x_position=e.clientX-canvas.offsetLeft;
    current_y_position=e.clientY-canvas.offsetTop;

    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y:");
        console.log("x="+ last_x_position+ "y="+ last_y_position);
        
        ctx.moveTo(last_x_position,last_y_position);
        
        console.log("current position of x and y:");
        console.log("x="+ current_x_position+ "y="+ current_y_position);

          ctx.lineTo(current_x_position,current_y_position);
          ctx.stroke();
    }
    last_x_position=current_x_position;
    last_y_position=current_y_position;
}
    canvas.addEventListener("mouseup",my_mouseup );

    
    function my_mouseup(e){
        mouse_event="mouseUp";
        }

        canvas.addEventListener("mouseleave",my_mouseleave );

    
        function my_mouseleave(e){
            mouse_event="mouseLeave";
            }
    