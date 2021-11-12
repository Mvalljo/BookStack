const listContentEl = document.querySelector("#list-content");
document.getElementById("nytList").addEventListener("change", (event) => {
  (async () => {
    try {
      const listName = event.target.value;
      switch (listName) {
      case "Combined Print and E-Book Fiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/print-ebook-fiction");
        break;
      case "Combined Print and E-Book Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/print-ebook-nonfiction");
        break;
      case "Hardcover Fiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-fiction");
        break;
      case "Hardcover Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-nonfiction");
        break;
      case "Trade Fiction Paperback":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/trade-fiction-paperback");
        break;
      case "Mass Market Paperback":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/mass-market-paperback");
        break;
      case "Paperback Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/paperback-nonfiction");
        break;
      case "E-Book Fiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/ebook-fiction");
        break;
      case "E-Book Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/ebook-nonfiction");
        break;
      case "Hardcover Advice":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-advice");
        break;
      case "Paperback Advice":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/paperback-advice");
        break;
      case "Advice How-To and Miscellaneous":
        listContentEl.textContent = "";
        document.location.replace(
          "/api/nytList/advice-how-to-and-miscellaneous"
        );
        break;
      case "Hardcover Graphic Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-graphic-books");
        break;
      case "Paperback Graphic Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/paperback-graphic-books");
        break;
      case "Manga":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/manga");
        break;
      case "Combined Print Fiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/combined-print-fiction");
        break;
      case "Combined Print Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/combined-print-nonfiction");
        break;
      case "Chapter Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/chapter-books");
        break;
      case "Childrens Middle Grade":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/children-middle-grade");
        break;
      case "Childrens Middle Grade E-Book":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/children-middle-grade-ebook");
        break;
      case "Childrens Middle Grade Hardcover":
        listContentEl.textContent = "";
        document.location.replace(
          "/api/nytList/children-middle-grade-hardcover"
        );
        break;
      case "Childrens Middle Grade Paperback":
        listContentEl.textContent = "";
        document.location.replace(
          "/api/nytList/children-middle-grade-paperback"
        );
        break;
      case "Paperback Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/paperback-books");
        break;
      case "Picture Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/picture-books");
        break;
      case "Series Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/series-books");
        break;
      case "Young Adult":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/young-adult");
        break;
      case "Young Adult E-Book":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/young-adult-ebook");
        break;
      case "Young Adult Hardcover":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/young-adult-hardcover");
        break;
      case "Young Adult Paperback":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/young-adult-paperback");
        break;
      case "Animals":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/animals");
        break;
      case "Audio Fiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/audio-fiction");
        break;
      case "Audio Nonfiction":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/audio-nonfiction");
        break;
      case "Business Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/business-books");
        break;
      case "Celebrities":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/celebrities");
        break;
      case "Crime and Punishment":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/crime-and-punishment");
        break;
      case "Culture":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/culture");
        break;
      case "Education":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/education");
        break;
      case "Espionage":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/espionage");
        break;
      case "Expeditions Disasters and Adventures":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/exp-dis-and-adv");
        break;
      case "Fashion Manners and Customs":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/fashion-man-and-cust");
        break;
      case "Food and Fitness":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/food-and-fitness");
        break;
      case "Games and Activities":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/games-and-activities");
        break;
      case "Graphic Books and Manga":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/graphic-books-and-manga");
        break;
      case "Hardcover Business Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-business");
        break;
      case "Health":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/health");
        break;
      case "Humor":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/humor");
        break;
      case "Indigenous Americans":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/indigenous-americans");
        break;
      case "Relationships":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/relationships");
        break;
      case "Mass Market Monthly":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/mass-market-monthly");
        break;
      case "Middle Grade Paperback Monthly":
        listContentEl.textContent = "";
        document.location.replace(
          "/api/nytList/middle-grade-paperback-monthly"
        );
        break;
      case "Paperback Business Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/paperback-business");
        break;
      case "Family":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/family");
        break;
      case "Hardcover Political Books":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/hardcover-political");
        break;
      case "Race and Civil Rights":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/race-and-civil-right");
        break;
      case "Religion Spirituality and Faith":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/religion-spirit-and-faith");
        break;
      case "Science":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/science");
        break;
      case "Sports":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/sports");
        break;
      case "Travel":
        listContentEl.textContent = "";
        document.location.replace("/api/nytList/travel");
        break;
      case "Young Adult Paperback Monthly":
        listContentEl.textContent = "";
        document.location.replace(
          "/api/nytList/young-adult-paperback-monthly"
        );
        break;
      default:
        break;
      }
    } catch (err) {
      console.error(err);
    }
  })();
});
