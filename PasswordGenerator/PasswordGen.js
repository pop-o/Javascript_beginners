const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="0123456789";
const symbols="~!@#$%^&*()_+`\|?><.,';:][}{-=";

const passbox=document.getElementById("passBox");
const char=document.getElementById("characters");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const btn=document.getElementById("generate");

function genRan(dataset){
    return dataset[Math.floor(Math.random()*dataset.length)];
}

const GeneratePass = (password="")=>{    
    if(!upper.checked && !lower.checked && !number.checked && !symbol.checked){
        alert("Check any one box to generate password");
    }else{
    if(upper.checked && lower.checked && number.checked && symbol.checked){
        password+=genRan(upperset+lowerset+numberset+symbols);
    } 
    if(upper.checked && lower.checked && number.checked){
        password+=genRan(upperset+lowerset+numberset);
    } 
    if(upper.checked && lower.checked  && symbol.checked){
        password+=genRan(upperset+lowerset+symbols);
    } 
    if(upper.checked  && number.checked && symbol.checked){
        password+=genRan(upperset+numberset+symbols);
    } 
    if( lower.checked && number.checked && symbol.checked){
        password+=genRan(lowerset+numberset+symbols);
    } 
    if(upper.checked && lower.checked){
        password+=genRan(upperset+lowerset);
    } 
    if(number.checked && symbol.checked){
        password+=genRan(numberset+symbols);
    } 
    if(upper.checked && symbol.checked){
        password+=genRan(upperset+symbols);
    } 
    if(upper.checked && number.checked){
        password+=genRan(upperset+numberset);
    } 
    if(lower.checked && number.checked){
        password+=genRan(lowerset+numberset);
    } 
    if(lower.checked && symbol.checked){
        password+=genRan(lowerset+symbols);
    } 
    
    if(upper.checked){
        password+=genRan(upperset);
    }
    if(lower.checked){
        password+=genRan(lowerset);
    }
    if(number.checked){
        password+=genRan(numberset);
    }
    if(symbol.checked){
        password+=genRan(symbols);
    }
    if(password.length<char.value){
        return GeneratePass(password);
    }
    console.log(password);
    passbox.value=password.slice(0,char.value);
}
}

function Copy(){
    if(!passbox.value){
        alert("Password Empty");
    }else{
    navigator.clipboard.writeText(passbox.value);
    alert("Password copied to clipboard");
}
}
function Reset(){
    passbox.value="";
    upper.checked=false;
    lower.checked=false;
    number.checked=false;
    symbol.checked=false;
    navigator.clipboard.writeText("");
    setTimeout(function(){
        alert("Generator reset");
    },10);
}



