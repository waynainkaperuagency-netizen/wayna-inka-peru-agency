const WHATSAPP_NUMBER = '51927895331';
const defaultMessage = 'Hola, WAYNA INKA PERÚ AGENCY. Estoy interesado en uno de sus tours y quisiera recibir información.';
const tours = [
  { name: 'City Tour Cusco', label: 'Cultura & Historia', duration: '1 día', difficulty: 'Fácil', altitude: '3,500 m s. n. m.', image: 'assets/images/city-tour-cusco.png', desc: 'Recorre los principales atractivos históricos y arqueológicos de Cusco.', places: 'Cusco, Qorikancha, Sacsayhuamán, Qenqo, Puca Pucara y Tambomachay' },
  { name: 'Valle Sagrado VIP', label: 'Experiencia VIP', duration: 'Full Day', difficulty: 'Fácil', altitude: '3,800 m s. n. m.', image: 'assets/images/valle-sagrado-vip.png', desc: 'Una experiencia premium por paisajes, arqueología y cultura del Valle Sagrado.', places: 'Cusco, Chinchero, Salineras de Maras, Moray, Ollantaytambo y Pisac' },
  { name: 'Valle Sagrado Tradicional', label: 'Cultura & Paisaje', duration: 'Full Day', difficulty: 'Fácil', altitude: '3,800 m s. n. m.', image: 'assets/images/valle-sagrado-tradicional.png', desc: 'Una jornada entre arqueología, paisajes, comunidades y gastronomía andina.', places: 'Cusco, Pisac, Ollantaytambo y Chinchero' },
  { name: 'Machu Picchu', label: 'Destino imperdible', duration: 'Full Day', difficulty: 'Fácil', altitude: '2,430 m s. n. m.', image: 'assets/images/machu-picchu.png', desc: 'Una experiencia inolvidable entre tren, Aguas Calientes y la ciudadela inca.', places: 'Cusco, tren, Aguas Calientes y Machu Picchu' },
  { name: 'Laguna Humantay', label: 'Trekking', duration: '1 día', difficulty: 'Alta', altitude: '4,200 m s. n. m.', image: 'assets/images/laguna-humantay.png', desc: 'Una de las rutas naturales más impresionantes de Cusco.', places: 'Cusco, Mollepata, Soraypampa y Laguna Humantay' },
  { name: 'Montaña de 7 Colores', label: 'Aventura', duration: '1 día', difficulty: 'Alta', altitude: '5,200 m s. n. m.', image: 'assets/images/montana-colores.png', desc: 'Un paisaje que parece pintado por la naturaleza, en el corazón de los Andes.', places: 'Cusco, Cusipata y Montaña de 7 Colores' },
  { name: 'Montaña de Colores en Cuatrimotos', label: 'Aventura + Adrenalina', duration: '1 día', difficulty: 'Alta', altitude: '5,200 m s. n. m.', image: 'assets/images/montana-colores-cuatrimotos.png', desc: 'Aventura, velocidad y paisajes increíbles de los Andes.', places: 'Cusco, Cusipata, ruta en cuatrimoto y Montaña de Colores' },
  { name: 'Qeswachaka + 4 Lagunas', label: 'Cultura & Naturaleza', duration: '1 día', difficulty: 'Fácil', altitude: '3,500 m s. n. m.', image: 'assets/images/qeswachaka-4-lagunas.png', desc: 'Conoce el puente colgante inca de Qeswachaka y paisajes de lagunas altoandinas.', places: 'Cusco, Tipón, Pikillacta, Andahuaylillas y Qeswachaka' },
  { name: 'Waqrapukara', label: 'Trekking & Aventura', duration: '1 día', difficulty: 'Media', altitude: '4,300 m s. n. m.', image: 'assets/images/waqrapukara.png', desc: 'Una aventura a una sorprendente formación rocosa con vistas panorámicas.', places: 'Cusco, Sangarará, Rapata y Waqrapukara' },
  { name: 'Glaciar de Quelccaya', label: 'Alta montaña', duration: '1 día', difficulty: 'Alta', altitude: '5,400 m s. n. m.', image: 'assets/images/glaciar-quelccaya.png', desc: 'Una jornada de aventura hacia los impresionantes paisajes del glaciar.', places: 'Cusco, Cusipata y Glaciar de Quelccaya' },
  { name: 'Pallay Punchu', label: 'Trekking & Aventura', duration: '1 día', difficulty: 'Media', altitude: '4,900 m s. n. m.', image: 'assets/images/pallay-punchu.png', desc: 'Explora una montaña de formas y colores extraordinarios.', places: 'Cusco, Cusipata y Pallay Punchu' },
  { name: 'Cusco Místico', label: 'Cultura & Naturaleza', duration: '1 día', difficulty: 'Fácil', altitude: '3,600 m s. n. m.', image: 'assets/images/cusco-mistico.png', desc: 'Una experiencia diferente entre esculturas, naturaleza y cultura cusqueña.', places: 'Cusco, Morada de los Dioses, Valle de los Duendes y Humedal de Huasao' },
  { name: 'Morada de los Dioses en Cuatrimotos', label: 'Aventura + Cultura', duration: '1 día', difficulty: 'Fácil', altitude: '3,600 m s. n. m.', image: 'assets/images/morada-dioses-cuatrimotos.png', desc: 'Recorre rutas de aventura y paisajes de Cusco en cuatrimoto.', places: 'Cusco, Morada de los Dioses, Valle de los Duendes y Bosque de los Ents' },
  { name: '7 Lagunas Ausangate', label: 'Trekking & Naturaleza', duration: '1 día', difficulty: 'Alta', altitude: '3,500 m s. n. m.', image: 'assets/images/7-lagunas-ausangate.png', desc: 'Camina entre lagunas de intenso color turquesa y paisajes de Ausangate.', places: 'Cusco, Pacchanta, 7 Lagunas y baños termales' },
  { name: 'City Tour Lima', label: 'Cultura & Ciudad', duration: '1 día', difficulty: 'Fácil', altitude: '150 m s. n. m.', image: 'assets/images/city-tour-lima.webp', desc: 'Descubre la Ciudad de los Reyes entre historia, arte, monumentos y vistas de Lima.', places: 'Recojo en hotel, Centro Histórico, Plaza Mayor, Catacumbas de San Francisco, Parque del Amor y Miraflores' },
  { name: 'Islas Ballestas y Huacachina', label: 'Mar & Aventura', duration: '1 día', difficulty: 'Media', altitude: '400 m s. n. m.', image: 'assets/images/islas-ballestas-huacachina.webp', desc: 'Del desierto al mar en una sola jornada: Paracas, Islas Ballestas, Huacachina y buggys.', places: 'Recojo en hotel, Paracas, Islas Ballestas, Huacachina, paseo en buggys y sandboarding, retorno a Lima' },
  { name: 'Sobrevuelo Líneas de Nazca', label: 'Experiencia aérea', duration: '1 día', difficulty: 'Alta', altitude: '520 m s. n. m.', image: 'assets/images/sobrevuelo-lineas-nazca.webp', desc: 'Contempla los enigmas del desierto desde el aire en un sobrevuelo por las Líneas de Nazca.', places: 'Recojo en hotel, traslado a aeródromo, charla de seguridad, inicio de sobrevuelo, observación de figuras y retorno a Lima' },
  { name: 'Valle Sur', label: 'Cultura & Historia', duration: '1 día', difficulty: 'Alta', altitude: '3,500 m s. n. m.', image: 'assets/images/valle-sur.png', desc: 'Descubre destinos históricos y culturales al sur de Cusco.', places: 'Cusco, Tipón, Pikillacta y Andahuaylillas' }
].map(tour => ({ ...tour, image: tour.image.replace(/\.png$/, '.webp'), message: `Hola, WAYNA INKA PERÚ AGENCY. Quiero información y disponibilidad para el tour ${tour.name}. ¿Me pueden ayudar, por favor?` }));
const faq = [
  ['¿Cómo puedo viajar a Machu Picchu desde Cusco?', 'Existen recorridos de 1 día, opciones de 2 días pasando la noche en Aguas Calientes y rutas de caminata. También puedes combinar Cusco, Valle Sagrado y otros atractivos según el tiempo disponible.'],
  ['¿Cuál es la mejor forma de viajar a Machu Picchu desde Cusco?', 'Para un día, el recorrido combina transporte terrestre, tren y autobús. Con dos días puedes descansar en Aguas Calientes y disfrutar de un itinerario más pausado.'],
  ['¿Cuánto cuesta un viaje a Machu Picchu desde Cusco?', 'El precio varía según la fecha, disponibilidad de entradas, categoría del tren y servicios elegidos. Consúltanos directamente para recibir una cotización actualizada.'],
  ['¿Qué circuito de Machu Picchu me conviene elegir?', 'El circuito adecuado depende de la experiencia que buscas y la disponibilidad. El Circuito 2 suele ser una alternativa muy completa para una primera visita.'],
  ['¿Con cuánta anticipación debo reservar?', 'Recomendamos planificar con varios meses de anticipación, especialmente durante temporada alta o si buscas circuitos y horarios de mayor demanda.'],
  ['¿Puedo visitar Machu Picchu en un día desde Cusco?', 'Sí. Se inicia temprano con el traslado a la estación de tren, el viaje hasta Aguas Calientes y el ascenso en bus. Después de la visita se retorna a Cusco.'],
  ['¿Qué diferencia hay entre un viaje de 1 día y uno de 2 días?', 'El viaje de 1 día concentra traslados y visita en una sola jornada. El de 2 días permite pasar la noche en Aguas Calientes y visitar la ciudadela con más calma.'],
  ['¿Qué paquetes combinan Cusco, Valle Sagrado y Machu Picchu?', 'Podemos ayudarte a planear experiencias que combinen Cusco, Valle Sagrado, Machu Picchu y otros destinos como Laguna Humantay o Montaña de Colores.']
];
function waLink(message = defaultMessage) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
document.querySelectorAll('.js-wa').forEach(a => { a.href = waLink(); a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('.brand > span:not(.brand-mark)').forEach(label => label.classList.add('brand-label'));
const grid = document.querySelector('#tour-grid');
function getTourCategories(tour) {
  const text = `${tour.name} ${tour.label}`.toLowerCase();
  const categories = ['full-day'];
  if (/cusco|valle|qeswachaka|místico|morada|sur|machu/.test(text)) categories.push('cultura');
  if (/aventura|montaña|waqrapukara|glaciar|pallay|cuatrimotos/.test(text)) categories.push('aventura');
  if (/trekking|humantay|colores|waqrapukara|glaciar|pallay|lagunas/.test(text)) categories.push('trekking');
  if (/cuatrimotos/.test(text)) categories.push('cuatrimotos');
  return categories;
}
const tourPages = {
  'City Tour Cusco':'city-tour-cusco','Valle Sagrado VIP':'valle-sagrado-vip','Valle Sagrado Tradicional':'valle-sagrado-tradicional','Machu Picchu':'machu-picchu','Laguna Humantay':'laguna-humantay','Montaña de 7 Colores':'montana-7-colores','Montaña de Colores en Cuatrimotos':'montana-colores-cuatrimotos','Qeswachaka + 4 Lagunas':'qeswachaka-4-lagunas','Waqrapukara':'waqrapukara','Glaciar de Quelccaya':'glaciar-quelccaya','Pallay Punchu':'pallay-punchu','Cusco Místico':'cusco-mistico','Morada de los Dioses en Cuatrimotos':'morada-dioses-cuatrimotos','7 Lagunas Ausangate':'7-lagunas-ausangate','City Tour Lima':'city-tour-lima','Islas Ballestas y Huacachina':'islas-ballestas-huacachina','Sobrevuelo Líneas de Nazca':'sobrevuelo-lineas-nazca','Valle Sur':'valle-sur'
};
function renderTours(filter = 'all') {
  const availableTours = filter === 'all' ? tours.slice(0, 6) : tours;
  const visibleTours = availableTours.map((tour, index) => ({ tour, index })).filter(({ tour }) => filter === 'all' || getTourCategories(tour).includes(filter));
  grid.innerHTML = visibleTours.map(({ tour: t }) => `<article class="tour-card reveal show"><div class="tour-photo"><img loading="lazy" src="${t.image}" alt="${t.name}, tour en Cusco"><span class="tour-label">${t.label}</span><h3 class="tour-name">${t.name}</h3></div><div class="tour-body"><div class="tour-meta"><span>${t.duration}</span><span>${t.difficulty}</span><span>${t.altitude}</span></div><p>${t.desc}</p><div class="tour-actions"><a class="tour-detail-link" href="tours/${tourPages[t.name]}.html">Ver experiencia <span class="icon icon-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span></a><a class="small-wa" target="_blank" href="${waLink(t.message)}">WhatsApp</a></div></div></article>`).join('');
}
renderTours();
const heroImages = ['assets/images/machu-picchu.webp', 'assets/images/city-tour-lima.webp'];
let heroIndex = 0;
const heroImage = document.querySelector('#hero-image');
function rotateHero() { if (!heroImage) return; heroImage.classList.add('is-changing'); setTimeout(() => { heroIndex = (heroIndex + 1) % heroImages.length; heroImage.style.backgroundImage = `url('${heroImages[heroIndex]}')`; heroImage.classList.remove('is-changing'); }, 350); }
if (heroImage) { heroImage.style.backgroundImage = `url('${heroImages[0]}')`; window.setInterval(rotateHero, 6500); }
const catalog = document.querySelector('#catalogo');
const catalogGrid = document.querySelector('#catalog-grid');
const catalogSearch = document.querySelector('#tour-search');
let catalogFilter = 'all';
function renderCatalog() { if (!catalogGrid) return; const query = (catalogSearch?.value || '').toLowerCase().trim(); const visible = tours.filter(tour => (catalogFilter === 'all' || (catalogFilter === 'lima' ? /lima|ballestas|huacachina|nazca|paracas/i.test(`${tour.name} ${tour.places}`) : getTourCategories(tour).includes(catalogFilter))) && (!query || `${tour.name} ${tour.label} ${tour.desc} ${tour.places}`.toLowerCase().includes(query))); catalogGrid.innerHTML = visible.map(t => `<article class="tour-card"><div class="tour-photo"><img loading="lazy" src="${t.image}" alt="${t.name}"><span class="tour-label">${t.label}</span><h3 class="tour-name">${t.name}</h3></div><div class="tour-body"><div class="tour-meta"><span>${t.duration}</span><span>${t.difficulty}</span><span>${t.altitude}</span></div><p>${t.desc}</p><div class="tour-actions"><a class="tour-detail-link" href="tours/${tourPages[t.name]}.html">Ver experiencia →</a><a class="small-wa" target="_blank" rel="noopener" href="${waLink(t.message)}">WhatsApp</a></div></div></article>`).join('') || '<p class="catalog-empty">No encontramos tours con esa búsqueda.</p>'; }
document.querySelector('#catalog-open')?.addEventListener('click', () => { catalog.hidden = false; renderCatalog(); catalog.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
document.querySelectorAll('[data-catalog-filter]').forEach(button => button.addEventListener('click', () => { catalogFilter = button.dataset.catalogFilter; document.querySelectorAll('[data-catalog-filter]').forEach(item => item.classList.toggle('active', item === button)); renderCatalog(); }));
catalogSearch?.addEventListener('input', renderCatalog);
document.querySelectorAll('.tour-filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.tour-filter').forEach(item => item.classList.toggle('active', item === button));
  renderTours(button.dataset.filter);
}));
const faqList = document.querySelector('#faq-list');
faqList.innerHTML = faq.map(([q, a]) => `<article class="faq-item"><button class="faq-question" aria-expanded="false">${q}<b>+</b></button><div class="faq-answer"><p>${a}</p></div></article>`).join('');
const faqSchema = document.createElement('script');
faqSchema.type = 'application/ld+json';
faqSchema.textContent = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer }
  }))
});
document.head.appendChild(faqSchema);
document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => { const item = button.parentElement; document.querySelectorAll('.faq-item.open').forEach(open => { if (open !== item) { open.classList.remove('open'); open.querySelector('button').setAttribute('aria-expanded', 'false') } }); item.classList.toggle('open'); button.setAttribute('aria-expanded', item.classList.contains('open')); }));
const header = document.querySelector('#header'); window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 25));
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 420), { passive: true });
const menu = document.querySelector('.nav'), toggle = document.querySelector('.menu-toggle'); toggle.addEventListener('click', () => { menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', menu.classList.contains('open')); document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : ''; }); menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '' }));
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target) } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const tourModal = document.querySelector('#tour-modal');
function showTour(i) { const t = tours[i]; document.querySelector('#tour-detail').innerHTML = `<div class="modal-hero"><img src="${t.image}" alt="${t.name}"><h2>${t.name}</h2></div><div class="detail-copy"><div class="detail-meta"><span>Duración · ${t.duration}</span><span>Altitud · ${t.altitude}</span><span>Dificultad · ${t.difficulty}</span></div><h3>Descripción</h3><p>${t.desc}</p><h3>Lugares a visitar</h3><p>${t.places}</p><h3>Itinerario</h3><p>La ruta y los horarios se coordinan para tu experiencia. Te compartiremos el detalle actualizado según tu fecha de viaje.</p><h3>¿Qué incluye?</h3><ul><li>Coordinación previa de tu experiencia.</li><li>Acompañamiento según el recorrido seleccionado.</li><li>Información actualizada antes de viajar.</li></ul><h3>Recomendaciones</h3><p>Lleva ropa adecuada para el clima, agua, protector solar y consulta con nosotros cualquier requerimiento particular.</p><a class="button navy" target="_blank" href="${waLink(t.message)}">Consultar por WhatsApp <span class="icon icon-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span></a></div>`; openModal(tourModal); }
grid.addEventListener('click', e => { const btn = e.target.closest('[data-tour]'); if (btn) showTour(btn.dataset.tour) });
function openModal(modal) { modal.classList.add('visible'); document.body.style.overflow = 'hidden'; modal.querySelector('.modal-close').focus() }; function closeModal(modal) { modal.classList.remove('visible'); document.body.style.overflow = '' }; document.querySelectorAll('.modal').forEach(m => { m.addEventListener('click', e => { if (e.target === m || e.target.closest('.modal-close')) closeModal(m) }) });
document.querySelector('#claims-open').addEventListener('click', () => openModal(document.querySelector('#claims-modal'))); document.querySelector('#claims-form').addEventListener('submit', e => { e.preventDefault(); e.target.hidden = true; document.querySelector('.form-message').hidden = false }); document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.querySelectorAll('.modal.visible').forEach(closeModal); menu.classList.remove('open'); document.body.style.overflow = '' } });

