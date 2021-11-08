const searchFormEl = document.querySelector(".search");
const resultContentEl = document.querySelector("#result-content");
const resultTextEl = document.querySelector("#result-text");

function handleSearchFormSubmit (event) {
  event.preventDefault();

  const searchInputVal = document.querySelector("#search-input").value;
  console.log(searchInputVal);
  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }

  function printResults (resultObj) {
    console.log(resultObj);

    // set up `<div>` to hold result content
    const resultCard = document.createElement("div");
    resultCard.classList.add("card", "bg-light", "text-dark", "mb-3", "p-3");

    const resultBody = document.createElement("div");
    resultBody.classList.add("card-body");
    resultCard.append(resultBody);

    const titleEl = document.createElement("h3");
    titleEl.textContent = resultObj.volumeInfo.title;

    const bodyContentEl = document.createElement("p");
    bodyContentEl.innerHTML =
      "<strong>ISBN_13:</strong> " +
      resultObj.volumeInfo.industryIdentifiers[0].identifier +
      "<br/>";
    let author = resultObj.volumeInfo.authors;

    if (author === undefined) {
      console.log("No author");
      author = "";
    } else {
      console.log("author");
      author = resultObj.volumeInfo.authors[0];
    }
    if (author) {
      bodyContentEl.innerHTML += "<strong>Author:</strong> " + author + "<br/>";
    } else {
      bodyContentEl.innerHTML +=
        "<strong>Author:</strong> No author for this entry.";
    }

    if (resultObj.volumeInfo.description) {
      bodyContentEl.innerHTML +=
        "<strong>Description:</strong> " + resultObj.volumeInfo.description;
    } else {
      bodyContentEl.innerHTML +=
        "<strong>Description:</strong>  No description for this entry.";
    }

    const linkButtonEl = document.createElement("a");
    linkButtonEl.textContent = "Read More";
    linkButtonEl.setAttribute("href", resultObj.volumeInfo.infoLink);
    linkButtonEl.classList.add("btn", "btn-dark");

    resultBody.append(titleEl, bodyContentEl, linkButtonEl);

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
      console.log(user.totalItems);
      let searchResultNum = user.totalItems;
      if (user.totalItems >= 10) {
        console.log("too many");
        searchResultNum = 10;
      }
      if (user.totalItems === 0) {
        console.log("No results found!");
        resultContentEl.innerHTML = "<h3>No results found, search again!</h3>";
      } else {
        resultContentEl.textContent = "";
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
