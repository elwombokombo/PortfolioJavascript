// Manipulación de Cadenas
function repeatString() {
    const text = document.getElementById('repeatText').value;
    const count = parseInt(document.getElementById('repeatCount').value);
    const resultDiv = document.getElementById('repeatedText');
    resultDiv.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const p = document.createElement('p');
        p.textContent = text;
        resultDiv.appendChild(p);
    }
}

function reverseString() {
    const text = document.getElementById('reverseText').value;
    const reversedText = text.split('').reverse().join('');
    const resultDiv = document.getElementById('reversedText');
    const p = document.createElement('p');
    p.textContent = reversedText;
    resultDiv.innerHTML = '';
    resultDiv.appendChild(p);
}

// Procesamiento de Arreglos
function removeFromArray() {
    const item = document.getElementById('arrayElement').value;
    const items = document.getElementById('arrayItems').value.split(',');
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
    document.getElementById('arrayItems').value = items.join(',');
    const resultDiv = document.getElementById('updatedArray');
    resultDiv.textContent = 'Arreglo actualizado: ' + items.join(', ');
}

function getTheTitles() {
    const bookInput = document.getElementById('bookTitlesInput').value;
    const books = bookInput.split(',').map(book => {
        const [title, author] = book.split('-');
        return { title: title.trim(), author: author.trim() };
    });
    const titles = books.map(book => book.title);
    const resultDiv = document.getElementById('bookTitles');
    resultDiv.innerHTML = '';
    titles.forEach(title => {
        const h1 = document.createElement('h1');
        h1.textContent = title;
        resultDiv.appendChild(h1);
    });
}

// Filtrado y Transformación
function getOdds() {
    const numbers = document.getElementById('numberList').value.split(',').map(Number);
    const odds = numbers.filter(num => num % 2 !== 0);
    const resultDiv = document.getElementById('oddNumbers');
    resultDiv.innerHTML = '';
    odds.forEach(num => {
        const span = document.createElement('span');
        span.textContent = num + ' ';
        span.className = 'odd-number';
        resultDiv.appendChild(span);
    });
}

function duplicates() {
    const nums = document.getElementById('duplicateNumbers').value.split(',').map(Number);
    const duplicatesCount = {};
    nums.forEach(num => {
        duplicatesCount[num] = (duplicatesCount[num] || 0) + 1;
    });
    const resultDiv = document.getElementById('duplicates');
    resultDiv.innerHTML = '';
    for (const [num, count] of Object.entries(duplicatesCount)) {
        if (count > 1) {
            const h4 = document.createElement('h4');
            h4.textContent = `Valor duplicado: ${num}`;
            const p = document.createElement('p');
            p.textContent = `Cantidad: ${count}`;
            resultDiv.appendChild(h4);
            resultDiv.appendChild(p);
        }
    }
}
