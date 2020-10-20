const buttonModal = document.querySelector('.button-search');
const popup = document.querySelector('.modal-open');

buttonModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('modal-close');
    popup.classList.toggle('modal-open');
});