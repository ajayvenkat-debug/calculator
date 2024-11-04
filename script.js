let display= document.getElementById('display');

function appendToDisplay(value){
    display.value+=value;
}
function clearDisplay(){
    display.value='';
}
function calculatorResult(){
    try{
        let result=eval(display.value);
        if(result==Infinity || result==-Infinity){
            throw new Error("division by zero");
        }
        display.value=result;
    }catch(error){
        display.value='error';
    }
}