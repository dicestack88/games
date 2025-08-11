gamesnumber = 0

let allGames = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    allGames = data.games;
    renderGames(allGames);
    countGames(allGames);
  })
  .catch(error => console.error('Error loading games:', error));

function countGames(games) {
  games.forEach(game => {
    gamesnumber += 1
    const gamecounter = document.getElementById("gamesnumber")

    gamecounter.innerHTML = "Games: " + gamesnumber
  });
}

function renderGames(games) {
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = '';

  games.forEach(game => {

    const gameElement = document.createElement('div');
    gameElement.classList.add('game');
    gameElement.innerHTML = `
      <a href="${game.link}"><img src="${game.image}" alt="${game.title}"></a>
      <a href="${game.link}">${game.title}</a>
    `;
    gameContainer.appendChild(gameElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = allGames.filter(game =>
      game.title.toLowerCase().includes(searchTerm)
    );
    renderGames(filteredGames);
  });
});