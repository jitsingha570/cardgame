const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];

// Dynamically create rows for players
const scoreTable = document.getElementById('scoreTable');
players.forEach(player => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${player}</td>
    ${[1, 2, 3, 4].map(() => `
      <td><input type="number" class="call" min="0" /></td>
      <td><input type="number" class="points" min="0" /></td>
    `).join('')}
    <td class="total">0</td>
  `;
  scoreTable.appendChild(row);
});

// Calculate total points and determine the winner
function calculateScores() {
  const rows = scoreTable.querySelectorAll('tr');
  let maxPoints = -1;
  let winner = '';
  
  rows.forEach((row, index) => {
    let totalPoints = 0;
    const pointsInputs = row.querySelectorAll('.points');

    pointsInputs.forEach(input => {
      totalPoints += parseInt(input.value || '0', 10);
    });

    row.querySelector('.total').textContent = totalPoints;

    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      winner = players[index];
    }
  });

  document.getElementById('winnerDisplay').textContent = `Winner: ${winner} with ${maxPoints} points!`;
}
