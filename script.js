// "use strict";
document.querySelector('.display').innerText = "0";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            document.querySelector('.display').innerText = eval(document.querySelector('.display').innerText);
            
        }

        else if(e.target.innerText == 'AC'){
            document.querySelector('.display').innerText = "0";
        }
        
        else {
            console.log(e.target.innerText);
            document.querySelector('.display').innerText = document.querySelector('.display').innerText.replace(0, e.target.innerText)
            document.querySelector('.display').innerText += e.target.innerText;
        }

    })

})


