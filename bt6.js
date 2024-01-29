let line = document.getElementById("line");
let box = document.getElementById("line-1");
let mix = document.getElementById("line-2");
let six = document.getElementById("line-3");
let bix = document.getElementById("line-4");
let hix = document.getElementById("line-5");
let cool = document.getElementById("line-6");
let cylinder = document.getElementById("cylinder");

line.onclick = function (){
    const cycle = document.getElementById('cycle');
    cycle.textContent = "1.25 l";
    cylinder.style.height = "30px";
    cylinder.style.border = "1px";
    cylinder.style.backgroundColor = "aqua";
    line.style.visibility = "hidden";
}
box.onclick = function (){
    const cycle = document.getElementById('cycle');
    cycle.textContent = "1.5 l";
    cylinder.style.border = "1px";
    cylinder.style.height = "60px";
    cylinder.style.backgroundColor = "aqua";
    box.style.visibility = "hidden";
}
mix.onclick = function (){
    const cycle = document.getElementById('cycle');
    cycle.textContent = "1.75 l";
    cylinder.style.border = "1px"
    cylinder.style.height = "90px";
    cylinder.style.backgroundColor = "aqua";
    mix.style.visibility = "hidden";
}
six.onclick = function (){
    const cycle = document.getElementById('cycle');
    cycle.textContent = "2.0 l";
    cylinder.style.border = "1px"
    cylinder.style.height = "120px";
    cylinder.style.backgroundColor = "aqua";
    six.style.visibility = "hidden";
}

