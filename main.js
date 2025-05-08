let divElement = document.querySelector("div");
let inputElement = document.querySelector("input");

let labesElement = document.querySelector(".labes");
let inputLabesElement = document.querySelector(".input-label");

document.addEventListener("DOMContentLoaded", function () {
    inputElement.oninput = function () {
        // Отслеживаем ввод в поле input
        divElement.innerText = this.value; // В div выводим вводимый текст
        // console.log(this.value);
    };

    // inputLabesElement.oninput = function () {
    //     labesElement.innerText = this.value
    // }
});

inputLabesElement.addEventListener("keyup", function (event) {
    let array = [];
    // console.log(event.target.value);
    let arrayInput = event.target.value.split(",");

    for (let index = 0; index < arrayInput.length; index++) {
        const element = arrayInput[index].trim();
        // console.log(element);
        if (element != "") {
            array.push(element);
        }
    }
    const messageElement = document.createElement("div");

    if (event.code == "Comma") {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            console.log(element);
            messageElement.classList.add("message");
            messageElement.innerText = element;
            labesElement.appendChild(messageElement);
        }
    }
    console.log(array);
});
