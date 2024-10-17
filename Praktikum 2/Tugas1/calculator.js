let display = document.getElementById('display');
let currentValue = '0';

function appendValue(value) {
    if( display.innerText === '0' || display.innerText === 'error'){
        display.innerText = value;
    }else{
        display.innerText += value;
    }
    currentValue = display.innerText;
}
function clearAll(){
    display.innerText ='0'; 

    currentValue = '0';
}
function calculate(){
    try{
        let result = eval(display.innerText);
        display.innerText = result;
        currentValue = result.toString();
    }catch(error){
        display.innerText = 'error';
        currentValue = '0'; 
    }
        
}
function clearEntry(){
    if (display.innerText === 'error'){
        display.innerText ='0';

    }else if(display.innerText.length === 1){
        display.innerText = '0';
    }else{
        display.innerText = display.innerText.slice(0,-1);
    }
    currentValue = display.innerText;

    }
