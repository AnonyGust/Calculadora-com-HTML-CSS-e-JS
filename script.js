const display = document.querySelector('#display');
const btnAC = document.querySelector('button:nth-of-type(1)');
const btnPercent = document.querySelector('button:nth-of-type(2)');
const btnMultiply = document.querySelector('button:nth-of-type(3)');
const btnDivide = document.querySelector('button:nth-of-type(4)');
const btn7 = document.querySelector('button:nth-of-type(5)');
const btn8 = document.querySelector('button:nth-of-type(6)');
const btn9 = document.querySelector('button:nth-of-type(7)');
const btnEquals = document.querySelector('button:nth-of-type(8)');
const btn4 = document.querySelector('button:nth-of-type(9)');
const btn5 = document.querySelector('button:nth-of-type(10)');
const btn6 = document.querySelector('button:nth-of-type(11)');
const btnMinus = document.querySelector('button:nth-of-type(12)');
const btn1 = document.querySelector('button:nth-of-type(13)');
const btn2 = document.querySelector('button:nth-of-type(14)');
const btn3 = document.querySelector('button:nth-of-type(15)');
const btnPlus = document.querySelector('.mais');
const btn0 = document.querySelector('.zero');
const btnComma = document.querySelector('button:nth-of-type(18)');

// Define o valor atual da calculadora como uma string vazia
let currentVal = '';

// Adiciona evento de clique ao botão AC
btnAC.addEventListener('click', () => {
    // Limpa o valor atual e atualiza o display
    currentVal = '';
    display.innerText = '0';
});

// Adiciona evento de clique ao botão %
btnPercent.addEventListener('click', () => {
    // Usa a função eval() para avaliar a expressão e obter o resultado
    const result = eval(currentVal + '/100');

    // Define o resultado como o novo valor atual e atualiza o display
    currentVal = result.toString();
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão X
btnMultiply.addEventListener('click', () => {
    // Adiciona um sinal de multiplicação (x) ao valor atual e atualiza o display
    currentVal += '*';
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão /
btnDivide.addEventListener('click', () => {
    // Adiciona um sinal de divisão (/) ao valor atual e atualiza o display
    currentVal += '/';
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 7
btn7.addEventListener('click', () => {
    // Adiciona o dígito 7 ao valor atual e atualiza o display
    currentVal += '7';
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 8
btn8.addEventListener('click', () => {
    // Adiciona o dígito 8 ao valor atual e atualiza o display
    currentVal += '8';
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 9
btn9.addEventListener('click', () => {
    // Adiciona o dígito 9 ao valor atual e atualiza o display
    currentVal += '9';
    display.innerText = currentVal;
});

// Adiciona evento de clique ao botão =
btnEquals.addEventListener('click', () => {
    // Usa a função eval() para avaliar a expressão e obter o resultado
    const result = eval(currentVal);

    // Define o resultado como o novo valor atual e atualiza o display
currentVal = result.toString();
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 4
btn4.addEventListener('click', () => {
// Adiciona o dígito 4 ao valor atual e atualiza o display
currentVal += '4';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 5
btn5.addEventListener('click', () => {
// Adiciona o dígito 5 ao valor atual e atualiza o display
currentVal += '5';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 6
btn6.addEventListener('click', () => {
// Adiciona o dígito 6 ao valor atual e atualiza o display
currentVal += '6';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão -
btnMinus.addEventListener('click', () => {
// Adiciona um sinal de subtração (-) ao valor atual e atualiza o display
currentVal += '-';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 1
btn1.addEventListener('click', () => {
// Adiciona o dígito 1 ao valor atual e atualiza o display
currentVal += '1';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 2
btn2.addEventListener('click', () => {
// Adiciona o dígito 2 ao valor atual e atualiza o display
currentVal += '2';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 3
btn3.addEventListener('click', () => {
// Adiciona o dígito 3 ao valor atual e atualiza o display
currentVal += '3';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão +
btnPlus.addEventListener('click', () => {
// Adiciona um sinal de adição (+) ao valor atual e atualiza o display
currentVal += '+';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão 0
btn0.addEventListener('click', () => {
// Adiciona o dígito 0 ao valor atual e atualiza o display
currentVal += '0';
display.innerText = currentVal;
});

// Adiciona evento de clique ao botão ,
btnComma.addEventListener('click', () => {
// Adiciona um ponto (.) ao valor atual e atualiza o display
currentVal += '.';
display.innerText = currentVal;
});
