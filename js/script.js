const buttonModal = document.querySelector('.button-search');
const popup = document.querySelector('.modal');

buttonModal.addEventListener('click', function (evt) {
evt.preventDefault();
popup.classList.toggle('modal-unactive');
popup.classList.toggle('modal');
}
);


