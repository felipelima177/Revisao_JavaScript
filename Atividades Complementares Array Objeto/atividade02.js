let array = []

function atualizarArray() { // atualizar array
  document.getElementById("array").innerText = "[" + array.join(", ") + "]"
}

function addNum() { // função para adicionar número
  const input = document.getElementById("num").value
  const num = Number(input)
  if (!isNaN(num)) {
    array.push(num)
    document.getElementById("num").value = ""
    atualizarArray()
  } else {
    alert("Por favor, insira um número válido.")
  }
}

function filtrarPar() { // função para exibir os pares
  const evens = array.filter((num) => num % 2 === 0)
  document.getElementById("exibirPar").innerText = "[" + evens.join(", ") + "]"
}
