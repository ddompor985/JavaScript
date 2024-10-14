
// Función para mostrar la tabla de libros
function loadBooksTable() {
    const tableHTML = `
        <table id="tabla">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Género</th>
                    <th>Autores</th>
                    <th>Páginas</th>
                    <th>Publicado</th>
                    <th>Leído</th>
                    <th>Sitio Web</th>
                </tr>
            </thead>
            <tbody>
                ${libros.map(libro => `
                    <tr>
                        <td>${libro.title}</td>
                        <td>${libro.genre}</td>
                        <td>${libro.authors.join(', ')}</td>
                        <td>${libro.pages}</td>
                        <td>${libro.published}</td>
                        <td>${libro.read ? 'Sí' : 'No'}</td>
                        <td>${libro.website ? `<a href="${libro.website}" target="_blank">Ver</a>` : 'N/A'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('book-list').innerHTML = tableHTML;
}
loadBooksTable();

const outputDiv = document.getElementById('output');

// 1. Mostrar géneros únicos
function showGenres() {
    const genres = [...new Set(libros.map(libro => libro.genre))];
    outputDiv.innerHTML = `<h3>Géneros:</h3><p>${genres.join(', ')}</p>`;
}

// 2. Títulos de libros con más de 300 páginas
function showBooksOver300Pages() {
    const booksOver300 = libros.filter(libro => libro.pages > 300);
    outputDiv.innerHTML = `<h3>Libros con más de 300 páginas:</h3>${booksOver300.map(libro => { 
        return `<div class="highlight">${libro.title}</div>`;
    }).join('')}`;
}

// 3. Títulos de libros publicados hace más de 2 años
function showBooksPublishedMoreThanTwoYearsAgo() {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    const booksOld = libros.filter(libro => new Date(libro.published) < twoYearsAgo);
    outputDiv.innerHTML = `<h3>Libros publicados hace más de 2 años:</h3>${booksOld.map(libro => {
        return `<div class="highlight">${libro.title}</div>`;
    }).join('')}`;
}

// 4. Nombres de los autores y número de libros que han escrito
function showAuthorsAndCount() {
    const authorCount = {};

    libros.forEach(libro => {
        libro.authors.forEach(author => {
            authorCount[author] = (authorCount[author] || 0) + 1;
        });
    });

    let listItems = '';
    for (const author in authorCount) {
        listItems += `<li>${author}: ${authorCount[author]} libro(s)</li>`;
    }
    outputDiv.innerHTML = `<h3>Autores y número de libros:</h3><ul>${listItems}</ul>`;
}


// 5. Títulos de los libros leídos, ordenados por fecha de publicación
function showReadBooksOrdered() {
    const readBooks = libros.filter(libro => libro.read).sort((a, b) => new Date(a.published) - new Date(b.published));
    outputDiv.innerHTML = `<h3>Libros leídos ordenados:</h3>${readBooks.map(libro => {
        return `<div class="highlight">${libro.title} (${libro.published})</div>`;
    }).join('')}`;
}
