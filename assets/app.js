document.documentElement.classList.add('js');
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

/* полоска прокрутки */
const bar=document.createElement('div');bar.className='progress';document.body.prepend(bar);
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%'},{passive:true});

/* появление блоков + счётчики */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
  if(e.target.dataset.count){const el=e.target,to=+el.dataset.count;let n=0;const t=setInterval(()=>{n++;el.textContent=n;if(n>=to)clearInterval(t)},60)}
  io.unobserve(e.target)}),{threshold:.12});
$$('.reveal,[data-count]').forEach(el=>io.observe(el));

/* подсветка карточек за курсором */
$$('.card,.feature,.portal').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));

/* поиск */
const search=$('[data-search]');
if(search){const cards=$$('[data-card]');search.addEventListener('input',()=>{const q=search.value.toLowerCase().trim();cards.forEach(c=>c.classList.toggle('hidden',q&&!c.textContent.toLowerCase().includes(q)))})}

/* мобильное меню */
const menuBtn=$('.menu'),navLinks=$('.navlinks');
if(menuBtn&&navLinks){menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click',()=>{const o=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});
  navLinks.addEventListener('click',e=>{if(e.target.closest('a')){navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}})}

/* окно с инструкцией */
const openers=$$('[data-open]');
if(openers.length){
  const modal=document.createElement('div');modal.className='modal';modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><button class="modal-close" type="button" aria-label="Закрыть">✕</button><div class="num" data-m-num></div><h2 id="modal-title" data-m-title></h2><div class="modal-body" data-m-body></div></div>';
  document.body.appendChild(modal);
  const box=$('.modal-box',modal),closeBtn=$('.modal-close',modal);let last=null;
  const open=c=>{last=c;$('[data-m-num]',modal).textContent=$('.num',c).textContent;$('[data-m-title]',modal).textContent=$('h3',c).textContent;$('[data-m-body]',modal).innerHTML=$('.instr',c).innerHTML;
    modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';box.scrollTop=0;closeBtn.focus()};
  const close=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';last&&last.focus()};
  openers.forEach(c=>{c.addEventListener('click',e=>{if(!e.target.closest('a'))open(c)});c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(c)}})});
  closeBtn.addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('show'))close()});
}
