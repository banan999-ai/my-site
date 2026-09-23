document.addEventListener('DOMContentLoaded', () => {

  // 1. Клики по аккордеонам (плавное открытие/закрытие)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      currentItem.classList.toggle('active');
    });
  });

  // 2. Поиск по элементам аккордеона
  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll('.accordion-item');

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 3. Управление модальным окном заявки
  const modal = document.getElementById('request-modal');
  const openBtns = document.querySelectorAll('.js-open-modal');
  const closeBtns = document.querySelectorAll('.js-close-modal');
  const form = document.getElementById('request-form');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Ваша заявка успешно отправлена!');
      form.reset();
      if (modal) modal.classList.remove('active');
    });
  }
});
