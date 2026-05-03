// Criar evento sem chamar função pelo HTML
// const botao = document.querySelector("button")
// botao.addEventListener("click", (event) => {
//     var primeiro = document.getElementById("primeiro").value;
//     var segundo = document.getElementById("segundo").value;

//     alert("Resultado: " + (+primeiro + +segundo))
// })

function soma() {
    var primeiro = document.getElementById("primeiro").value;
    var segundo = document.getElementById("segundo").value;

    alert("Resultado: " + (+primeiro + +segundo)) // Para converter string em inteiro no JS podemos usar a função parseInt, construtor Number, e o + antes da variável
}
