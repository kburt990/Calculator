let displayValue = "";
let savedValue = "";
let currentOperator = "";
const currentNumberScreen = document.querySelector(".current-number-screen");
const savedNumberScreen = document.querySelector(".saved-number-screen");

function updateCurrentDisplay(){
    if(displayValue.length==0)
    {
        currentNumberScreen.textContent = "0";
    }
    else
    {
        currentNumberScreen.textContent=displayValue;
    }
    
}

function enterNumber(num){
    //error checking
    // above character limit
    if(displayValue.length >= 8)
    {
        alert("Limit of 8 digits");
        return;
    }
    // entering 0 when no other digit is on screen
    if(num == 0 && displayValue==="")
    {
        return;
    }
    displayValue += num;
    updateCurrentDisplay();
}

function clearScreen(){
    displayValue = "";
    savedValue = "";
    savedNumberScreen.textContent = "";
    currentNumberScreen.textContent = "0";
}

function deleteNum(){
    // unable to remove inital 0 on screen
    if(displayValue.length==0)
    {
        return;
    }
    displayValue = displayValue.substring(0,displayValue.length-1);
    updateCurrentDisplay();

}
function enterOperand(operand){
    // break if nothing is entered
    if(displayValue==="" && savedValue===""){
        return;
    }
    // chain operators
    if(savedValue!=""){
        currentOperator=operand;
        savedNumberScreen.textContent=savedValue+operand;
    }
    else{
        savedValue=displayValue;
        displayValue="";
        currentNumberScreen.textContent="0";
        currentOperator=operand;
        savedNumberScreen.textContent=savedValue+operand;
        
        

    }
    


}

function add(a,b){
    return a + b;
}

function substract(a, b) {
    return b-a;
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b){
    return b/a
}

function operate(operator)
{
    a = Number(displayValue);
    b = Number(savedValue);
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '/':
            if(a===0){
                alert("Divide by 0 error");
                clearScreen();
            }
        
            else return divide(a,b);
        case '*':
            return multiply(a,b);
        default:
            return null;
    }
}

function onClickOperate()
{
    ans = operate(currentOperator);
    clearScreen();
    savedValue = String(ans);
    savedNumberScreen.textContent=savedValue;

}





