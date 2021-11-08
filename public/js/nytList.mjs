(async () => {
  try {
    const apikey = process.env.DB_APIKEY;
    const res = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=" + apikey
    );

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    const nytList = [];
    const listOption = document.querySelector("#nytList");
    for (let i = 0; i < 59; i++) {
      const genreName = user.results[i].list_name;
      nytList.push(genreName);
    }
    console.log(nytList);
    for (let l = 0; l < nytList.length; l++) {
      const optionList = document.createElement("OPTION");
      optionList.setAttribute("value", nytList[l]);
      const t = document.createTextNode(nytList[l]);
      optionList.appendChild(t);
      listOption.appendChild(optionList);
    }
  } catch (err) {
    console.error(err);
  }
})();
