const box=document.getElementsByClassName("box");
const gen_btn=document.getElementById("generator-btn");
function generate(){
    const red=(Math.floor(Math.random()*1000))%255;
    const green=(Math.floor(Math.random()*1000))%255;
    const blue=(Math.floor(Math.random()*1000))%255;
    box[0].style.backgroundColor=`rgb(${red-green},${green},${blue})`;
    box[1].style.backgroundColor=`rgb(${green-red},${blue+red},${red*2})`;
    box[2].style.backgroundColor=`rgb(${blue+green},${red},${green+red-blue})`;
    box[3].style.backgroundColor=`rgb(${blue+red},${green},${red})`;
    box[4].style.backgroundColor=`rgb(${red/2},${blue+red},${red})`;
    box[5].style.backgroundColor=`rgb(${blue+blue},${green+green},${blue*red})`;
}
