// Init Scores
let userScore = 0;
let computerScore = 0;
let maxScore = 5;

// DOM Elements
const user_score = document.querySelector('.user-score');
const computer_score = document.querySelector('.computer-score');
const result = document.querySelector('.result > p');
const scoreBoard = document.querySelector('.score-board');

// Finish This Function
// const allResults = Array.from(document.querySelectorAll('.result > p'));
// console.log(allResults);
// function changeResult(say) {
//   allResults.forEach((result) => {
//     result.innerHTML = say;
//   });
// }
// 
// changeResult();


// Pop Up
const popUp = document.querySelector('.pop-up');
const message = document.querySelector('.message');
const popUpBtn = document.querySelector('.pop-up-btn');

popUpBtn.addEventListener('click', function() {
  document.location.reload(true);
});

// Images
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


// Get all choices on the page and add events to all with forEach();
const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
  choice.addEventListener('transitionend', removeTransition);
});

// After when the transition end we remove class!
function removeTransition(e) {
  // propertyName it is a proterty for transitionend Object
  if(e.propertyName !== 'transform') return;
  this.classList.remove('green-glow', 'red-glow', 'gray-glow');
}


function userWin() {
  if(maxScore === userScore) {
      userScore = 0;
      computerScore = 0;
      user_score.classList.add('winner');
      result.innerHTML = `Your score is ${maxScore} You Winnnnn :)`;
      popUp.style.display = 'flex';
      message.innerHTML = `Congratulations You Win <i class='far fa-smile' style='font-size:28px'></i>`;
      result.innerHTML = '';
  } else {
    user_score.classList.remove('winner');
  }
}

function computerWin() {
  if(maxScore === computerScore) {
    computerScore = 0;
    userScore = 0;
    computer_score.classList.add('loser');
    result.innerHTML = `You Lost :(`;
    popUp.style.display = 'flex';
    message.innerHTML = `Sorry Computer Win You Lose <i class='far fa-grimace' style='font-size:28px'></i>`;
    result.innerHTML = '';
  } else {
    computer_score.classList.remove('loser');
  }
}



// Random Computer Choice
function computerChoices() {
  const choices = ['r', 'p', 's'];
  const rundomNumber = Math.floor(Math.random() * choices.length);
  return choices[rundomNumber];
}

// Output Word
function word(letter) {
  if(letter === 'r') return 'Rock';
  if(letter === 'p') return 'Paper';
  return 'Scissors';
}

// You Win
function win(userChoice, computerChoice) {
  userScore++;
  user_score.innerHTML = userScore;
  computer_score.innerHTML = computerScore;
  result.innerHTML = `${word(userChoice)} <i class='far fa-smile' style='font-size:28px'></i> beats ${word(computerChoice)} <i class="fas fa-robot" style='font-size:28px'></i> You Win! :)`;
  setAnimation(userChoice, 'green-glow');
  userWin();
}

// You Lost
function lose(userChoice, computerChoice) {
  computerScore++;
  user_score.innerHTML = userScore;
  computer_score.innerHTML = computerScore;
  result.innerHTML = `${word(userChoice)} <i class='far fa-grimace' style='font-size:28px'></i> loses to ${word(computerChoice)} <i class="fas fa-robot" style='font-size:28px'></i> You Lost... :(`;
    
  setAnimation(userChoice, 'red-glow');
  computerWin();
}

// Draw
function draw(userChoice, computerChoice) {
  result.innerHTML = `${word(userChoice)} <i class='far fa-meh' style='font-size:28px'></i> It's Draw ${word(computerChoice)} <i class="fas fa-robot" style='font-size:28px'></i> Draw!`;
  setAnimation(userChoice, 'gray-glow');
}



// You can use setTimeout function this is good but if you will want change transition timer in css you also need change timer in setTimeout!

function setAnimation(userChoice, addClass) {
  const user_choice = document.getElementById(userChoice);
  user_choice.classList.add(addClass);
  // setTimeout(() => user_choice.classList.remove(addClass), 500);
}



// Check User Choice and Computer Choice
function game(userChoice) {
  //Here We get random value from an array!
  const computerChoice = computerChoices();
  // console.log(computerChoice);
  
  switch(userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
    default:
      break;
  }
}

// Event Listeners
// I use callBack function inside event function because we have aurguments
function init() {
  
  rock.addEventListener('click', function() {
    game('r');
  });
  
  paper.addEventListener('click', function() {
    game('p');
  });
  
  scissors.addEventListener('click', function() {
    game('s');
  });
}

init();


// const App = {
// 
// }













// Как все работает :)

// Первым делом я создаю переменные которые будут учавствовать в приложении! Две переменных которые счетчики, увеличивающие значения (использовать обязательно let или var так как значения в процессе будут меняться)! 
// Далее DOM элементы и сохраняю их в Переменных для дальнейшего использования.
// Далее создаю Функцию init() и вызываю ее сразу же! - Что она делает: В нее я помещаю элементы DOM, а именно три Игровых элемента и к каждому из них я добавляю Событие (click) и внутри callback функии я вызваю другую callback функцию game() но уже с Аргументом! Всего 3 элемента у каждого Аргумент Строка, которую мы в дальнейшем будем сравнивать с Выбором Компьютера!

// Функция computerChoices() - Внутри Функции мы создаем массив с тремя значениями ['r', 'p', 's'], затем создаем переменную для хранения случайного значения из массива и возвращаем это значение! Теперь эта функция будет возвращать одно из значений Массива в случайном порядке!


// Функция win()


// Функция lose()


// Функция draw()



//Функция game() - Имеет один параметр (userChoice) и вызывается внутри событий в функии init()! - Что делает Функция: Внутри функции мы вызваем функцию computerChoices() и сохраняем результат вызова в переменную computerChoice - вызывать ее не нужно(в ней результат)! Идем вниз по функции и делаем проверку выборов User and Computer с помощью Конструкции Switch() которая заменят нам множество If() switch(userChoice, computerChoice) и сравниваем значения полученные при вызове game() и computerChoices()! Возможные варианты для победы(3), варианты проиграша(3), и варианты ничьей(3). В каждом из случаев вызываем функции win(), lose(), draw()!
