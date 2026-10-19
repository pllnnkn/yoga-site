let check = false;

function verify() {
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let d = parseFloat(elementD.value);

    console.log("a, b, c, d:", a, b, c, d);


    if (a <= 0 || b <= 0 || c <= 0 || d <= 0 || isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        result = "Ошибка: стороны должны быть положительными числами";
        check = false;
    }

    else if ((a <= c && b <= d) || (a <= d && b <= c)) {
        result = "Да, прямоугольник поместится.";
        check = true;
    } 
    else {
        result = "Нет, прямоугольник не поместится.";
        check = true;
    }


    document.getElementById("result").value = result;
}


function send() {
    if (check) {
    
        document.getElementById("UserEnter").submit();
    } else {
        alert("Сначала нажмите 'Проверить' (или исправьте ошибки в данных).");
    }
}


let result;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);