'use strict';
// const text = document.getElementById('text');
// let content = 'hello';
// text.value = content;
// let i = 0;
// text.addEventListener('keydown', (e) => {
//   let arr = content.split('');
//   if (e.key === 'Backspace') {
//     content = content.substring(0, content.length - 1);
//     if (i > 0) {
//       i--;
//     }
//     console.log(i);
//     console.log(arr);
//   } else {
//     console.log(i);
//     arr[i] = e.key;
//     console.log(arr);
//     i++;
//     console.log(i);
//   }
//   text.value = arr.join('');
// });

const drop = document.querySelector('.dropdown');
const dropp = document.querySelector('.drop');
drop.addEventListener('click', () => {
  dropp.classList.toggle('visible');
  dropp.classList.toggle('hidden');
});
drop.addEventListener('mouseout', () => {
  dropp.classList.add('hidden');
  // dropp.classList.toggle('hidden');
});
