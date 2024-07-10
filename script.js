const myLibrary = [
  {
    author: "Emily Bronte",
    title: "Wuthering Heights",
    numberOfPages: 348,
    hasBeenRead: true,
    coverImage: "01.png",
  },
  {
    author: "George Orwell",
    title: "1984",
    numberOfPages: 328,
    hasBeenRead: false,
    coverImage: "02.png",
  },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    numberOfPages: 309,
    hasBeenRead: true,
    coverImage: "03.png",
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    numberOfPages: 432,
    hasBeenRead: true,
    coverImage: "04.png",
  },
  {
    author: "Ernest Hemingway",
    title: "The Old Man and the Sea",
    numberOfPages: 127,
    hasBeenRead: false,
    coverImage: "05.png",
  },
];

function Book(author, title, numberOfPages, hasBeenRead, coverImage) {
  (this.author = author),
    (this.coverImage = coverImage),
    (this.title = title),
    (this.numberOfPages = numberOfPages),
    (this.hasBeenRead = hasBeenRead);
}

function addBookToLibrary() {
  // do stuff here
}

const bookshelfDiv = document.getElementById("bookshelf");

myLibrary.forEach((book) => {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");

  const coverImageElement = document.createElement("img");
  coverImageElement.src = `image/${book.coverImage}`;
  coverImageElement.alt = `${book.title} cover image`;
  coverImageElement.classList.add("cover-image");

  const authorElement = document.createElement("h4");
  authorElement.textContent = book.author;

  const titleElement = document.createElement("h3");
  titleElement.textContent = book.title;

  const pagesElement = document.createElement("p");
  pagesElement.textContent = `Pages: ${book.numberOfPages}`;

  const readStatusElement = document.createElement("p");
  readStatusElement.textContent = book.hasBeenRead ? "Read" : "Unread";
  readStatusElement.classList.add(book.hasBeenRead ? "read-status-read" : "read-status-unread");

  bookElement.appendChild(coverImageElement);
  bookElement.appendChild(authorElement);
  bookElement.appendChild(titleElement);
  bookElement.appendChild(pagesElement);
  bookElement.appendChild(readStatusElement);

  bookshelfDiv.appendChild(bookElement);
});

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  closeButton.addEventListener("click", () => {
    dialog.close();
  });