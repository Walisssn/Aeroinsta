const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const modal = document.querySelector('.modal');
const modalImage = modal?.querySelector('img');
const modalTitle = modal?.querySelector('.modal-title');
const modalClose = modal?.querySelector('.modal-close');

const portfolioItems = document.querySelectorAll('.portfolio-item');

if (modal && modalImage && modalTitle && modalClose) {
  portfolioItems.forEach((item) => {
    item.addEventListener('click', () => {
      const image = item.dataset.image;
      const title = item.dataset.title;
      modalImage.src = image;
      modalTitle.textContent = title;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
  };

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
