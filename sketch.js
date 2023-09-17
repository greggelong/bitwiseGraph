let cnv;
let sz = 10;
let c;
let d;
function setup() {
  colorMode(HSB, 90);
  cnv = createCanvas(800, 800);
  cx = (windowWidth - cnv.width) / 2;
  cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);
  noStroke();
  bitit();
  for (let i = 0; i < 60; i++) {
    // print(i,i&60, i|60, i^60)
  }
  //frameRate(3)
}

function draw(){
  d = map(sin(radians(frameCount)),-1,1,0.05,1)
  c= map(cos(radians(frameCount*4)),-1,1,90,200)
  bitit();
}

function bitit() {
  for (let j = 0; j < 80; j++) {
    for (let i = 0; i < 80; i++) {
      let clrAnd = (j/d) & (i/d);
      //let clrOr = j | i;
      //let clrXor = (j/d) ^ (i/d);
      //let clrNot = j | ~i;
      fill(clrAnd,c-clrAnd,90);

      rect(i * sz, j * sz, sz, sz);
    }
  }
}
