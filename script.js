let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let string = '';

function handleInput(input) {
    if (input === 'DEL' || input === 'Backspace') {
        string = string.substring(0, string.length - 1);
        display.value = string;
    } else if (input === 'AC' || input.toLowerCase() === 'c') {
        string = '';
        display.value = string;
    } else if (input === '=' || input === 'Enter') {
        try {
            string = eval(string).toString();
            display.value = string;
        } catch (error) {
            display.value = 'Error';
            console.error('Invalid expression');
        }
    } else {
        string += input;
        display.value = string;
    }
}

buttonArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (key === 'Enter' || key === 'Backspace' || key === 'c' || key === 'C' || key === 'Escape' || (key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        e.preventDefault(); // Prevent default action for keys we're handling
        handleInput(key === 'Escape' ? 'AC' : key);//If the key is Escape, pass 'AC' to handleInput.Otherwise, pass the key itself to handleInput.
    } else if (key === '=' || key === 'Enter') {
        e.preventDefault();
        handleInput('=');
    }
});
