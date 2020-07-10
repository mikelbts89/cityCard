const DOM = {};

function createCityCard() {
  DOM.cityCard = $("#cityForm");
  const mainCardDiv = $("<div></div>").addClass("card");
  mainCardDiv.id = "mainDiv";
  DOM.cityCard.append(mainCardDiv);
  const cityName = $("#cityName").val();
  const cityUrl = $("#cityUrl").val();
  const cityImg = $("<IMG/>", {
    src: cityUrl,
    class: "card-img-top",
  });
  const paragCityName = $("<p></p>");
  paragCityName.text(cityName);
  const likeBtn = $("<button>Like</button>").addClass(
    "btn btn-outline-primary"
  );
  const likeParag = $("<p></p>");

  cityImg.appendTo(mainCardDiv);
  mainCardDiv.append(paragCityName);
  mainCardDiv.append(likeBtn);
  likeParag.appendTo(mainCardDiv);

  function addLike() {
    let clicks = 1;
    likeBtn.on("click", () => {
      likeParag.html(clicks);
      clicks += 1;
    });
    console.log(clicks);
  }
  addLike();
}

function addCityForm() {
  const addBtn = $("#addBtn");
  addBtn.on("click", createCityCard);
}

addCityForm();
