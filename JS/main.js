const buttonSearch = document.getElementById("searchPLayer");
const playerImage = document.getElementById("playerImage");
const playerId = document.getElementById("playerId");
const playerName = document.getElementById("playerName");
const playerFollowers = document.getElementById("playerFollowers");

buttonSearch.addEventListener("click", async () => {
  const playerData = await getUrlPlayer();
  insertDataOnScreen(playerData);
});

function getUserName() {
  return document.getElementById("nameInputPlayer").value.trim();
}

async function getUrlPlayer() {
  const userName = getUserName();
  if (!userName) {
    alert("Por favor, ingresa un nombre de usuario.");
    return null;
  }

  try {
    const urlPlayer = `https://api.chess.com/pub/player/${userName}`;
    const response = await fetch(urlPlayer);
    const data = await response.json();

    if (data.code === 404) {
      alert("Usuario no encontrado");
      return null;
    }

    playerImage.src = data.avatar ? data.avatar : "IMG/silueta.jpg";
    return {
      id: data.player_id || "NO ID FOUND",
      name: data.name || "NO NAME FOUND",
      followers: data.followers || 0,
    };
  } catch (error) {
    console.error("Error al obtener los datos del jugador:", error);
    alert("Hubo un error al obtener los datos.");
    return null;
  }
}

function insertDataOnScreen(playerInformation) {
  if (playerInformation) {
    playerId.innerText = `${playerInformation.id}`;
    playerName.innerText = `${playerInformation.name}`;
    playerFollowers.innerText = `${playerInformation.followers}`;
  } else {
    console.log("No se pudo obtener la información.");
  }
}
