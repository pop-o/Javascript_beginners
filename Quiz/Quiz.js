const question=[
    {'que':'What is full form of HTML?',
        'a':'HyperText Markup Language',
        'b':'apple',
        'c':'bananana',
        'd': 'dont know',
        'correct':'a'
},
{'que':'What is my name?',
        'a':'Poem',
        'b':'Popo',
        'c':'Yato',
        'd': 'dont know',
        'correct':'a'
}
]
let index=0;
let total=question.length;
let right=0,wrong=0;
const ques=document.getElementById("question");
const options=document.querySelectorAll(".options");
const submit=document.getElementById("submit");
function loadQuestion(){
    if(index==total){
        document.getElementById("display").innerHTML=`
        <h1>Questions finished</h1>
        <h4>Correct: ${right}</h4>
        <h4>incorrect: ${wrong}</h4>
        <button onclick="reset()">Retry Quiz</button>
        
        `
    }else{
        uncheck();
    ques.innerText=question[index].que;
 
    options[0].nextElementSibling.innerText=question[index].a;
    options[1].nextElementSibling.innerText=question[index].b;
    options[2].nextElementSibling.innerText=question[index].c;
    options[3].nextElementSibling.innerText=question[index].d;
}
}
function reset(){
    location.reload();
}
loadQuestion();

function checkAns(){
    
    let answer=ans();
    if(answer==0){
        alert("Choose an answer");
    }else{
    if(answer==question[index].correct){
        right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
}


}


function ans(){
    let answer=0;
    

    options.forEach((input) => {
        if(input.checked){
            answer=input.value;
        }
        
    });
    return answer;
 
}

function uncheck(){
    options.forEach((input)=>{
        input.checked=false;
    })
}
