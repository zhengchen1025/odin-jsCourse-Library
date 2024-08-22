const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = document.querySelector("#confirmBtn");
const form = document.querySelector(".newBookForm");
const bookshelfDiv = document.getElementById("bookshelf");

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
  const newBook = new Book(
    document.getElementById("newAuthor").value,
    document.getElementById("newTitle").value,
    document.getElementById("newNumberOfPages").value,
    document.querySelector('input[name="readStatus"]:checked').id ===
      "newHasBeenRead",
    `${document.getElementById("newCoverImage").value}.png`
  );
  myLibrary.push(newBook);

  updateBookshelf();
  form.reset();
  dialog.close();
}

function updateBookshelf() {
  bookshelfDiv.innerHTML = "";

  myLibrary.forEach((book, index) => {
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
    readStatusElement.classList.add(
      book.hasBeenRead ? "read-status-read" : "read-status-unread"
    );
    readStatusElement.classList.add("readStatus");
    readStatusElement.addEventListener("click", () => toggleReadStatus(index));

    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = 'Del';
    removeBookBtn.classList.add('removeBookBtn');
    removeBookBtn.addEventListener('click', () => removeBook(index));

    bookElement.appendChild(coverImageElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(titleElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readStatusElement);
    bookElement.appendChild(removeBookBtn);

    bookshelfDiv.appendChild(bookElement);
  });
}

window.addEventListener("DOMContentLoaded", updateBookshelf);

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const selectedRadio = document.querySelector(
    'input[name="readStatus"]:checked'
  );

  const author = document.getElementById("newAuthor").value;
  const title = document.getElementById("newTitle").value;
  const pages = document.getElementById("newNumberOfPages").value;
  const read = selectedRadio.id === "newHasBeenRead" ? "Read" : "Unread";
  const cover = document.getElementById("newCoverImage").value;

  const newBook = new Book(author, title, pages, read, cover);

  addBookToLibrary();
  console.log(myLibrary);
});

confirmBtn.addEventListener("click", () => {
  if (form.validity) {
    addBookToLibrary();
  }
  else return
});

function showSelectedImage() {
  const selectedOption = document.getElementById("newCoverImage").value;
  const imageElement = document.getElementById("selectedImage");
  imageElement.src = `image/${selectedOption}.png`;
}

const readStatusEle = document.querySelectorAll(".readStatus");

readStatusEle.forEach((ele) => {
  ele.addEventListener("click", changeReadStatus);
});

function changeReadStatus() {
  if (readStatusEle.innerHTML === "Read") {
    readStatusEle.innerHTML = "Unread";
  } else {
    readStatusEle.innerHTML = "Read";
  }
}

function toggleReadStatus(index) {
  myLibrary[index].hasBeenRead = !myLibrary[index].hasBeenRead;
  updateBookshelf();
  console.log(myLibrary[index].hasBeenRead);
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    updateBookshelf();
}