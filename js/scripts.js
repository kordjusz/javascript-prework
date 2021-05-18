
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper'); 
const buttonScissors = document.getElementById('button-scissors') ;

function buttonClicked(argButtonName) {
  // clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let computerMove, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      document.write('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      document.write('Wygrywasz! ');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      document.write('Wygrywasz! ');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      document.write('Wygrywasz! ');
    } else if (argPlayerMove == argComputerMove) {
      document.write('Remis! ');
    } else {
      document.write('Przegrywasz! ');
    }
    document.write('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    }

    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
  }

buttonRock.addEventListener('click', function(){
   buttonClicked('kamień');
  });

buttonPaper.addEventListener('click', function(){
   buttonClicked('papier');
  });

buttonScissors.addEventListener('click', function(){
   buttonClicked('nożyce')
  });