const buttonModal = document.querySelector('.button-search');
const popup = document.querySelector('.modal');

buttonModal.addEventListener('click', function (evt) {
evt.preventDefault();
popup.classList.add('modal-unactive');
buttonModal.addEventListener('click', function () {
      if (popup.classList.contains('modal-unactive')) {
popup.classList.remove('modal-unactive');
      }
})
});
