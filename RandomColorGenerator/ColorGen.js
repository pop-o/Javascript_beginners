const box=document.getElementsByClassName("box");
const gen_btn=document.getElementById("generator-btn");
function generate(){
    const red=(Math.floor(Math.random()*1000))%255;
    const green=(Math.floor(Math.random()*1000))%255;
    const blue=(Math.floor(Math.random()*1000))%255;
    box[0].style.backgroundColor=`rgb(${red},${green},${blue})`;
    box[1].style.backgroundColor=`rgb(${green},${blue},${red})`;
    box[2].style.backgroundColor=`rgb(${blue},${red},${green})`;
    box[3].style.backgroundColor=`rgb(${blue},${green},${red})`;
    box[4].style.backgroundColor=`rgb(${red},${blue},${red})`;
    box[5].style.backgroundColor=`rgb(${blue},${green},${blue})`;
}
