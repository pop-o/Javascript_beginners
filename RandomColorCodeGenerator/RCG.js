const gen_btn=document.getElementById("gen-btn");
gen_btn.addEventListener(
    "click",generate
);
const reset_btn=document.getElementById("reset-btn");
reset_btn.addEventListener(
    "click",reset
)
const box=document.getElementById("box");
var x=0;
function generate(){
    if(x==0){
    var ranNum=Math.floor(Math.random()*16777215);
    var ranCode="#"+ranNum.toString(16);  
    box.innerText=ranCode;
    box.style.backgroundColor=ranCode;
    box.style.fontSize="40px";
    navigator.clipboard.writeText(ranCode);
}else {
    alert("reset first");
}
}
generate();

function reset(){
    box.style.backgroundColor="#ffffff";
    box.innerText="#ffffff";
    if(x==1){
    box.style.filter='none';
    }
    navigator.clipboard.writeText("#ffffff");
    x=0;

}

function invert(){
    code=document.getElementById("box").textContent;
    if(x==0){
   box.style.filter='invert(100%)';
   var invertedCode=getComputedStyle(box).backgroundColor;
   box.innerText=code+"\n inverted : "+invertedCode;
   navigator.clipboard.writeText(invertedCode);
   x=1;
}else if(x==1){
    box.style.filter='none';
    var parts = code.split(" inverted : ");
    box.innerText = parts[0];
    navigator.clipboard.writeText(parts[0]);
    x=0;
}else return;
}

var invert_btn=document.getElementById("invert-btn");
invert_btn.addEventListener("mousedown",invert);
