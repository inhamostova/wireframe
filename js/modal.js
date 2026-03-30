const refs = {
  btnModalOpen: document.querySelector('[data-modal-open]'),
  btnModalClose: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-backdrop]'),
  body: document.querySelector('body'),
};

refs.btnModalOpen.addEventListener('click', toggleClass);
refs.btnModalClose.addEventListener('click', toggleClass);

function toggleClass() {
  refs.backdrop.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}
