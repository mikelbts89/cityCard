const DOM = {};

function createCityCard() {
  DOM.cityCard = $("#cityForm");
  const mainCardDiv = $("<div></div>").addClass("card");
  DOM.cityCard.append(mainCardDiv);
  const cityName = $("#cityName").val();
  const cityUrl = $("#cityUrl").val();
  const cityImg = $("<IMG/>", {
    src: cityUrl,
    class: "card-img-top"
  });
  const paragCityName = $("<p></p>");
  paragCityName.css({
    "background-color": "lightblue",
    "font-size": "200%"
  })
  paragCityName.text(cityName);
  const likeBtn = $("<button>Like</button>").addClass("btn btn-outline-primary");
  const likeParag = $("<p></p>");
  likeParag.css({
    "font-size": "150%"
  })

  cityImg.appendTo(mainCardDiv);
  mainCardDiv.append(paragCityName);
  mainCardDiv.append(likeBtn);
  likeParag.appendTo(mainCardDiv);

  function addLike() {
    let clicks = 0;
    likeBtn.on("click", () => {
      setTimeout(() => {
        likeParag.html(clicks + "🔥");
      }, 2000)
      clicks += 1;
    });
  }
  addLike();
  $("#cityName").val("");
  $("#cityUrl").val("");
}

function addCityForm() {
  const addBtn = $("#addBtn");
  addBtn.on("click", createCityCard);
}

addCityForm();