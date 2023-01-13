//Declaracion de variables
let operator1 = "";
let operator2 = "";
let operation = "";

let numberList = document.querySelectorAll("[data-number]");
let symbolList = document.querySelectorAll("[data-symbol]");
let equalButton = document.querySelector("[equal]");
let resetButton = document.querySelector("[reset]");
let printNumbers = document.getElementById("inputcalc");
let changeSign = document.getElementById('sign');



//para  dark mode// 
function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "light.css") {
      theme.href = "dark.css";
      darkMode.innerHTML = "<i class='bx bx-sun' ></i>";
    } else {
      theme.href = "light.css";
      darkMode.innerHTML = "<i class='bx bxs-sun'></i>";
    }
  }

//Para que los numeros que seleccionemos se queden guardados
let arrayNumberList = Array.from(numberList);
for (let i = 0; i < arrayNumberList.length; i++) {
    arrayNumberList[i].addEventListener("click", function () {
        addNumber(arrayNumberList[i].innerHTML);
        displayNumber();
    });
}



//Para añadir los numeros a los botones
function addNumber(num) {
    operator1 += num;
}


//Para seleccionar las operaciones que vamos a hacer -- OPERACIONES
let arraySymbolList = Array.from(symbolList);
for (let i = 0; i < arraySymbolList.length; i++) {
    arraySymbolList[i].addEventListener("click", function () {
        if (operator1 === "") {
            alert("Pulsa un número primero");
            return;
        }
        if (operator1 !== '' && operator2 !== '') {
            calcular();
        }
        operation = arraySymbolList[i].innerHTML;
        operator2 = operator1;
        operator1 = "";
    });
}


//cambiar positivo-negativo
changeSign.addEventListener('click', function () {
    operator1 *= -1;
    displayNumber();
})



//Boton de igual
equalButton.addEventListener("click", function () {
    if (operator1 === "" || operator2 === "" || operation === "") {
        operator1 = "";
        operation = "";
        displayNumber();
        alert("Falta de operación");
        return;
    }
    calcular();
    displayNumber();
});



//Para resetearlo todo
resetButton.addEventListener("click", function () {
    operation = "";
    operator1 = "";
    operator2 = "";
    displayNumber();
});



//Para imprimir los numeros en la pantalla
function displayNumber() {
    printNumbers.value = operator1;
}


//operaciones
function calcular() {
    switch (operation) {
        case "+":
            operator1 = parseFloat(operator2) + parseFloat(operator1);
            break;
        case "-":
            operator1 = parseFloat(operator2) - parseFloat(operator1);
            break;
        case "x":
            operator1 = parseFloat(operator2) * parseFloat(operator1);
            break;
        case "÷":
            operator1 = parseFloat(operator2) / parseFloat(operator1);
            break;
        case "%":
            operator1 = (parseFloat(operator2) * parseFloat(operator1)) / 100;
            break;
        default:
            break;
    }
}
