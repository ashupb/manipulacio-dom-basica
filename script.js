const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnSuma = document.querySelector("#btnCalcularSuma");
const pResultSuma = document.querySelector('#resultSuma');
const btnResta = document.querySelector("#btnCalcularResta");
const pResultResta = document.querySelector('#resultResta');
const input3 = document.querySelector("#calculo3");
const input4 = document.querySelector("#calculo4");



btnSuma.addEventListener('click', btnOnclickSuma);

function btnOnclickSuma () {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResultSuma.innerText = "Este es el resutado de la suma que realizaste: " + sumaInputs;
}

btnResta.addEventListener('click', btnOnclickResta);

function btnOnclickResta () {
    const restaInputs = Number(input3.value) - Number(input4.value);
    pResultResta.innerText = "Este es el resutado de la resta que realizaste: " + restaInputs;
}
