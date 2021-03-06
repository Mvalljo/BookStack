(async () => {
  try {
    // List of Categories from the NYT Best Seller
    const nytList = [
      "Combined Print and E-Book Fiction",
      "Combined Print and E-Book Nonfiction",
      "Hardcover Fiction",
      "Hardcover Nonfiction",
      "Trade Fiction Paperback",
      "Mass Market Paperback",
      "Paperback Nonfiction",
      "E-Book Fiction",
      "E-Book Nonfiction",
      "Hardcover Advice",
      "Paperback Advice",
      "Advice How-To and Miscellaneous",
      "Hardcover Graphic Books",
      "Paperback Graphic Books",
      "Manga",
      "Combined Print Fiction",
      "Combined Print Nonfiction",
      "Chapter Books",
      "Childrens Middle Grade",
      "Childrens Middle Grade E-Book",
      "Childrens Middle Grade Hardcover",
      "Childrens Middle Grade Paperback",
      "Paperback Books",
      "Picture Books",
      "Series Books",
      "Young Adult",
      "Young Adult E-Book",
      "Young Adult Hardcover",
      "Young Adult Paperback",
      "Animals",
      "Audio Fiction",
      "Audio Nonfiction",
      "Business Books",
      "Celebrities",
      "Crime and Punishment",
      "Culture",
      "Education",
      "Espionage",
      "Expeditions Disasters and Adventures",
      "Fashion Manners and Customs",
      "Food and Fitness",
      "Games and Activities",
      "Graphic Books and Manga",
      "Hardcover Business Books",
      "Health",
      "Humor",
      "Indigenous Americans",
      "Relationships",
      "Mass Market Monthly",
      "Middle Grade Paperback Monthly",
      "Paperback Business Books",
      "Family",
      "Hardcover Political Books",
      "Race and Civil Rights",
      "Religion Spirituality and Faith",
      "Science",
      "Sports",
      "Travel",
      "Young Adult Paperback Monthly"
    ];
    const listOption = document.querySelector("#nytList");
    // each category from the list is added to the dropdown
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
