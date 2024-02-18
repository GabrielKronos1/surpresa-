const noOption = document.getElementById('no');
const gifContainer = document.getElementById('gif-container');

noOption.addEventListener('mouseover', () => {
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerHeight - 100);
  noOption.style.position = 'absolute';
  noOption.style.left = newX + 'px';
  noOption.style.top = newY + 'px';
});

noOption.addEventListener('click', () => {
  noOption.style.position = 'static';
});

const yesOption = document.getElementById('yes');

yesOption.addEventListener('click', () => {
  gifContainer.style.display = 'block';
});
