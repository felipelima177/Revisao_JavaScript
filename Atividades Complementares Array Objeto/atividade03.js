const array = [1, 2, 3, 4, 3, 5, 8, 10, 12]

function attArray() { // Atualizar array
  document.getElementById("array").innerText = "[" + array.join(", ") + "]"
}

function exibirIndice() { // Função para exibir o índice 
  const input = document.getElementById("num").value
  const num = Number(input)
  const index = array.indexOf(num)
  document.getElementById("indice").innerText =
    index !== -1 ? index : "Não encontrado"
}

attArray()
