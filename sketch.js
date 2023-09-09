let cnv;
let sz = 10;
function setup(){
    colorMode(HSB,70)
    cnv=createCanvas(600,600);
    cx = (windowWidth-cnv.width)/2;
    cy = (windowHeight-cnv.height)/2;
    cnv.position(cx,cy);
    background(0);
    noStroke()
    bitit();
    for (let i =0; i<60;i++){
       // print(i,i&60, i|60, i^60)
    }

}


function bitit(){
    //translate(width/2,height/2)
    for (let j = 0; j<60;j++){
        for(let i =0;i<60;i++){
            let clrAnd = (j&i)
            let clrOr =(j|i)
            let clrXor =(j^i)
            let clrNot =(j|~i)
            fill(clrXor,60,60)
            
            rect(i*sz,j*sz,sz,sz)
        }
    }
}

