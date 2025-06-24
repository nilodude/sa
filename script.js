
// document.getElementById('clickMe').addEventListener('click', function() {
//     let msg = document.getElementById('message')

// });

window.onload = (event) => {
  console.log(event);
  const galery = document.getElementById('galery');

  [...Array(48).keys()].forEach(i => {
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
        r: 150 - i*rgbStep ,
        g: 0+ i*rgbStep*0.75 ,
        b: 255- i*rgbStep 
      }

      let text1 = image.id
      let text2 = ('rgb(' + r + ',' + g + ',' + b + ')')
      // ctx.fillStyle = "white";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);  

      

      ctx.font = 'bold 39px monospace';
      ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.strokeText(text1, 30, 100);
      
      console.log('rgba(' + r + ',' + g + ',' + b + ',0.9)')
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.9)';
      ctx.fillText(text1, w / 2, w / 2)
      ctx.font = 'bold 19px monospace';
      ctx.fillText(text2, 30, 200);
      ctx.drawImage(img, 0, 0, w, w)
    }
    image.src = canvas.toDataURL()

    div.appendChild(image)
    galery.appendChild(div)
  })
};