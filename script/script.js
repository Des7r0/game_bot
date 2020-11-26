'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const progGreeting = confirm('Привет!Не хочешь сыграть в игру?Нужно будет угадать число от 1 до 100');
const programm = function () {
const randomNum = Math.floor((Math.random() * 100)  + 1);

  function repeat() {
    let playerNum = prompt('Введите число от 1 до 100');
if (isNumber(playerNum)) {
  if (playerNum < randomNum) {
    alert('Загаданное число больше'); 
    repeat();
  } else if ( playerNum > randomNum ) {
    alert('Загаданное число меньше'); 
    repeat();
  } else { 
    alert('Winner winner chicken dinner'); 
  }
} else if (playerNum === null ) {
  alert('Игра окончена :('); 
} else if (!isNumber(playerNum)) {
  alert('Введите число'); 
  repeat();
  }
} 
repeat(); 
}

if (progGreeting === true) {
programm();
}
