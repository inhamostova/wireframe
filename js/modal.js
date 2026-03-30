const refs = {
  btnModalOpen: document.querySelector('[data-modal-open]'),
  btnModalClose: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-backdrop]'),
  body: document.querySelector('body'),
};

console.log(refs);

function toggleClass() {
  refs.backdrop.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}

refs.btnModalOpen.addEventListener('click', toggleClass);
refs.btnModalClose.addEventListener('click', toggleClass);
