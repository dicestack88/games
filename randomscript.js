fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const gameContainer = document.getElementById('gameContainer');
    const filteredGames = data.games.filter(game => game.group === "Random");

    filteredGames.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.classList.add('game');
      gameElement.innerHTML = `
        <a href="${game.link}"><img src="${game.image}" alt="${game.title}"></a>
        <a href="${game.link}">${game.title}</a>
      `;
      gameContainer.appendChild(gameElement);
    });
  })
  .catch(error => console.error('there was an error:', error));