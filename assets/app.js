document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{}));
const search=document.querySelector('[data-search]');
if(search){const cards=[...document.querySelectorAll('[data-card]')];search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();cards.forEach(c=>c.classList.toggle('hidden',q&&!c.innerText.toLowerCase().includes(q)))})}
