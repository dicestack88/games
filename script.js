gamesnumber = 0

let allGames = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    allGames = data.games;
    renderGames(allGames);
  })
  .catch(error => console.error('Error loading games:', error));

function renderGames(games) {
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = '';

  games.forEach(game => {
    gamesnumber += 1

    const gamesnumberlabel = document.getElementById("gamesnumber")

    gamesnumberlabel.innerHTML = "Games: " + gamesnumber

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

fetch('https://api.github.com/repos/iammister1/unblocked-games-21/commits')
  .then(response => response.json())
  .then(data => {
      const latestCommit = data[0].commit.message;
      document.getElementById('updates').textContent = `Latest update: ${latestCommit}`;
    })
    .catch(error => {
      document.getElementById('latest-commit').textContent = 'Failed to load commit message.';
      console.error(error);
    });

