const buttonModal = document.querySelector('.button-search');
const popup = document.querySelector('.modal-open');

const DateIn = popup.querySelector('[name=date-arrival]');
const DateOut = popup.querySelector('[name=date-leaving]');
const NumberAdults = popup.querySelector('[name=adult]');
const NumberChildren = popup.querySelector('[name=child]');

buttonModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.classList.toggle('modal-close');
    popup.classList.toggle('modal-open');
});

popup.addEventListener('submit', function (evt) {
  if (!DateIn.value || !DateOut.value || !NumberAdults.value || !NumberChildren.value) {
  evt.preventDefault();
  popup.classList.remove('modal-error');
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add('modal-error');
  }
});
