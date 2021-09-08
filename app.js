// Book Class: Represent a book 
class Book{
    constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
}
// Storage is kinda hard I will practice first and master about storage
// Storage
// class storage{
//     static getBook(){
//         let books;
//         if(localStorage.getItem("books") === null){
//             books = [];
//         }
//     }
//     static addBooks(){
        
//     }
//     static removeBook(){

//     }
// }
// UI Class: To handle Ui task 
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Renan',
                isbn: '123646'
            },
            {
                title: 'Book Two',
                author: 'jefferson',
                isbn: '26374745'
            }
        ];
    let books = StoredBooks;

    books.forEach((book) => UI.addbooktolist(book))
    }
    static addbooktolist(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class = 'remove'>X</td>
        `;
        list.appendChild(row)
    }
    // Ui delete

    static deleteBook(el){
        if(el.classList.contains('remove')){
            el.parentElement.remove();
        }
    }
    static clearValue(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Storage 

// Events: to display books 
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Events: Add a Book
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if(title === '', author === '', isbn === ''){
        alert('Please fill out all the fields')
    }else{
        // Instantiate 
    const book = new Book(title, author, isbn)
    UI.addbooktolist(book);
    UI.clearValue();
    }

    
})
// Events: Remove a books 

document.querySelector('#book-list').addEventListener('click' , (e) => {
   UI.deleteBook(e.target)
})
