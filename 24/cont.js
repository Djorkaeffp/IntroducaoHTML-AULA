function iniciarContagem() {
  var n = prompt("Digite um número (n):");

  // Verifica se n é um número válido
  if (isNaN(n) || n === null) {
    alert("Por favor, insira um número válido.");
    return;
  }

  n = parseInt(n);
  var outputDiv = document.getElementById("output");

  // Limpa o conteúdo atual da div
  outputDiv.innerHTML = "";

  // Escreve os números de 1 a n na div
  for (var i = 1; i <= n; i++) {
    outputDiv.innerHTML += i + "<br>";
  }
}