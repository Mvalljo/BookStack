const listContentEl = document.querySelector("#list-content");
document.getElementById("nytList").addEventListener("change", (event) => {
  (async () => {
    try {
      const listName = event.target.value;
      switch (listName) {
      case "Combined Print and E-Book Fiction":
        listContentEl.textContent = "";
        document.location.replace("/print-ebook-fiction");
        break;
      case "Combined Print and E-Book Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/print-ebook-nonfiction");
        break;
      case "Hardcover Fiction":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-fiction");
        break;
      case "Hardcover Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-nonfiction");
        break;
      case "Trade Fiction Paperback":
        listContentEl.textContent = "";
        document.location.replace("/trade-fiction-paperback");
        break;
      case "Mass Market Paperback":
        listContentEl.textContent = "";
        document.location.replace("/mass-market-paperback");
        break;
      case "Paperback Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/paperback-nonfiction");
        break;
      case "E-Book Fiction":
        listContentEl.textContent = "";
        document.location.replace("/ebook-fiction");
        break;
      case "E-Book Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/ebook-nonfiction");
        break;
      case "Hardcover Advice":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-advice");
        break;
      case "Paperback Advice":
        listContentEl.textContent = "";
        document.location.replace("/paperback-advice");
        break;
      case "Advice How-To and Miscellaneous":
        listContentEl.textContent = "";
        document.location.replace("/advice-how-to-and-miscellaneous");
        break;
      case "Hardcover Graphic Books":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-graphic-books");
        break;
      case "Paperback Graphic Books":
        listContentEl.textContent = "";
        document.location.replace("/paperback-graphic-books");
        break;
      case "Manga":
        listContentEl.textContent = "";
        document.location.replace("/manga");
        break;
      case "Combined Print Fiction":
        listContentEl.textContent = "";
        document.location.replace("/combined-print-fiction");
        break;
      case "Combined Print Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/combined-print-nonfiction");
        break;
      case "Chapter Books":
        listContentEl.textContent = "";
        document.location.replace("/chapter-books");
        break;
      case "Childrens Middle Grade":
        listContentEl.textContent = "";
        document.location.replace("/children-middle-grade");
        break;
      case "Childrens Middle Grade E-Book":
        listContentEl.textContent = "";
        document.location.replace("/children-middle-grade-ebook");
        break;
      case "Childrens Middle Grade Hardcover":
        listContentEl.textContent = "";
        document.location.replace("/children-middle-grade-hardcover");
        break;
      case "Childrens Middle Grade Paperback":
        listContentEl.textContent = "";
        document.location.replace("/children-middle-grade-paperback");
        break;
      case "Paperback Books":
        listContentEl.textContent = "";
        document.location.replace("/paperback-books");
        break;
      case "Picture Books":
        listContentEl.textContent = "";
        document.location.replace("/picture-books");
        break;
      case "Series Books":
        listContentEl.textContent = "";
        document.location.replace("/series-books");
        break;
      case "Young Adult":
        listContentEl.textContent = "";
        document.location.replace("/young-adult");
        break;
      case "Young Adult E-Book":
        listContentEl.textContent = "";
        document.location.replace("/young-adult-ebook");
        break;
      case "Young Adult Hardcover":
        listContentEl.textContent = "";
        document.location.replace("/young-adult-hardcover");
        break;
      case "Young Adult Paperback":
        listContentEl.textContent = "";
        document.location.replace("/young-adult-paperback");
        break;
      case "Animals":
        listContentEl.textContent = "";
        document.location.replace("/animals");
        break;
      case "Audio Fiction":
        listContentEl.textContent = "";
        document.location.replace("/audio-fiction");
        break;
      case "Audio Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/audio-nonfiction");
        break;
      case "Business Books":
        listContentEl.textContent = "";
        document.location.replace("/business-books");
        break;
      case "Celebrities":
        listContentEl.textContent = "";
        document.location.replace("/celebrities");
        break;
      case "Crime and Punishment":
        listContentEl.textContent = "";
        document.location.replace("/crime-and-punishment");
        break;
      case "Culture":
        listContentEl.textContent = "";
        document.location.replace("/culture");
        break;
      case "Education":
        listContentEl.textContent = "";
        document.location.replace("/education");
        break;
      case "Espionage":
        listContentEl.textContent = "";
        document.location.replace("/espionage");
        break;
      case "Expeditions Disasters and Adventures":
        listContentEl.textContent = "";
        document.location.replace("/exp-dis-and-adv");
        break;
      case "Fashion Manners and Customs":
        listContentEl.textContent = "";
        document.location.replace("/fashion-man-and-cust");
        break;
      case "Food and Fitness":
        listContentEl.textContent = "";
        document.location.replace("/food-and-fitness");
        break;
      case "Games and Activities":
        listContentEl.textContent = "";
        document.location.replace("/games-and-activities");
        break;
      case "Graphic Books and Manga":
        listContentEl.textContent = "";
        document.location.replace("/graphic-books-and-manga");
        break;
      case "Hardcover Business Books":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-business");
        break;
      case "Health":
        listContentEl.textContent = "";
        document.location.replace("/health");
        break;
      case "Humor":
        listContentEl.textContent = "";
        document.location.replace("/humor");
        break;
      case "Indigenous Americans":
        listContentEl.textContent = "";
        document.location.replace("/indigenous-americans");
        break;
      case "Relationships":
        listContentEl.textContent = "";
        document.location.replace("/relationships");
        break;
      case "Mass Market Monthly":
        listContentEl.textContent = "";
        document.location.replace("/mass-market-monthly");
        break;
      case "Middle Grade Paperback Monthly":
        listContentEl.textContent = "";
        document.location.replace("/middle-grade-paperback-monthly");
        break;
      case "Paperback Business Books":
        listContentEl.textContent = "";
        document.location.replace("/paperback-business");
        break;
      case "Family":
        listContentEl.textContent = "";
        document.location.replace("/family");
        break;
      case "Hardcover Political Books":
        listContentEl.textContent = "";
        document.location.replace("/hardcover-political");
        break;
      case "Race and Civil Rights":
        listContentEl.textContent = "";
        document.location.replace("/race-and-civil-right");
        break;
      case "Religion Spirituality and Faith":
        listContentEl.textContent = "";
        document.location.replace("/religion-spirit-and-faith");
        break;
      case "Science":
        listContentEl.textContent = "";
        document.location.replace("/science");
        break;
      case "Sports":
        listContentEl.textContent = "";
        document.location.replace("/sports");
        break;
      case "Travel":
        listContentEl.textContent = "";
        document.location.replace("/travel");
        break;
      case "Young Adult Paperback Monthly":
        listContentEl.textContent = "";
        document.location.replace("/young-adult-paperback-monthly");
        break;
      default:
        break;
      }
    } catch (err) {
      console.error(err);
    }
  })();
});
