const form = document.querySelector('.form');
const name = document.getElementById('name');
const number = document.getElementById('number');
const date = document.getElementById('date');
const cvv = document.getElementById('cvv');

const visa = document.querySelector('.card');

/*  MOSTRAR ERRO  */
function showError(element, error) {
    if(error === true) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
};

/*  ALTERAR O NOME DO FORMATO  */
name.addEventListener('input', function() {
    let alert1 = document.getElementById('alert-1');
    let error = this.value === '';
    showError(alert1, error);
    document.getElementById('card-name').textContent = this.value;
});

/*  ALTERAR O NÚMERO DO CARTÃO DE FORMATO */
number.addEventListener('input', function(e) {
    this.value = numberAutoFormat();

    //Mostrar erro quando é diferente de 16 números e 3 espaços em branco
    let error = this.value.length !== 19;
    let alert2 = document.getElementById('alert-2');
    showError(alert2, error);

    document.querySelector('.card__number').textContent = this.value;
});

function numberAutoFormat() {
    let valueNumber = number.value;
    // Se o espaço em branco mudar para ''. Se não for um número entre 0-9, mude para ''
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // O valor tem no mínimo 4 dígitos e no máximo 16
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 4) {
        // após 4 dígitos, adicione um novo elemento ao Array
        // e.g. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        // Adicione um espaço em branco após 4 dígitos
        return parts.join(' ');
    } else {
        return valueNumber;
    }
};

/*  ALTERAR O FORMATO DA DATA  */
date.addEventListener('input', function(e) {
    this.value = dateAutoFormat();
    
    // Mostrar erro se não for uma data válida
    let alert3 = document.getElementById('alert-3');
    showError(alert3, isNotDate(this));

    let dateNumber = date.value.match(/\d{2,4}/g);
    document.getElementById('month').textContent = dateNumber[0];
    document.getElementById('year').textContent = dateNumber[1];
});

function isNotDate(element) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // início janeiro 0 precisamos adicionar + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2024 -> 24
    let dateNumber = element.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);
    
    if(element.value === '' || monthNumber < 1 || monthNumber > 12 || yearNumber < year || (monthNumber <= month && yearNumber === year)) {
        return true;
    } else {
        return false;
    }
}

function dateAutoFormat() {
    let dateValue = date.value;
    // Se o espaço em branco -> mudar para ''. Se não for um número entre 0-9 -> mude para ''
    let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // Mínimo de 2 dígitos e máximo de 4
    let matches = v.match(/\d{2,4}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 2) {
        // Após 4 dígitos, adicione um novo elemento ao Array
        // e.g. "4510023" -> [4510, 023]
        parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
        // Adicione um espaço em branco após 4 dígitos
        return parts.join('/');
    } else {
        return dateValue;
    }
};

/*  ALTERAR O FORMATO CVV  */
cvv.addEventListener('input', function(e) {
    let alert4 = document.getElementById('alert-4');
    let error = this.value.length < 3;
    showError(alert4, error)
});

/* VERIFIQUE SE A TECLA PRESSIONADA É UM NÚMERO (entrada do número do cartão, data e cvv) */
function isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
        return false;
    }
};

/*  FORMULÁRIO DE VALIDAÇÃO AO PRESSIONAR O BOTÃO   */
form.addEventListener('submit', function (e) {
    // 1. se não houver nenhum nome
    // 2. se o comprimento do cartão numérico não for válido (16 números e 3 espaços em branco)
    // 3. se não for uma data válida (número 4 e "/" ou não for uma data válida)
    // 4. se não for um CVV válido

    if(name.value === '' || number.value.length !== 19 || date.value.length !== 5 || isNotDate(date) === true || cvv.value.length < 3) {
        e.preventDefault();
    };

    // 5. Se alguma entrada estiver vazia, mostre o alerta dessa entrada
    let input = document.querySelectorAll('input');
    for( i = 0; i < input.length; i++) {
        if(input[i].value === '') {
            input[i].nextElementSibling.style.opacity = '1';
        }
    }
});