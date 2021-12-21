var acumulado = 0;
var operacion = (tipo) => {
    if (valorValido()) {
        switch (tipo) {
            case "add":
                acumulado += Number(document.getElementById("operator").value);
                break;
            case "subtract":
                acumulado -= Number(document.getElementById("operator").value);
                break;
            case "multiply":
                acumulado *= Number(document.getElementById("operator").value);
                break;
            case "divide":
                acumulado /= Number(document.getElementById("operator").value);
                break;
        }
        document.getElementById("operator").value = "";
    }
    else {
        alert("Operator not set");
    }
}
var valorValido = () => {
    if (document.getElementById("operator").value == "") {
        return false;
    }
    return true;
}
var resultado = () => alert("Result: " + Number(acumulado));
var limpiar = () => { acumulado = 0; alert("Operation restarted"); }
var handleButtonOperationClick = event => operacion(event.target.id);
document.getElementById("add").addEventListener("click", handleButtonOperationClick);
document.getElementById("subtract").addEventListener("click", handleButtonOperationClick);
document.getElementById("multiply").addEventListener("click", handleButtonOperationClick);
document.getElementById("divide").addEventListener("click", handleButtonOperationClick);