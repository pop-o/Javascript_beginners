'use strict';
const text =
  'The ancient city was bathed in the golden hues of the setting sun, casting long shadows across the cobblestone streets. Birds chirped their final songs of the day, while the distant hum of the marketplace gradually faded into a tranquil silence. Towering above the city, the old castle stood as a sentinel of bygone eras, its weathered stones whispering tales of knights and kings. As twilight descended, the aroma of freshly baked bread wafted through the air, mingling with the scent of blooming jasmine. Children’s laughter echoed from the nearby park, their carefree joy a stark contrast to the solemnity of the ancient walls. The city, a harmonious blend of past and present, thrived with a rhythm uniquely its own, promising new adventures with each dawn.';
const textSplitChar = text.split('');
const textSplitWords = text.split(' ');
const testText = document.getElementById('testText');
const tryAgainBtn = document.getElementById('tryAgain');
const message = document.getElementById('message');
const timeEl = document.getElementsByName('time');
let con, count, num, timeV;

const getTime = () => {
  for (let i = 0; i < timeEl.length; i++) {
    if (timeEl[i].checked === true) {
      return Number(timeEl[i].value);
    }
  }
};

testText.textContent = textSplitWords.join(' ');

const typeEl = document.getElementsByName('type');
const getType = () => {
  for (let i = 0; i < typeEl.length; i++) {
    if (typeEl[i].checked === true) {
      return typeEl[i].value;
    }
  }
};
let timeO;
const validation = () => {
  let a, b;
  for (let i = 0; i < timeEl.length; i++) {
    if (timeEl[i].checked === true) a = true;
  }
  for (let i = 0; i < typeEl.length; i++) {
    if (typeEl[i].checked === true) b = true;
  }
  return a && b;
};
let valid;
for (let i = 0; i < timeEl.length; i++) {
  timeEl[i].addEventListener('click', function () {
    timeV = getTime();
    timeO = timeV * 1000;
  });
}
for (let i = 0; i < typeEl.length; i++) {
  typeEl[i].addEventListener('click', function () {
    con = getType();
  });
}
let timeOutId;
const box = document.querySelector('.box');
const time = function () {
  timeOutId = setTimeout(() => {
    count = 0;
    const inputText = box.value;
    console.log(inputText);
    if (con === 'Char') {
      const inputSplit = inputText.split('');
      for (let i = 0; i < inputSplit.length; i++) {
        if (inputSplit[i] === textSplitChar[i]) {
          count++;
        }
        num = count / (timeV / 60);
      }
      message.textContent = `Speed: ${num} characters per minute`;
    }
    if (con === 'Words') {
      const inputSplit = inputText.split(' ');
      for (let i = 0; i < inputSplit.length; i++) {
        if (inputSplit[i] === textSplitWords[i]) {
          count++;
        }
      }
      num = count / (timeV / 60);
      message.textContent = `Speed: ${num} words per minute`;
    }
    alert('timefinishes');
    box.disabled = true;
  }, timeO);
};

setInterval(() => {
  if (validation()) {
    box.disabled = false;
    box.addEventListener('click', time);
  } else {
    box.disabled = true;
  }
}, 1);

tryAgainBtn.addEventListener('click', function () {
  box.value = '';
  box.disabled = false;
  timeEl.forEach((element) => {
    element.checked = false;
  });
  typeEl.forEach((element) => {
    element.checked = false;
  });
  clearTimeout(timeOutId);
});
