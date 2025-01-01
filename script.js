
"use strict";
//add our DOM
const openForm = document.getElementById("openForm");
const popupForm = document.getElementById("container-popup");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closebtn"); 

//open form 
openForm.addEventListener('click', () => {
  popupForm.style.display = 'block';
  overlay.style.display = 'none';
});

//close form
closeBtn.addEventListener('click', () => {
popupForm.style.display = 'none';
});



const myLibrary = [];

//the popup
class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
  } //end of constructor
  info = () =>{

    const addBtn = document.getElementById("add-btn");
  
    //save info when clicked 
    addBtn.addEventListener('click', () => {
    
      //get title, author and pages
      const theTitle = document.getElementById("title").value;
      const theAuthor = document.getElementById("author").value;
      const pageNumbers = document.getElementById("pages").value;
  
      //create a newBook instance with the entered values
      const newBook = new Book (theAuthor, theTitle, pageNumbers);
      //Add the book objects to the library array
      myLibrary.push(newBook);

       // Create the new book card dynamically
       const newBookCard = document.createElement('div');
       newBookCard.classList.add('book-card');
  
       // Create the  card section with title, author, pages
       const card1 = document.createElement('div');
       card1.classList.add('card');
       card1.innerHTML = `
         <p id="book-title">Book Title: ${theTitle}</p>
         <p id="book-author">The Author: ${theAuthor}</p>
         <p id="book-pages">Pages: ${pageNumbers}</p>
        
       `;
  const toggleSWitch = document.createElement('div');
  toggleSWitch.classList.add('toggle');
  toggleSWitch.innerHTML = `
        <label for="toggle" class="toggle-switch">
        <input type="checkbox" id="toggle">
        <span class="toggle-slider"></span>
        </label>
        <span id="status">Read the book</span>
  `;
  
  newBookCard.appendChild(card1);
  card1.appendChild(toggleSWitch);
  
  
  
        // Append the new book card to the main book-card
        document.querySelector('.book-card').appendChild(newBookCard);
    
  
        //clear the input field
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
  
        // Close the popup 
        popupForm.style.display = 'none';
    })
  }
}
const myBook = new Book();
myBook.info();



//push book to the library  array
function addBookToLibrary() {
myLibrary.push(Book);

}


//DOM FOR THE POPUP

/*
function Book(author, title, pages) {
  // the constructor...
this.author = author;
this.title = title;
this.pages = pages;
this.info = () =>{

  const addBtn = document.getElementById("add-btn");

  //save info when clicked 
  addBtn.addEventListener('click', () => {
  
    //get title, author and pages
    const theTitle = document.getElementById("title").value;
    const theAuthor = document.getElementById("author").value;
    const pageNumbers = document.getElementById("pages").value;

    //store in values
     this.title = theTitle;
     this.author = theAuthor;
     this.pages = pageNumbers;


     // Create the new book card dynamically
     const newBookCard = document.createElement('div');
     newBookCard.classList.add('book-card');

     // Create the  card section with title, author, pages
     const card1 = document.createElement('div');
     card1.classList.add('card');
     card1.innerHTML = `
       <p id="book-title">Book Title: ${theTitle}</p>
       <p id="book-author">The Author: ${theAuthor}</p>
       <p id="book-pages">Pages: ${pageNumbers}</p>
      
     `;
const toggleSWitch = document.createElement('div');
toggleSWitch.classList.add('toggle');
toggleSWitch.innerHTML = `
      <label for="toggle" class="toggle-switch">
      <input type="checkbox" id="toggle">
      <span class="toggle-slider"></span>
      </label>
      <span id="status">Read the book</span>
`;

newBookCard.appendChild(card1);
card1.appendChild(toggleSWitch);



      // Append the new book card to the main book-card
      document.querySelector('.book-card').appendChild(newBookCard);
  

      //clear the input field
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("pages").value = "";

      // Close the popup 
      popupForm.style.display = 'none';
  })
}

}
const myBook = new Book();
myBook.info();




function addBookToLibrary() {
  // do stuff here
}
*/
