const boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('Click~!');
  boxEl.classList.add('active');
  let isContains = boxEl.classList.contains('active');
  console.log(isContains);

  boxEl.classList.remove('active');
  isContains = boxEl.classList.contains('active');
  console.log(isContains);
});
