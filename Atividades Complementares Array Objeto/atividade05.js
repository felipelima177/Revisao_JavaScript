const array = [5, 3, 9, 1, 6, 2, 15, 32, 4]

function attArray() { // Atualizar array
  document.getElementById("array").innerText = "[" + array.join(", ") + "]"
}

function ordenarArray() { // Função para ordenar o array em ordem crescente 
  const sortedArray = array.slice().sort((a, b) => a - b)
  document.getElementById("arrayOrdenado").innerText =
    "[" + sortedArray.join(", ") + "]"
}

attArray()
