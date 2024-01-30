const date="Feb 16 2024";
document.getElementById("aaa").innerText=date;
const inputs=document.querySelectorAll("input");
function timer(){
    const set=new Date(date);
    const now=new Date;
    const diff=set-now;
    if(diff>0){
    inputs[0].value=Math.floor(diff/(1000*60*60*24));
    inputs[1].value=Math.floor((diff/(1000*60*60))%24);
    inputs[2].value=Math.floor((diff/(1000*60))%60);
    inputs[3].value=Math.floor((diff/(1000))%60);
    }else{
        alert("Countdown finished");
        document.getElementsByTagName("body")[0].style.backgroundColor="red";
        return;
    }
}

timer();

setInterval(timer,1000);
