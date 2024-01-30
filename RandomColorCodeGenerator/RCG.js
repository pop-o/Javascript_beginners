const gen_btn=document.getElementById("gen-btn");
gen_btn.addEventListener(
    "click",generate
);
const reset_btn=document.getElementById("reset-btn");
reset_btn.addEventListener(
    "click",reset
)
const box=document.getElementById("box");
function generate(){
    var ranNum=Math.floor(Math.random()*16777215);
    var ranCode="#"+ranNum.toString(16);
    console.log(ranCode);
    
    box.innerText=ranCode;
    box.style.backgroundColor=ranCode;
    navigator.clipboard.writeText(ranCode);
}
generate();

function reset(){
    box.style.backgroundColor="#ffffff";
    box.innerText="#ffffff";
    navigator.clipboard.writeText("#ffffff");
}