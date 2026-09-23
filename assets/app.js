document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Плавный функционал аккордеонов (раскрытие инструкций и FAQ)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });

  // 2. Живой поиск по всем инструкциям и FAQ
  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.accordion-item');

      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(val)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 3. Плавная работа модального окна заявок
  const modal = document.getElementById('request-modal');
  const openBtns = document.querySelectorAll('.js-open-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const form = document.getElementById('request-form');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = 'none', 300);
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Заявка успешно отправлена!');
      form.reset();
      closeModal();
    });
  }
});
