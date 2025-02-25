let urlPlayer = "https://api.chess.com/pub/player/hikaru";
const buttonSearch = document.getElementById("searchPLayer");
const playerImage = document.getElementById("playerImage");
const playerId = document.getElementById("playerId");
const playerName = document.getElementById("playerName");
const playerFollowers = document.getElementById("playerFollowers");

buttonSearch.addEventListener("click", () => {
  getUrlPlayer();
});

function getUserName() {
  const userName = document.getElementById("nameInputPlayer").value;
  return userName;
}

async function getUrlPlayer() {
  const userName = getUserName();

  try {
    const urlPLayer = "https://api.chess.com/pub/player/" + userName;
    await fetch(urlPLayer)
      .then((response) => response.json())
      .then((data) => {
        if (data.avatar) {
          playerImage.src = data.avatar;
        } else {
          playerImage.src = data.avatar;
        }
        playerId.innerText = data.player_id;
        playerName.innerText = data.name;
        playerFollowers.innerText = data.followers;
      });
  } catch (error) {
    alert("need to get a solution when this error");
  }
}
