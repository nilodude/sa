
// document.getElementById('clickMe').addEventListener('click', function() {
//     let msg = document.getElementById('message')

// });

window.onload = (event) => {
  console.log(event);
  const galery = document.getElementById('galery');

  [...Array(55).keys()].forEach(i => {
    // const randi = Math.random()*999
    const div = document.createElement('div')
    div.id = 'imageContainer' + i
    div.classList.add('imageContainer')
    const image = document.createElement('img')
    image.id = 'image' + i
    
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    if (ctx) {
      let img = new Image();
      let w = 256
      canvas.weidth = w;
      canvas.height = w;
      
      let rgbStep = 4
      //need to map collections ID to 0 - 255
      let { r, g, b } = {
        r: Math.max(150 - i*rgbStep ,0),
        g: Math.max(0+ i*rgbStep*0.75 ,0),
        b: Math.max(255- i*rgbStep ,0)
      }

      let text1 = image.id.replace('image', 'arfombra')
      let text2 = ('rgb(' + r + ',' + g + ',' + b + ')')
      // ctx.fillStyle = "white";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);  

      

      ctx.font = 'bold 32px monospace';
      ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.strokeText(text1, 30, 100);
      
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.fillText(text1, -30+w / 2, w / 2)
      ctx.font = 'bold 19px monospace';
      ctx.fillText(text2, 30, 250);
      ctx.drawImage(img, 0, 0, w, w)

      // ctx.beginPath();
      // Array(i+1).keys().forEach(j=>{
      //   let x = w/2+i+2.5*Math.random()*Math.sin(i)*Math.cos(j+1) *w/5
      //   let y = w/2 + j+1+Math.random()*Math.sin(j+1)*Math.cos(i) *w/3 +40
      //   ctx.strokeStyle = 'rgba(' + x + ',' + g + ',' + b + ',0.9)';
      //   ctx.arc(x,y, 2*i-j+1,i/100*j, i*-j+1/10 * Math.PI);
      // })
      // ctx.stroke();
    }
    image.src = canvas.toDataURL()

    div.appendChild(image)
    galery.appendChild(div)
  })
};