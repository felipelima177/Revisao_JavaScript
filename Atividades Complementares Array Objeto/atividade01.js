let array = []

function attArray() { // Atualizar array 
  document.getElementById("array").innerText = "[" + array.join(", ") + "]"
  document.getElementById("somaArray").innerText = array.reduce(
    (acc, curr) => acc + curr,0)
}

function addNum() { // Função para adicionar número
  const input = document.getElementById("num").value
  const num = Number(input)
  if (!isNaN(num)) {
    array.push(num)
    document.getElementById("num").value = ""
    attArray()
  } else {
    alert("Insira um número válido!!!")
  }
}

function removerNum() { // Função para remover número
  if (array.length > 0) {
    array.pop()
    attArray()
  } else {
    alert("O array já está vazio!")
  }
}
