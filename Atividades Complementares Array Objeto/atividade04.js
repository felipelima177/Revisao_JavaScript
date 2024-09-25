const array = [5, 3, 9, 1, 6, 10, 8, 17]

function attArray() { // Atualizar array
  document.getElementById("array").innerText = "[" + array.join(", ") + "]"
}

function acharMaior() { // Função para achar o maior número no loop
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  document.getElementById("maiorNum").innerText = max
}

attArray()
