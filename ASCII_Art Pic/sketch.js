const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let redballs;
//preloading image
function preload() {
  redballs = loadImage("gloria48.jpg");
}

function setup() {
  noCanvas(); //rendering the text in the webpage
  redballs.loadPixels();
  
  //findig the position of the most brightened pixel
  for(let j=0;j<redballs.height;j++){
    row='';
    for(let i=0;i<redballs.width;i++){
      const pixelIndex=(i+j*redballs.width)*4;
      const r=redballs.pixels[pixelIndex+0];
      const g=redballs.pixels[pixelIndex+1];
      const b=redballs.pixels[pixelIndex+2];
      const avg=(r+g+b)/3;
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    createDiv(row);
    }
  }