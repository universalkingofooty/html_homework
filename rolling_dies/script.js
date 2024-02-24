
let player_current = 0

let player0_score = 0
let player1_score = 0
let active_player = 0



document.getElementById('rolling').addEventListener('click', function () {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    let v = document.querySelector('.dice').src = `dice-${dice}.png`
    console.log(v);
    if (dice !== 1) {
        player_current += dice;

        document.getElementById(`current--${active_player}`).textContent = player_current;


    } else {
        document.getElementById(`current--${active_player}`).textContent = 0;
        player_current = 0
        active_player = active_player === 0 ? 1 : 0;
        document.querySelector('.player--0 ').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active');



    }



})
document.getElementById('hold').addEventListener('click', function () {
    if (active_player == 0) {
        player0_score += player_current
        document.getElementById('score--0').textContent = player0_score;
        player_current = 0
        document.getElementById(`current--${active_player}`).textContent = player_current;
        active_player = active_player === 0 ? 1 : 0;
        document.querySelector('.player--0 ').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active');

        if (player0_score >= 100) {
            document.querySelector('.player--0').classList.add('player--winner')

            document.getElementById("dice1").classList.add('display');
           
            document.getElementById("rolling").classList.add('display');
            document.getElementById("hold").classList.add('display');
        }


    } else {
        player1_score += player_current
        document.getElementById('score--1').textContent = player1_score;
        player_current = 0
        document.getElementById(`current--${active_player}`).textContent = player_current;
        active_player = active_player === 0 ? 1 : 0;
        document.querySelector('.player--0 ').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active');

        if (player1_score >= 100) {
            document.querySelector('.player--1').classList.add('player--winner')

            document.getElementById("dice1").classList.add('display');
           
            document.getElementById("rolling").classList.add('display');
            document.getElementById("hold").classList.add('display');


        }





    }

})

document.getElementById('new').addEventListener('click', function () {

    location.reload();
})



