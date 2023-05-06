let ratings = document.querySelectorAll('li');
let value = 0;

ratings.forEach(item => {
  item.addEventListener('click', () => {
      ratings.forEach(item => {
        item.style.backgroundColor = 'hsla(0, 0%, 100%, 8%)';
        item.style.color = 'hsl(217, 12%, 63%)';
      });
    item.style.backgroundColor = 'hsl(216, 12%, 54%)';
    item.style.color = 'hsl(0, 0%, 100%)';
    value = item.value;
  });
});

let button = document.querySelector('button');

button.addEventListener('click', () => {
  // console.log('Button clicked!');
  document.querySelector('.start').classList.add('hidden');
  document.querySelector('.end').classList.remove('hidden');
  document.querySelector("#rate").innerHTML = value;
})
