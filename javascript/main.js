const boxEls = document.querySelectorAll('.box');

boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`order-${index + 1}`);
  boxEl.textContent = `new content ${index}`;
  // console.log(index, boxEl);
});

boxEls.forEach((boxEl, index) => {
  console.log(boxEl.classList);
  console.log(boxEl.className);
  if (boxEl.classList.contains('active')) {
    console.log(`here! ${index}`);
  }
});
