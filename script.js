let firstName = "Jane Doe";
let age = 30;
let isStudent = true;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    if (b !== 0){
        return a / b;
    } else { 
        console.log("Error:Division by zero is not allowed.");
        return null;
    }
}

function multiply(a, b) {
    return a * b;
}

console.log("Name: " + firstName);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

let num1 = 10;
let num2 = 5;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Division: " + divide(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));


function getInputValues() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    return {num1, num2};
}


function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("addButton").addEventListener("click", function() {
    let { num1, num2 } = getInputValues();
    let result = add(num1, num2);
    displayResult(result);
});


document.getElementById("multipltyButton").addEventListener("click", function(){
    let { num1, num2 } = getInputValues();
    let result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById("divideButton").addEventListener("click", function() {
    let { num1, num2} = getInputValues();
    let result = divide(num1, num2);
    displayResult(result);
});

document.getElementById("toggleButton").addEventListener("click", function(){
    let resultDiv = document.getElementById("result");
    if (resultDiv.classList.contains("hidden")) {
        resultDiv.classList.remove("hidden");
        document.getElementById("toggleButton").textContent = "Hide Results";

    } else {
        resultDiv.classList.add("hidden");
        document.getElementById("toggleButton").textContent = "Show Results";
    }
    
});


let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Num1', 'Num2', 'Result'],
        datasets: [{
            label: 'Operation Result',
            data: [0, 0, 0],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the chart with new data
function updateChart(num1, num2, result, operation) {
    chart.data.labels = ['Num1', 'Num2', operation];
    chart.data.datasets[0].data = [num1, num2, result];
    chart.update();
}