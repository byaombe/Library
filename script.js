

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


//DOM FOR THE POPUP


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

    //display values
    const p1 = document.getElementById("book-title");
    const p2 = document.getElementById("book-author");
    const p3 = document.getElementById("book-pages");

    p1.textContent = "Title: " + this.title;
    p2.textContent = "Author: " + this.author;
    p3.textContent = "Pages: " + this.pages;

  
  })
}

}
const myBook = new Book();
myBook.info();




function addBookToLibrary() {
  // do stuff here
}
