const bestSellerList = document.getElementById("list-text");
const listContentEl = document.querySelector("#list-content");

function printResults (resultObj) {
  console.log(resultObj);

  const listGroupEl = document.createElement("ol");
  listGroupEl.classList.add("list-group");
  listGroupEl.classList.add("list-group-numbered");

  for (let i = 0; i < 10; i++) {
    const listGroupItemEl = document.createElement("li");
    listGroupItemEl.classList.add("list-group-item");
    listGroupItemEl.innerHTML =
      resultObj.books[i].title + " by " + resultObj.books[i].author + "<br/>";
    listGroupEl.append(listGroupItemEl);
    listContentEl.append(listGroupEl);
  }
}

document.getElementById("nytList").addEventListener("change", (event) => {
  (async () => {
    try {
      const listName = event.target.value;
      console.log(listName);
      const apiKey = process.env.DB_APIKEY;
      const res = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/" +
          listName +
          ".json?api-key=" +
          apiKey
      );

      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }

      const user = await res.json();

      if (!user.num_results) {
        console.log("No results found!");
        listContentEl.innerHTML = "<h3>No results found</h3>";
      } else {
        listContentEl.textContent = "";
        printResults(user.results);
      }
      bestSellerList.textContent = user.results.list_name;
      console.log("Best Sellers List Name: " + user.results.list_name);
      for (let i = 0; i < 10; i++) {
        console.log("Title: " + user.results.books[i].title);
        console.log("Author: " + user.results.books[i].author);
      }
    } catch (err) {
      console.error(err);
    }
  })();
});
