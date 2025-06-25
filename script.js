let numImages = 55;
document.addEventListener('click', function() {
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
      let img = new Image();
      let w = 256
      canvas.width = w;
      canvas.height = w;

      let rgbStep = 4
      let { r, g, b } = {
        r: Math.max(150 - i * rgbStep, 0),
        g: Math.max(0 + i * rgbStep * 0.75, 0),
        b: Math.max(255 - i * rgbStep, 0)
      }
      let text1 = canvas.id.replace('canvas', 'arfombra')
      let text2 = ('rgb(' + r + ',' + g + ',' + b + ')')
      
      ctx.font = 'bold 32px monospace';
      ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.strokeText(text1, 30, 100);

      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.fillText(text1, -30 + w / 2, w / 2)
      ctx.font = 'bold 19px monospace';
      ctx.fillText(text2, 30, 250);
      ctx.drawImage(img, 0, 0, w, w);


      ctx.beginPath();
      [...Array(i + 1).keys()].forEach(j => {
        let x = w / 2 + i + 2.5 * Math.random() * Math.sin(i) * Math.cos(j + 1) * w / 8
        let y = w / 2 + j + 1 + Math.random() * Math.sin(j + 1) * Math.cos(i) * w / 3 + 40
        ctx.strokeStyle = 'rgba(' + x + ',' + g + ',' + b + ',0.9)';
        ctx.arc(x, y, 2 * i - j + 1, i / 100 * j, i * -j + 1 / 40 * Math.PI);
        // ctx.strokeText('iyo', x, y);
      })
      ctx.stroke();
    }
    div.appendChild(canvas)
    galery.appendChild(div)
  })
}