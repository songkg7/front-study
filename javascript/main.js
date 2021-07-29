const boxEls = document.querySelectorAll('.box');

boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`order-${index + 1}`);
  boxEl.textContent = `new content ${index}`;
  console.log(index, boxEl);
});
