'use strict';
//need to implement function taken from user
//manual function declaration:
//current function: e(x)-x-2
let func = function (x) {
  return Math.exp(x) - x - 2;
};

//function to cut decimal places from a number
const cut = function (number, decimalplaces) {
  return Number(number.toFixed(decimalplaces));
};

//function to convert given decimal to actual decimal places
//for example: 4 = 0.0001
const getDecimal = function (x) {
  switch (x) {
    case 1:
      return 0.1;
      break;
    case 2:
      return 0.01;
      break;
    case 3:
      return 0.001;
      break;
    case 4:
      return 0.0001;
      break;
    case 5:
      return 0.00001;
      break;
    case 6:
      return 0.000001;
      break;

    default:
      return 0;
      break;
  }
};

//on enter
document.querySelector('.enter').addEventListener('click', function () {
  document.querySelector('.bisection').style.visibility = 'visible';
  let a = Number(document.querySelector('.aValue').value);
  let b = Number(document.querySelector('.bValue').value);
  let decimal = Number(document.querySelector('.decimal').value);
  a = cut(a, decimal + 3);
  b = cut(b, decimal + 3);
  //calculate mid-point
  let c = cut((a + b) / 2, decimal + 3);
  //calcuate functional value
  let fc = cut(func(c), decimal + 3);
  let dec = getDecimal(decimal);
  //calculate difference to check for stopping condition
  let difference = Math.abs((a - b) / 2);
  let i = 0;
  let answer;
  while (true) {
    //insert new row containing calculated data
    const newRow = `<tr>
        <th>${i}</th>
        <td>${a}</td>
        <td>${b}</td>
        <td>${c}</td>
        <td>${fc}</td>
        <td>${difference}</td>
    </tr>`;
    document
      .querySelector('.bisection')
      .insertAdjacentHTML('beforeend', newRow);
    if (difference < dec) break; //stopping condition
    i++;
    fc > 0 ? (b = c) : (a = c);
    a = cut(a, decimal + 3);
    b = cut(b, decimal + 3);
    c = cut((a + b) / 2, decimal + 3);
    fc = cut(func(c), decimal + 3);

    difference = Math.abs((a - b) / 2);

    answer = c;
  }
  document.querySelector('.Answer').textContent = `Answer is :${answer}`;
});

//reset button
document.querySelector('.reset').addEventListener('click', function () {
  let len = document.querySelectorAll('.bisection tr').length;
  let x = 1;
  while (len !== 1) {
    document.querySelectorAll('.bisection tr')[x].remove();
    len--;
  }
});
//dark mode implement
document.querySelector('.lightMode').addEventListener('click', function () {
  document.querySelector('html').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
  for (let i = 0; i < document.querySelectorAll('nav ul a').length; i++) {
    document.querySelectorAll('nav ul a')[i].style.color = 'white';
  }
  document.querySelector('.lightMode').style.color = 'white';
  document.querySelector('.lightMode').style.backgroundColor = 'black';
  document.querySelector('.lightMode').textContent = 'Light Mode';
});
//toggling modes note implemented
