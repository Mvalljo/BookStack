const searchFormEl = document.querySelector(".search");
const resultContentEl = document.querySelector("#result-content");
const resultTextEl = document.querySelector("#result-text");

function handleSearchFormSubmit (event) {
  event.preventDefault();
  // Grabs users search result value
  const searchInputVal = document.querySelector("#search-input").value;
  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }
  // Goes through each book that search got out and prints the results as a card
  function printResults (resultObj) {
    // set up `<div>` to hold result content
    const resultCard = document.createElement("div");
    resultCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");
    // set up `<img>` to hold book cover image
    const resultImg = document.createElement("img");
    resultImg.classList.add("card-img-top", "imgResult");
    resultImg.src = resultObj.volumeInfo.imageLinks.smallThumbnail;
    resultCard.append(resultImg);
    // set up `<div>` to hold book information
    const resultBody = document.createElement("div");
    resultBody.classList.add("card-body");
    resultCard.append(resultBody);
    // set up `<h3>` to hold book title
    const titleEl = document.createElement("h3");
    titleEl.textContent = resultObj.volumeInfo.title;
    // set up `<p>` to hold book isbn
    const bodyContentEl = document.createElement("p");
    bodyContentEl.innerHTML =
      "<strong>ISBN_13:</strong> " +
      resultObj.volumeInfo.industryIdentifiers[0].identifier +
      "<br/>";
    // set author value to book author
    let author = resultObj.volumeInfo.authors;
    // Check if there is a value in author
    if (author === undefined) {
      console.log("No author");
      author = "";
    } else {
      console.log("author");
      author = resultObj.volumeInfo.authors[0];
    }
    // Check value that was set for author and display results corresponding to the value
    if (author) {
      bodyContentEl.innerHTML += "<strong>Author:</strong> " + author + "<br/>";
    } else {
      bodyContentEl.innerHTML +=
        "<strong>Author:</strong> No author for this entry.";
    }
    // Check the value that was set for the book description and display results corresponding to the value
    if (resultObj.volumeInfo.description) {
      bodyContentEl.innerHTML +=
        "<strong>Description:</strong> " + resultObj.volumeInfo.description;
    } else {
      bodyContentEl.innerHTML +=
        "<strong>Description:</strong>  No description for this entry.";
    }
    // set up `<a>` to hold book link for more information
    const linkButtonEl = document.createElement("a");
    linkButtonEl.textContent = "Read More";
    linkButtonEl.setAttribute("href", resultObj.volumeInfo.infoLink);
    linkButtonEl.classList.add("btn", "btn-dark");
    // Grab all book information and append them to the `<div>` that holds book information
    resultBody.append(titleEl, bodyContentEl, linkButtonEl);
    // Grab the book informaiton div and append in to the div card
    resultContentEl.append(resultCard);
  }

  (async () => {
    try {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" + searchInputVal
      );

      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      resultTextEl.textContent = "Showing results for " + searchInputVal;

      const user = await res.json();
      // Search results total item of books api got
      let searchResultNum = user.totalItems;
      // If total items is more than ten set number to ten
      if (user.totalItems >= 10) {
        console.log("too many");
        searchResultNum = 10;
      }
      // If there are no search results found display in page
      if (user.totalItems === 0) {
        console.log("No results found!");
        resultContentEl.innerHTML = "<h3>No results found, search again!</h3>";
      } else {
        // Else if there are set page to blank and display search results
        resultContentEl.textContent = "";
        // Each book from the search results is printed out as a card using function
        for (let i = 0; i < searchResultNum; i++) {
          printResults(user.items[i]);
        }
      }
    } catch (err) {
      console.error(err);
    }
  })();
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
