const btn = document.querySelector("button");
let bdy = document.querySelector("body");


console.log("Hi");

btn.addEventListener('click', changeBack);

function changeBack(){
   
      let R = Math.floor(Math.random()*255);
      let G = Math.floor(Math.random()*255);
      let B = Math.floor(Math.random()*255);
      bdy.style.backgroundColor = `rgb(${R},${G},${B})`;
      
}

