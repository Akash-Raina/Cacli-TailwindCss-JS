class Calulator{
   
    addOperator(operator){
        if(input === "")return;

        if(input[input.length - 1] === '+' || input[input.length - 1] === '-' || input[input.length - 1] === '*'||input[input.length - 1] === '/') return;
        
        input += operator;
        document.querySelector(".input-text").value = input;   
    }
    NumberDisplay(number){
        input += number;
        document.querySelector(".input-text").value = input;

    }
    clear(){
        input = '';
        document.querySelector(".input-text").value = input;
    }
    evalAll(){
        input = eval(input);
        document.querySelector(".input-text").value = input;
    }
}




const calulator = new Calulator();
let input = '';
const numberButtons = document.querySelectorAll(".number-buttons");
const opertButtons = document.querySelectorAll(".operation-buttons");
const evalButton = document.querySelector(".assign-buttons");
const clearButton = document.querySelector(".clear-buttons");

numberButtons.forEach(element => {
    element.addEventListener('click', ()=>{
        calulator.NumberDisplay(element.innerHTML);
    })
})

opertButtons.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        calulator.addOperator(operator.innerHTML)
    })
})

clearButton.addEventListener('click', ()=>{
    calulator.clear();
})

evalButton.addEventListener("click", ()=>{
    calulator.evalAll();
})