fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const gameContainer = document.getElementById('gameContainer');
        
        data.games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');
            gameElement.innerHTML = `
                <a href="${game.link}"><img src="${game.image}" alt="${game.title}"></a>
                <a href="${game.link}">${game.title}</a>
            `;
            gameContainer.appendChild(gameElement);
        });
    })
    .catch(error => console.error('Error loading games:', error));
