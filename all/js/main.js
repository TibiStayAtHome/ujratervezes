function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    let showAmount = document.querySelector("span.show-amount");
    let infoAmount = document.querySelector("span.info-amount");
    let amount = amountNumber * price;
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);


    function PriceCalc(price, amountNumber) {
        if (amount < 5000) {
            showAmount.innerHTML = amount + 500;
            infoAmount.innerHTML = "5000 Ft alatti rendeles miatt, 500 Ft lett felszamitva!";
        }
        else {
            showAmount.innerHTML = amount;
            infoAmount.innerHTML = "5000 Ft feletti rendeles miatt, a szallitas ingyenes!";
        }
    }

    function showSumPrice(price = 1000, amountNumber = 1) {
        if (amountNumber > 10) {
            alert("Maximum 10 termeket vasarolhat!");
        } else if (amountNumber < 1) {
            alert("Minimum 1 termeket kell vasarolnia!");
        } else {
            PriceCalc();
        }
    }
}


/*
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 termeket vasarolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 termeket kell vasarolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
*/


//Add help text.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a felteteket!";

let parent = document.querySelector("div.form-group:nth-child(1)")
parent.appendChild(helpText);

// eltavolitas parent.removeChild(helpText);

let sendButton = document.querySelector("form .btn.btn-primary");
/*
sendButton.onclick = function() {
    alert("Hello Js");
}
*/

sendButton.addEventListener("click", function () {
    calcAmount();
});

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);
});

// Urlap esemenyek.

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});

// Parent elements.
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
};

//Seelct elem kitoltese.

let toppings = [
    "Szalonna",
    "Hagyma",
    "Tukortojas",
    "Libamaj",
    "Extra Sonka"
];

let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
};




