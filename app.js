let colors = ['red','blue','green','orange','purple','black','yellow'];

let buttton = document.getElementById("button");

buttton.addEventListener('click',function(){
    let index = parseInt((Math.random()*colors.length)+1);

    // Canvas.style.background = '${colors[index]}';
    canvas.style.background = `${colors[index]}`
})