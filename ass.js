

function Multiply(){

    const input1 = document.getElementById("input1")
    const input2 = document.getElementById("input2")
    const resultdiv = document.getElementById("result")

    const num1 = parseFloat(input1).value;
    const num2 = parseFloat(input2).value;
if(isNaN(num1) && !isNaN(num2)){
    resultdiv.innerHTML = "";
    for (const i = 0; i <= num2; i++){
          result.push(input1 * i)
    resultdiv.innerHTML += `${num1} x ${i} = ${product} <br>`;
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "Multiplication results: " + result.join(", ");
    }
  
}

}