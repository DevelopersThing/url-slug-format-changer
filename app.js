const form = document.querySelector('form');
const inputText = document.querySelector('#inputText');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputVal = inputText.value.trim().toLowerCase().replace(/\s+/g, '-');

  result.textContent = inputVal;
});
