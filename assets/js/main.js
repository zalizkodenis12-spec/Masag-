'use strict';

// ===== Catalog data =====
const CATALOG = {
  services: [
    { id:'s1',  name:'Загальний масаж тіла',               price:1000, time:'1.5 год',    img:'assets/images/Знімок екрана 2026-07-28 154343.png',  desc:'Загальний масаж тіла — повне розслаблення м\'язів та відновлення після напруженого дня. Охоплює всі групи м\'язів.', tags:['масаж','тіло','релакс'] },
    { id:'s2',  name:'Класичний масаж тіла',               price:900,  time:'1 год 10 хв', img:'assets/images/studio1.png',  desc:'Класичний масаж — базова техніка для покращення кровообігу та зняття м\'язової напруги по всьому тілу.', tags:['масаж','класичний','тіло'] },
    { id:'s3',  name:'Зональний масаж тіла',               price:700,  time:'50 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Цільова робота з проблемними зонами: шия-комірцева зона, руки, грудний відділ або спина.', tags:['масаж','зональний'] },
    { id:'s4',  name:'Антицелюлітний масаж',               price:900,  time:'1 год',      img:'assets/images/master1.png',                             desc:'Інтенсивний вплив для корекції фігури та зменшення целюліту. Покращує лімфодренаж.', tags:['масаж','антицелюліт','корекція'] },
    { id:'s5',  name:'Wood-масаж',                         price:900,  time:'1 год',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Wood-масаж дерев\'яними інструментами — глибока опрацьовування тканин, ефективна корекція фігури.', tags:['масаж','wood','корекція'] },
    { id:'s6',  name:'Gummy + Wood масаж',                 price:1000, time:'1 год',      img:'assets/images/studio1.png',   desc:'Комбінований комплекс Gummy + Wood масаж — поєднання унікальних технік для максимального результату.', tags:['масаж','комплекс','wood'] },
    { id:'s7',  name:'Масаж обличчя',                      price:800,  time:'1 год',      img:'assets/images/master1.png',   desc:'Масаж обличчя — покращення тонусу шкіри, ліфтинговий ефект, розслаблення мімічних м\'язів.', tags:['масаж','обличчя','ліфтинг'] },
    { id:'s8',  name:'Масаж обличчя + ліфтинг маска',     price:1000, time:'1 год',      img:'assets/images/master2.png',   desc:'Масаж обличчя з ліфтинговою маскою — подвійний ефект омолодження та підтягування шкіри.', tags:['масаж','обличчя','маска'] },
    { id:'s9',  name:'Стопи + гомілки',                    price:500,  time:'50 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Лікувальний масаж стоп та гомілок — зняття втоми, покращення кровообігу в нижніх кінцівках.', tags:['масаж','стопи','ноги'] },
    { id:'s10', name:'Лікувально-профілактичний масаж',    price:750,  time:'1 год',      img:'assets/images/studio1.png',   desc:'При сколіозі, артрозі, остеохондрозі, грижі, протрузії, відновленні після операцій.', tags:['лікувальний','профілактика','спина'] },
    { id:'s11', name:'Вісцеральний масаж (животик)',       price:600,  time:'50 хв',      img:'assets/images/master1.png',   desc:'Вісцеральний масаж живота — м\'яка робота з внутрішніми органами, покращення травлення та самопочуття.', tags:['масаж','вісцеральний'] },
    { id:'s12', name:'Тейпування тіла',                    price:200,  time:'—',          img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Кінезіологічне тейпування для фіксації, знеболення та покращення функції м\'язів.', tags:['тейпування'] },
    { id:'s13', name:'Обгортання + Пресотерапія',          price:1100, time:'1.5 год',    img:'assets/images/studio2.png',   desc:'Комплекс: обгортання з апаратним лімфодренажним масажем — максимальний детокс-ефект.', tags:['комплекс','пресотерапія','детокс'] },
    { id:'s14', name:'Авт. детокс-скрабування MILERY',    price:1200, time:'2 год',      img:'assets/images/wrap1.png',     desc:'Авторське сольове детокс-скрабування від бренду MILERY — глибоке очищення та зволоження шкіри.', tags:['обгортання','детокс','milery'] },
    { id:'s15', name:'Обгортання MAZAKY LEYLA',            price:2000, time:'2 год',      img:'assets/images/wrap2.png',     desc:'Ексклюзивне обгортання по унікальній методиці MAZAKY LEYLA — преміальна корекційна процедура.', tags:['обгортання','mazaky','преміум'] },
    { id:'s16', name:'Обгортання Green Health',            price:800,  time:'1.5 год',    img:'assets/images/studio2.png',   desc:'Обгортання на косметиці Green Health — детоксикуючі та лікувальні властивості для тіла.', tags:['обгортання','детокс'] },
    { id:'s17', name:'Обгортання PELOVIT-R',               price:1000, time:'1.5 год',    img:'assets/images/studio1.png',   desc:'Обгортання на кульницьких грязях PELOVIT-R — потужна детокс та лікувальна дія.', tags:['обгортання','pelovit'] },
    { id:'s18', name:'Бандажне обгортання PELO VIT-R',     price:1500, time:'2 год',      img:'assets/images/wrap1.png',     desc:'Бандажне обгортання PELO VIT-R з гелями для ефективного дренування та корекції фігури.', tags:['бандажне','обгортання'] },
    { id:'s19', name:'Антицелюлітне бандажне MILERY',      price:1500, time:'2 год',      img:'assets/images/wrap2.png',     desc:'Авторське антицелюлітне бандажне обгортання від MILERY — максимальний корекційний ефект.', tags:['бандажне','антицелюліт','milery'] },
    { id:'s20', name:'Дренажне бандажне MILERY',           price:1500, time:'2 год',      img:'assets/images/wrap1.png',     desc:'Авторське дренажне бандажне обгортання MILERY — виведення рідини, зменшення набряків.', tags:['бандажне','дренаж','milery'] },
    { id:'s21', name:'Обгортання FR-HAUT',                 price:1700, time:'2 год',      img:'assets/images/studio2.png',   desc:'Обгортання на FR-HAUT — інтенсивна програма корекції, ліфтингу та відновлення шкіри.', tags:['обгортання','ліфтинг'] },
    { id:'s22', name:'Гіпсотерапія',                       price:2200, time:'2 год',      img:'assets/images/wrap2.png',     desc:'Гіпсотерапія — найпотужніша процедура корекції проблемних зон. Видимий результат після першого сеансу.', tags:['гіпсотерапія','корекція'] },
    { id:'s23', name:'Парафінотерапія BRUNOVASSARI',       price:800,  time:'1.5 год',    img:'assets/images/studio1.png',   desc:'Парафінотерапія BRUNOVASSARI — глибоке зволоження, живлення та омолодження шкіри.', tags:['парафінотерапія','зволоження'] },
    { id:'s24', name:'Обгортання + Wood масаж',            price:1200, time:'2 год',      img:'assets/images/wrap1.png',     desc:'Комплекс: обгортання + Wood масаж — подвійна дія для корекції та дренажу.', tags:['комплекс','wood','обгортання'] },
    { id:'s25', name:'Пресотерапія',                       price:450,  time:'30–50 хв',   img:'assets/images/studio2.png',   desc:'Апаратний лімфодренажний масаж для виведення токсинів, зменшення набряків та целюліту.', tags:['апаратний','пресотерапія','лімфодренаж'] },
    { id:'s26', name:'Апаратний вібро масаж',              price:700,  time:'1 год',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Апаратний вібромасаж — ефективна альтернатива ручному масажу для розслаблення та корекції.', tags:['апаратний','вібромасаж'] },
    { id:'s27', name:'Міостимуляція (1 зона)',             price:200,  time:'20 хв',      img:'assets/images/studio1.png',   desc:'Електрична стимуляція м\'язів для тонусу, зміцнення та корекції без фізичних навантажень.', tags:['апаратний','міостимуляція'] },
    { id:'s28', name:'Карамельний масаж + обгортання',     price:1200, time:'120 хв',     img:'assets/images/wrap2.png',     desc:'Карамельний ліполіз: масаж + обгортання — розігріваючий комплекс для корекції фігури.', tags:['карамельний','ліполіз','комплекс'] },
    { id:'s29', name:'Карамельне обгортання + апаратний',  price:1200, time:'120 хв',     img:'assets/images/wrap1.png',     desc:'Карамельне обгортання з апаратним масажем — подвійна дія для розщеплення жиру.', tags:['карамельний','апаратний'] },
    { id:'s30', name:'Карамельний масаж',                  price:600,  time:'50 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Розігріваючий карамельний масаж для стимуляції обміну речовин та лімфодренажу.', tags:['карамельний','масаж'] },
    { id:'s31', name:'Карамельний пілінг',                 price:400,  time:'30 хв',      img:'assets/images/studio2.png',   desc:'М\'яке відлущування шкіри з ефектом ліполізу — готує шкіру до процедур обгортання.', tags:['карамельний','пілінг'] },
    { id:'s32', name:'Дитячий масаж (до 3 р.)',            price:600,  time:'30 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Ніжний масаж для малюків від 0 до 3 років — розвиток, зміцнення та здоров\'я.', tags:['дитячий','масаж'] },
    { id:'s33', name:'Дитячий масаж (до 11 р.)',           price:600,  time:'30 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Дитячий масаж для дітей до 11 років — профілактика та корекція постави.', tags:['дитячий','масаж'] },
    { id:'s34', name:'Дитячий масаж (від 11 р.)',          price:600,  time:'40 хв',      img:'assets/images/Знімок екрана 2026-07-28 154343.png',   desc:'Масаж для підлітків від 11 років — лікувальний та загальнозміцнюючий вплив.', tags:['дитячий','масаж'] },
  ],
  products: [
    { id:'p1', name:'MILERY Олія для тіла',  price:450, time:'—', img:'assets/images/logo.png', desc:'Преміальна олія для тіла від власного бренду MILERY. Зволожує та живить шкіру, надає їй сяяння та шовковистість. Натуральний склад, ніжний аромат. Ідеально підходить після масажу або обгортання.', tags:['товар','олія','milery','зволоження'] },
    { id:'p2', name:'MILERY Скраб для тіла', price:380, time:'—', img:'assets/images/logo.png', desc:'Ексфоліюючий скраб для тіла від бренду MILERY. М\'яко відлущує шкіру, надає гладкість та сяяння. Натуральний склад з морською сіллю та ефірними оліями. Готує шкіру до обгортань.', tags:['товар','скраб','milery','пілінг'] },
  ]
};

// ===== Cart =====
let cart = [];
try { cart = JSON.parse(localStorage.getItem('milery_cart') || '[]'); } catch(e) { cart = []; }

function saveCart() {
  localStorage.setItem('milery_cart', JSON.stringify(cart));
  updateCartBadges();
}

function addToCart(id) {
  const allItems = [...CATALOG.services, ...CATALOG.products];
  const item = allItems.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty = (existing.qty||1) + 1; }
  else { cart.push({ id, name: item.name, price: item.price, qty: 1 }); }
  saveCart();
  showToast(item.name);
}

function updateCartBadges() {
  const total = cart.reduce((s,i) => s + (i.qty||1), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.classList.toggle('visible', total > 0);
  });
}

function showToast(name) {
  const t = document.getElementById('cartToast');
  if (!t) return;
  t.textContent = `«${name.length>30? name.slice(0,30)+'…' : name}» — додано до кошика`;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 2600);
}

// ===== Catalog overlay =====
let currentCat = 'services';
const catOverlay  = document.getElementById('catalogOverlay');
const prodDetail  = document.getElementById('productDetail');
const catOvBody   = document.getElementById('catOvBody');
const catTitle    = document.getElementById('catOverlayTitle');
const catSearch   = document.getElementById('catSearch');

function openCatalog(cat) {
  currentCat = cat;
  catTitle.textContent = cat === 'services' ? 'Послуги' : 'Товари';
  document.body.style.overflow = 'hidden';
  renderCatalogItems(cat, '');
  catSearch.value = '';
  catOverlay.classList.add('open');
  catSearch.focus();
}

function closeCatalog() {
  catOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCatalogItems(cat, query) {
  const items = CATALOG[cat];
  const q = query.toLowerCase().trim();
  const filtered = q
    ? items.filter(i => i.name.toLowerCase().includes(q) || i.tags.some(t => t.includes(q)))
    : items;
  if (!filtered.length) {
    catOvBody.innerHTML = '<div class="cat-ov-empty">Нічого не знайдено 😔<br>Спробуйте інший запит</div>';
    return;
  }
  catOvBody.innerHTML = filtered.map(item => `
    <div class="catalog-item" data-id="${item.id}" role="button" tabindex="0" aria-label="${item.name}">
      <img class="catalog-item-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/лого.png'">
      <div class="catalog-item-body">
        <div>
          <div class="catalog-item-name">${item.name}</div>
          ${item.time !== '—' ? `<div class="catalog-item-time">⏱ ${item.time}</div>` : ''}
        </div>
        <div class="catalog-item-footer">
          <div class="catalog-item-price">${item.price} <small>₴</small></div>
          <button class="catalog-item-btn" data-add="${item.id}" aria-label="В кошик ${item.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            В кошик
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Item click → product detail
  catOvBody.querySelectorAll('.catalog-item').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('[data-add]')) return; // don't open if clicking add button
      openProduct(el.dataset.id);
    });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') openProduct(el.dataset.id); });
  });

  // Add to cart buttons
  catOvBody.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(btn.dataset.add);
      gsap.to(btn, { scale: 1.15, duration: 0.1, yoyo: true, repeat: 1 });
    });
  });
}

// ===== Product detail =====
function openProduct(id) {
  const allItems = [...CATALOG.services, ...CATALOG.products];
  const item = allItems.find(i => i.id === id);
  if (!item) return;
  const prodBody = document.getElementById('prodBody');
  prodBody.innerHTML = `
    <div class="prod-grid">
      <div class="prod-img-wrap">
        <img src="${item.img}" alt="${item.name}" onerror="this.src='assets/images/лого.png'">
      </div>
      <div class="prod-content">
        <div class="prod-tags">
          ${item.tags.map(t => `<span class="prod-tag">${t}</span>`).join('')}
        </div>
        <h2 class="prod-name">${item.name}</h2>
        ${item.time !== '—' ? `
        <div class="prod-time-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          <span>Тривалість: ${item.time}</span>
        </div>` : ''}
        <p class="prod-desc">${item.desc}</p>
        <div class="prod-price-row">
          <div class="prod-price">${item.price} <small>₴</small></div>
        </div>
        <button class="prod-add-btn" data-add="${item.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          В кошик
        </button>
      </div>
    </div>
  `;
  prodBody.querySelector('[data-add]').addEventListener('click', () => {
    addToCart(item.id);
    gsap.to('.prod-add-btn', { scale: 1.1, duration: 0.12, yoyo: true, repeat: 1 });
  });
  prodDetail.classList.add('open');
}

function closeProduct() {
  prodDetail.classList.remove('open');
}

// Events
document.getElementById('catBackBtn').addEventListener('click', closeCatalog);
document.getElementById('prodBackBtn').addEventListener('click', closeProduct);
catSearch.addEventListener('input', e => renderCatalogItems(currentCat, e.target.value));

// Catalog card clicks
document.querySelectorAll('.cat-card').forEach(card => {
  const open = () => openCatalog(card.dataset.cat);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
});

// Cart float → contacts scroll
document.getElementById('cartFloat').addEventListener('click', () => {
  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cartBtnHdr').addEventListener('click', () => {
  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
});

// Close overlays on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (prodDetail.classList.contains('open')) closeProduct();
    else if (catOverlay.classList.contains('open')) closeCatalog();
  }
});

// ===== Header scroll =====
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Burger =====
const burger    = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  burger.classList.remove('active');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// ===== Init on load =====
updateCartBadges();

// ===== GSAP Animations =====
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    document.querySelectorAll('.g-up,.g-left,.g-right,.g-in,.g-scale,.g-rot').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'none';
    });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // ─── Hero parallax ───
  gsap.to('#heroBgImg', {
    yPercent: 28, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.8 }
  });

  // ─── Hero sequence ───
  const heroTl = gsap.timeline({ delay: 0.15 });
  heroTl
    .fromTo('#heroBadge',   { opacity:0, y:28 },  { opacity:1, y:0, duration:0.7, ease:'power3.out' })
    .fromTo('#heroTitle',   { opacity:0, y:56 },  { opacity:1, y:0, duration:0.95, ease:'power3.out' }, '-=0.3')
    .fromTo('#heroSub',     { opacity:0, y:38 },  { opacity:1, y:0, duration:0.85, ease:'power3.out' }, '-=0.5')
    .fromTo('#heroActions', { opacity:0, y:24 },  { opacity:1, y:0, duration:0.75, ease:'power3.out' }, '-=0.45')
    .fromTo('#heroMeta',    { opacity:0 },         { opacity:1,       duration:0.7,  ease:'power2.out' }, '-=0.3');

  // ─── Logo float ───
  gsap.to('.logo-avatar', { y:-5, duration:2, ease:'sine.inOut', yoyo:true, repeat:-1 });

  // ─── Float cart entrance ───
  gsap.fromTo('.cart-float', { opacity:0, scale:0, rotate:-45 }, { opacity:1, scale:1, rotate:0, duration:0.8, delay:2.2, ease:'back.out(2)' });

  // helper – scroll-triggered reveal
  function reveal(el, vars, triggerEl) {
    return gsap.fromTo(el, vars.from, {
      ...vars.to,
      scrollTrigger: {
        trigger: triggerEl || el,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse'
      }
    });
  }

  // ─── Trust bar ───
  gsap.utils.toArray('#trust .trust-item').forEach((el,i) => {
    reveal(el, { from:{opacity:0,y:45}, to:{opacity:1,y:0,duration:0.7,delay:i*0.12,ease:'power2.out'} }, '#trust');
  });

  // ─── About photos ───
  gsap.utils.toArray('.about-photo').forEach((el,i) => {
    reveal(el, { from:{opacity:0,scale:0.82,y:32}, to:{opacity:1,scale:1,y:0,duration:0.85,delay:i*0.15,ease:'back.out(1.5)'} }, '.about-photos');
  });

  // ─── About content ───
  gsap.utils.toArray('.about-content > *').forEach((el,i) => {
    reveal(el, { from:{opacity:0,x:44}, to:{opacity:1,x:0,duration:0.7,delay:i*0.1,ease:'power2.out'} }, '.about-content');
  });

  // ─── Catalog section ───
  gsap.utils.toArray('.catalog-intro > *').forEach((el,i) => {
    reveal(el, { from:{opacity:0,y:32}, to:{opacity:1,y:0,duration:0.6,delay:i*0.1,ease:'power2.out'} }, '.catalog-intro');
  });
  gsap.utils.toArray('.cat-card').forEach((el,i) => {
    reveal(el, { from:{opacity:0,scale:0.88,y:48}, to:{opacity:1,scale:1,y:0,duration:0.85,delay:i*0.2,ease:'power3.out'} }, '.cat-cards');
  });

  // ─── Stats section ───
  const statsAnimated = { done: false };
  const statsTrigger = ScrollTrigger.create({
    trigger: '#stats',
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () => animateStats(),
    onLeave: () => resetStats(),
    onEnterBack: () => animateStats(),
    onLeaveBack: () => resetStats()
  });

  const statConfigs = [
    { circleId:'sc1', numId:'sn1', value:95,  max:100, format: v => Math.round(v) },
    { circleId:'sc2', numId:'sn2', value:100, max:100, format: () => '5.0' },
    { circleId:'sc3', numId:'sn3', value:100, max:100, format: v => Math.round(v * 6 / 100) },
    { circleId:'sc4', numId:'sn4', value:87,  max:100, format: v => Math.round(v * 500 / 87) },
  ];
  const circumference = 2 * Math.PI * 55; // r=55

  function animateStats() {
    gsap.utils.toArray('.stat-item').forEach((el,i) => {
      gsap.fromTo(el, { opacity:0,scale:0.82 }, { opacity:1,scale:1,duration:0.8,delay:i*0.15,ease:'back.out(1.4)',
        scrollTrigger:null });
    });
    statConfigs.forEach((s,i) => {
      const circle = document.getElementById(s.circleId);
      const numEl  = document.getElementById(s.numId);
      if (!circle || !numEl) return;
      const targetOffset = circumference * (1 - s.value / 100);
      gsap.fromTo(circle, { strokeDashoffset: circumference }, {
        strokeDashoffset: targetOffset, duration: 1.6, delay: i * 0.2, ease: 'power2.out',
        onUpdate: function() {
          const progress = (circumference - parseFloat(circle.style.strokeDashoffset || circumference)) / circumference;
          numEl.textContent = s.format(progress * s.value);
        },
        onComplete: () => { numEl.textContent = s.format(s.value); }
      });
    });
  }
  function resetStats() {
    statConfigs.forEach(s => {
      const circle = document.getElementById(s.circleId);
      const numEl  = document.getElementById(s.numId);
      if (circle) gsap.set(circle, { strokeDashoffset: circumference });
      if (numEl) numEl.textContent = '0';
    });
    gsap.utils.toArray('.stat-item').forEach(el => gsap.set(el, { opacity:0, scale:0.82 }));
  }

  // ─── Reviews ───
  gsap.utils.toArray('#reviews .section-head > *').forEach((el,i) => {
    reveal(el, { from:{opacity:0,y:24}, to:{opacity:1,y:0,duration:0.6,delay:i*0.1,ease:'power2.out'} }, '#reviews .section-head');
  });
  gsap.utils.toArray('.review-col').forEach((el,i) => {
    reveal(el, { from:{opacity:0,y:52,scale:0.9}, to:{opacity:1,y:0,scale:1,duration:0.8,delay:i*0.18,ease:'back.out(1.3)'} }, '.reviews-row');
  });

  // ─── Contacts ───
  gsap.utils.toArray('#contacts .section-head > *').forEach((el,i) => {
    reveal(el, { from:{opacity:0,y:22}, to:{opacity:1,y:0,duration:0.6,delay:i*0.1,ease:'power2.out'} }, '#contacts .section-head');
  });
  reveal('.map-wrap', { from:{opacity:0,x:-60}, to:{opacity:1,x:0,duration:0.9,ease:'power3.out'} }, '.contacts-grid');
  reveal('.contacts-info', { from:{opacity:0,x:60}, to:{opacity:1,x:0,duration:0.9,delay:0.15,ease:'power3.out'} }, '.contacts-grid');
  gsap.utils.toArray('.social-card').forEach((el,i) => {
    reveal(el, { from:{opacity:0,scale:0.78,y:20}, to:{opacity:1,scale:1,y:0,duration:0.55,delay:i*0.08,ease:'back.out(1.7)'} }, '.social-contacts');
  });

  // ─── Wave dividers ───
  gsap.utils.toArray('.wave-wrap').forEach(el => {
    gsap.fromTo(el, { opacity:0 }, {
      opacity:1, duration:0.9,
      scrollTrigger:{ trigger:el, start:'top 95%', end: 'bottom 5%', toggleActions:'play reverse play reverse' }
    });
  });

  // ─── Price card tilt (catalog cards) ───
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      gsap.to(card, { rotateY:x*8, rotateX:-y*5, duration:0.4, ease:'power2.out', transformPerspective:900 });
    });
    card.addEventListener('mouseleave', () => gsap.to(card, { rotateY:0, rotateX:0, duration:0.5, ease:'power2.out' }));
  });

  // ─── Social squares hover ───
  document.querySelectorAll('.social-sq').forEach(sq => {
    sq.addEventListener('mouseenter', () => gsap.to(sq, { scale:1.12, duration:0.18, ease:'back.out(2)' }));
    sq.addEventListener('mouseleave', () => gsap.to(sq, { scale:1,    duration:0.3,  ease:'power2.out' }));
  });

  // ─── Trust icons continuous float ───
  gsap.utils.toArray('.trust-icon').forEach((el,i) => {
    gsap.to(el, { y:-4, duration:1.5+i*0.2, ease:'sine.inOut', yoyo:true, repeat:-1, delay:i*0.3 });
  });
}

// Run GSAP when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initGSAP, 80));
} else {
  setTimeout(initGSAP, 80);
}