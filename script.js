let c = Math.trunc(Math.random() * 100) + 1;
// let c = 1;
let count = 100;
let flag = 1;
let high = 0;

document.querySelector('.check').addEventListener('click', function () {
  let find = document.querySelector('.guess').value;
  if (!find) {
    document.querySelector('.message').textContent = '🤨 Enter something';
  } else if (find == c) {
    if (flag) {
      high = count;
    } else {
      if (high < count) high = count;
    }
    document.querySelector('.number').textContent = c;
    document.querySelector('.highscore').textContent = high;
    document.querySelector('.message').textContent =
      '🎉🥂🥳 Correct Number!🎀🎀';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (Math.abs(find - c) < 5) {
    count--;
    document.querySelector('.score').textContent = count;
    if (find - c > 0)
      document.querySelector(
        '.message'
      ).textContent = `😒 Whoops Extremely close⬆️`;
    else
      document.querySelector('.message').textContent =
        '😒 Whoops Extremely close⬇️!';
  } else if (Math.abs(find - c) < 20) {
    count--;
    document.querySelector('.score').textContent = count;
    if (find - c > 5)
      document.querySelector('.message').textContent = '😕Somewhat close⬆️';
    else document.querySelector('.message').textContent = '😕Somewhat close⬇️';
  } else if (Math.abs(find - c) > 20) {
    document.querySelector('.message').textContent =
      '😑 Try with other numbers';
  }
  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'black';
    count = 100;
    document.querySelector('.score').textContent = count;
    document.querySelector('.message').textContent = 'Start guessing ...🤔🤔🤔';
    document.querySelector('.guess').value = '';
    find = document.querySelector('.guess').value;
    document.querySelector('.number').textContent = '?';
  });
});
