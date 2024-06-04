const all_inputs = document.querySelectorAll('.unorder_list li input');
const add_player = document.querySelector('.button_add_player');
const leaderboard = document.querySelector('.leaderboard');

let players = []; // Initialize the players array

add_player.addEventListener('click', () => {
  const firstName = all_inputs[0].value;
  const lastName = all_inputs[1].value;
  const country = all_inputs[2].value;
  const playScore = all_inputs[3].value;

  if (!firstName || !lastName || !country || !playScore) {
    alert('All fields are required');
    return;
  }

  const player = { firstName, lastName, country, playScore };
  players.push(player);
  renderLeaderboard();

  // Clear input fields
  all_inputs.forEach((input) => (input.value = ''));
});

function renderLeaderboard() {
  leaderboard.innerHTML = ''; // Clear the leaderboard

  players.forEach((player, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player-info';

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `Name: ${player.firstName} ${player.lastName}`;

    const countryDiv = document.createElement('div');
    countryDiv.textContent = `Country: ${player.country}`;

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = `Play Score: ${player.playScore}`;

    const buttonsDiv = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editPlayer(index));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deletePlayer(index));

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    playerDiv.appendChild(nameDiv);
    playerDiv.appendChild(countryDiv);
    playerDiv.appendChild(scoreDiv);
    playerDiv.appendChild(buttonsDiv);

    leaderboard.appendChild(playerDiv);
  });
}

function editPlayer(index) {
  const player = players[index];
  const newFirstName = prompt('Enter the new first name:');
  const newLastName = prompt('Enter the new last name:');
  const newscore= prompt('enter new score')
  const newcountry = prompt('enter new updated country')
  if (newFirstName && newLastName && newscore && newcountry) {
    player.firstName = newFirstName;
    player.lastName = newLastName;
    player.playScore=newscore
    player.country=newcountry
    renderLeaderboard();
  }
}

function deletePlayer(index) {
  players.splice(index, 1);
  renderLeaderboard();
}