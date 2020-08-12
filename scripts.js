const button = document.getElementById('button');
const divpopuptext = document.getElementById('divpopuptext');
button.addEventListener('click', () => {
  if (divpopuptext.classList.contains('active')) {
    divpopuptext.classList.remove('active');
  } else {
    divpopuptext.classList.add('active');
  }
});