const button = document.getElementById('button');
const divpopuptext = document.getElementById('divpopuptext');
button.addEventListener('click', () => {
  console.log(button.classList.contains('active'));
  if (divpopuptext.classList.contains('active')) {
    divpopuptext.classList.remove('active');
  } else {
    divpopuptext.classList.add('active');
  }
});