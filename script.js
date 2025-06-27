// in cmd: magick mogrify -resize 20% -quality 100 -path ./redi *.JPG  
// in node: images='';fs.readdirSync('images/redi').map(d=>images += fs.readFileSync('images/redi/'+d,'base64')+'\n'); fs.writeFileSync('images.txt',images,{flag:'w'})

let numImages = 20;
let mouse = {x:10, y:10}
document.addEventListener('mousemove',  (event) =>{
  mouse.x = event.clientX;  
  mouse.y = event.clientY;
  ymodaba(numImages)
});
document.addEventListener("scroll", (event) =>{
  ymodaba(numImages)
});
window.onload = (event) => {
  console.log(event);
  ymodaba(numImages)
};

function ymodaba(numImages) {
  const galery = document.getElementById('galery');
  galery.innerHTML = ''; 
  [...Array(numImages).keys()].forEach(i => {
    const div = document.createElement('div')
    div.id = 'imageContainer' + i
    div.classList.add('imageContainer')
   
    let canvas = document.createElement('canvas');
    canvas.id = 'canvas' + i
    let ctx = canvas.getContext("2d");
    if (ctx) {
      let w = 300
      canvas.width = w;
      canvas.height = w;

      let rgbStep = Math.floor(255 /numImages )
      let { r, g, b } = {
        r: Math.max(150 - i * rgbStep, 0),
        g: Math.max(0 +  Math.floor(i * rgbStep * 0.75), 0),
        b: Math.max(255 - i * rgbStep, 0)
      }
      let text1 = canvas.id.replace('canvas', 'arfombra')
      let text2 = ('rgb(' + r + ',' + g + ',' + b + ')')
      
      ctx.font = 'bold 32px monospace';
      ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.strokeText(text1, 30, 100);

      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.fillText(text1, -50 + w / 2, w / 2)
      ctx.font = 'bold 19px monospace';
      ctx.fillText(text2, 30, 250);


      ctx.beginPath();
      [...Array(i + 1).keys()].forEach(j => {
        let x = w / 3 + i + (mouse.x/40) * Math.random() * Math.sin(i) * Math.cos(j + 1) * w / 50
        let y = w / 2 + j + 1 + (mouse.y/40) * Math.random() * Math.sin(j + 1) * Math.cos(i) * w / 50 + 40
        ctx.strokeStyle = 'rgba(' + x + ',' + g + ',' + b + ',0.9)';
        ctx.arc(x, y, 2 * i - j + 1, i / 100 * j, i * -j + 1 / (40 * Math.PI/8));
        // ctx.strokeText('iyo', x, y);
      })
      ctx.stroke();
    }
    div.appendChild(canvas)
    galery.appendChild(div)
  })
}