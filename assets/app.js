document.addEventListener('DOMContentLoaded', () => {
  // 1. Поиск по инструкциям и FAQ
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

  // 2. Управление модальным окном заявки
  const modal = document.getElementById('request-modal');
  const btnMain = document.getElementById('open-modal-btn-main');
  const btnHead = document.getElementById('open-modal-btn-head');
  const closeBtn = document.getElementById('close-modal-btn');
  const form = document.getElementById('request-form');

  const openModal = () => { if (modal) modal.style.display = 'block'; };
  const closeModal = () => { if (modal) modal.style.display = 'none'; };

  if (btnMain) btnMain.addEventListener('click', openModal);
  if (btnHead) btnHead.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 3. Отправка формы заявки
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Заявка успешно создана! Ответ поступит на указанные контактные данные.');
      form.reset();
      closeModal();
    });
  }
});
