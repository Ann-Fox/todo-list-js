let divElement = document.querySelector("div");
let inputElement = document.querySelector("input");

document.addEventListener("DOMContentLoaded", function () {
    inputElement.oninput = function () {
        // Отслеживаем ввод в поле input
        divElement.innerText = this.value; // В div выводим вводимый текст
        console.log(this.value);
    };
});
