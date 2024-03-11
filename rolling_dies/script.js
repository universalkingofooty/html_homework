// Variables to keep track of game state
let player_current = 0; // Current score of the active player
let player0_score = 0; // Total score of player 0
let player1_score = 0; // Total score of player 1
let active_player = 0; // Indicates the active player (0 for player 0, 1 for player 1)

// Event listener for the "Roll Dice" button
document.getElementById('rolling').addEventListener('click', function () {
    // Generate a random number between 1 and 6 to simulate rolling a dice
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice); // Output the rolled dice value to the console
    // Update the dice image source to display the rolled value
    let v = document.querySelector('.dice').src = `dice-${dice}.png`;
    console.log(v); // Output the new image source to the console
    // Check if the rolled value is not 1
    if (dice !== 1) {
        // Add the rolled value to the current score of the active player
        player_current += dice;
        // Update the current score display for the active player
        document.getElementById(`current--${active_player}`).textContent = player_current;
    } else {
        // If the rolled value is 1, reset the current score of the active player to 0
        document.getElementById(`current--${active_player}`).textContent = 0;
        player_current = 0;
        // Switch to the next player
        active_player = active_player === 0 ? 1 : 0;
        // Toggle the 'player--active' class to visually indicate the active player
        document.querySelector('.player--0 ').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    }
});

// Event listener for the "Hold" button
document.getElementById('hold').addEventListener('click', function () {
    // Check which player is active
    if (active_player == 0) {
        // Update the total score of player 0 by adding the current score
        player0_score += player_current;
        // Update the total score display for player 0
        document.getElementById('score--0').textContent = player0_score;
        player_current = 0;
        // Reset the current score display for the active player
        document.getElementById(`current--${active_player}`).textContent = player_current;
        // Switch to the next player
        active_player = active_player === 0 ? 1 : 0;
        // Toggle the 'player--active' class to visually indicate the active player
        document.querySelector('.player--0 ').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        // Check if player 0 has reached the winning score (25 in this case)
        if (player0_score >= 25) {
            // Add 'player--winner' class to visually indicate player 0 as the winner
            document.querySelector('.player--0').classList.add('player--winner');
            // Hide the dice and buttons to prevent further gameplay
            document.getElementById("dice1").classList.add('display');
            document.getElementById("rolling").classList.add('display');
            document.getElementById("hold").classList.add('display');
        }
    } else {
        // Same operations as above for player 1
        player1_score += player_current;
        document.getElementById('score--1').textContent = player1_score;
        player_current = 0;
        document.getElementById(`current--${active_player}`).textContent = player_current;
        active_player = active_player === 0 ? 1 : 0;
        document.querySelector('.player--0 ').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        if (player1_score >= 25) {
            document.querySelector('.player--1').classList.add('player--winner');
            document.getElementById("dice1").classList.add('display');
            document.getElementById("rolling").classList.add('display');
            document.getElementById("hold").classList.add('display');
        }
    }
});

// Event listener for the "New Game" button
document.getElementById('new').addEventListener('click', function () {
    // Reload the page to start a new game
    location.reload();
});
//model block
document.querySelector('.overlay').classList.remove('hidden')

let closeModel = document.querySelector('.close-modal')

closeModel.addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
})

document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
})