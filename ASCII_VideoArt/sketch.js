const density = "Ñ@#W$9876543210?!abc;:+=-,._                     ";

//let redballs;
let video;
let asciidiv;

//function preload() {
//  redballs = loadImage("gloria48.jpg");
//}

function setup() {
  noCanvas(); //rendering the text in the webpage\
  video=createCapture(VIDEO);
  video.size(48,48)
  asciidiv=createDiv();
  
}
function draw(){
  video.loadPixels();
  let asciiImage='';
  //findig the position of the most brightened pixel
  for(let j=0;j<video.height;j++){
    for(let i=0;i<video.width;i++){
      const pixelIndex=(i+j*video.width)*4;
      const r=video.pixels[pixelIndex+0];
      const g=video.pixels[pixelIndex+1];
      const b=video.pixels[pixelIndex+2];
      const avg=(r+g+b)/3;
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0,len));

      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
    }
  asciidiv.html(asciiImage);
  }