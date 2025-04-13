function calcular() {
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var res = document.getElementById("res")
    num1 = Number(n1.value)
    num2 = Number(n2.value)
    var s = (num1+num2)
    res.innerHTML = ` O resultado da soma entre ${num1} e ${num2} e igual a: ${s}`
}