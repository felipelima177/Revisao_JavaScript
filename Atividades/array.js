let numbers = ['1', '2', '3', '4']

function atualizarLista() {
    const listElement = document.getElementById('list')
    listElement.textContent = JSON.stringify(numbers);
}     

function adcNum() {
    const inputElement = document.getElementById('novonum')
    const number = inputElement.value;

    if (number) {
        numbers.push(number);
        inputElement.value = '';
        atualizarLista();

    } 
    
}

function removeNum() {
    if (numbers.length > 0) {
        numbers.pop(); 
        atualizarLista();

    }
       
    
}

atualizarLista();
