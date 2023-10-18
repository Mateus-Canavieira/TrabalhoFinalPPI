var books = [
    { title: 'Dom Quixote', author: 'Miguel de Cervantes', summary: 'Um cavaleiro enlouquecido e seu fiel escudeiro viajam pela Espanha.', image:'https://www.revan.com.br/resizer/view/300/300/false/true/-591.jpg'},
    { title: '1984', author: 'George Orwell', summary: 'Um homem luta contra um governo totalitário que controla o pensamento e a realidade.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3V7SrhEOv_drWN3H254qOW8U53psHHBeirQ&usqp=CAU'},
    { title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', summary: 'A história da família Buendía ao longo de várias gerações em Macondo.',image:'https://www.infoescola.com/wp-content/uploads/2013/08/cem-anos-solidao.jpg' },
    { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', summary: 'Uma jornada épica para destruir um anel que concede poder absoluto.', image: 'https://i.pinimg.com/originals/a8/62/52/a86252731bba92d44bf0a3040e0b03db.png'},
    { title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', summary: 'As aventuras de um jovem bruxo em sua jornada pela escola de magia de Hogwarts.', image:'https://kanto.legiaodosherois.com.br/w414-h414-q95/wp-content/uploads/2015/12/8850bda4cbef1ce234f9fdad1fa717c9.png.webp' }
];

// Função para buscar livros por nome ou número
function searchBooks() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Limpa resultados anteriores

    // Filtra os livros com base na entrada do usuário
    var filteredBooks = books.filter(function (book, index) {
        return book.title.toLowerCase().includes(searchInput) ||
            (index + 1).toString() === searchInput;
    });

    // Exibe os resultados na página
    filteredBooks.forEach(function (book, index) {
        var bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<h3>${index + 1}. ${book.title}</h3>
                                     <p><strong>Autor:</strong> ${book.author}</p>
                                     <p><strong>Resumo:</strong> ${book.summary}</p>
                                     <img src="${book.image}" alt="${book.title}" style="max-width: 200px; max-height: 300px;">`;
        bookList.appendChild(bookDiv);
    });
}