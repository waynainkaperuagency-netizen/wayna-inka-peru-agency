const WHATSAPP = '51950160488';
const defaultMessage = 'Hola, WAYNA INKA PERÚ AGENCY. Estoy interesado en este tour y quisiera recibir información.';
const tours = {
  'city-tour-cusco': ['City Tour Cusco','Cultura & Historia','1 día','Fácil','3,500 m s. n. m.','city-tour-cusco.png','Recorre los principales atractivos históricos y arqueológicos de Cusco, combinando ciudad, cultura andina y vestigios incas.','Cusco, Qorikancha, Sacsayhuamán, Qenqo, Puca Pucara y Tambomachay'],
  'valle-sagrado-vip': ['Valle Sagrado VIP','Experiencia VIP','Full Day','Fácil','3,800 m s. n. m.','valle-sagrado-vip.png','Una experiencia premium por paisajes, arqueología y cultura del Valle Sagrado.','Cusco, Chinchero, Maras, Moray, Ollantaytambo y Pisac'],
  'valle-sagrado-tradicional': ['Valle Sagrado Tradicional','Cultura & Paisaje','Full Day','Fácil','3,800 m s. n. m.','valle-sagrado-tradicional.png','Una jornada entre arqueología, paisajes, comunidades y gastronomía andina.','Cusco, Pisac, Ollantaytambo y Chinchero'],
  'machu-picchu': ['Machu Picchu','Destino imperdible','Full Day','Fácil','2,430 m s. n. m.','machu-picchu.png','Una experiencia inolvidable entre tren, Aguas Calientes y la ciudadela inca.','Cusco, tren, Aguas Calientes y Machu Picchu'],
  'laguna-humantay': ['Laguna Humantay','Trekking','1 día','Alta','4,200 m s. n. m.','laguna-humantay.png','Una de las rutas naturales más impresionantes de Cusco.','Cusco, Mollepata, Soraypampa y Laguna Humantay'],
  'montana-7-colores': ['Montaña de 7 Colores','Aventura','1 día','Alta','5,200 m s. n. m.','montana-colores.png','Un paisaje que parece pintado por la naturaleza, en el corazón de los Andes.','Cusco, Cusipata y Montaña de 7 Colores'],
  'montana-colores-cuatrimotos': ['Montaña de Colores en Cuatrimotos','Aventura + Adrenalina','1 día','Alta','5,200 m s. n. m.','montana-colores-cuatrimotos.png','Aventura, velocidad y paisajes increíbles de los Andes.','Cusco, Cusipata, ruta en cuatrimoto y Montaña de Colores'],
  'qeswachaka-4-lagunas': ['Qeswachaka + 4 Lagunas','Cultura & Naturaleza','1 día','Fácil','3,500 m s. n. m.','qeswachaka-4-lagunas.png','Conoce el puente colgante inca de Qeswachaka y paisajes de lagunas altoandinas.','Cusco, Tipón, Pikillacta, Andahuaylillas y Qeswachaka'],
  'waqrapukara': ['Waqrapukara','Trekking & Aventura','1 día','Media','4,300 m s. n. m.','waqrapukara.png','Una aventura a una sorprendente formación rocosa con vistas panorámicas.','Cusco, Sangarará, Rapata y Waqrapukara'],
  'glaciar-quelccaya': ['Glaciar de Quelccaya','Alta montaña','1 día','Alta','5,400 m s. n. m.','glaciar-quelccaya.png','Una jornada de aventura hacia los impresionantes paisajes del glaciar.','Cusco, Cusipata y Glaciar de Quelccaya'],
  'pallay-punchu': ['Pallay Punchu','Trekking & Aventura','1 día','Media','4,900 m s. n. m.','pallay-punchu.png','Explora una montaña de formas y colores extraordinarios.','Cusco, Cusipata y Pallay Punchu'],
  'cusco-mistico': ['Cusco Místico','Cultura & Naturaleza','1 día','Fácil','3,600 m s. n. m.','cusco-mistico.png','Una experiencia diferente entre esculturas, naturaleza y cultura cusqueña.','Cusco, Morada de los Dioses, Valle de los Duendes y Humedal de Huasao'],
  'morada-dioses-cuatrimotos': ['Morada de los Dioses en Cuatrimotos','Aventura + Cultura','1 día','Fácil','3,600 m s. n. m.','morada-dioses-cuatrimotos.png','Recorre rutas de aventura y paisajes de Cusco en cuatrimoto.','Cusco, Morada de los Dioses, Valle de los Duendes y Bosque de los Ents'],
  '7-lagunas-ausangate': ['7 Lagunas Ausangate','Trekking & Naturaleza','1 día','Alta','3,500 m s. n. m.','7-lagunas-ausangate.png','Camina entre lagunas de intenso color turquesa y paisajes de Ausangate.','Cusco, Pacchanta, 7 Lagunas y baños termales'],
  'valle-sur': ['Valle Sur','Cultura & Historia','1 día','Alta','3,500 m s. n. m.','valle-sur.png','Descubre destinos históricos y culturales al sur de Cusco.','Cusco, Tipón, Pikillacta y Andahuaylillas'],
  'city-tour-lima': ['City Tour Lima','Cultura & Ciudad','1 día','Fácil','150 m s. n. m.','city-tour-lima.webp','Descubre la Ciudad de los Reyes entre historia, arte, monumentos y vistas del litoral limeño.','Recojo en hotel, Centro Hist?rico, Plaza Mayor, Catacumbas de San Francisco, Parque del Amor y Miraflores'],
  'islas-ballestas-huacachina': ['Islas Ballestas y Huacachina','Mar & Aventura','1 día','Media','400 m s. n. m.','islas-ballestas-huacachina.webp','Del desierto al mar en una sola jornada: conoce Paracas, la fauna marina de Islas Ballestas y vive la aventura de Huacachina.','Recojo en hotel, Paracas, Islas Ballestas, Huacachina, paseo en buggys y sandboarding, retorno a Lima'],
  'sobrevuelo-lineas-nazca': ['Sobrevuelo Líneas de Nazca','Experiencia aérea','1 día','Alta','520 m s. n. m.','sobrevuelo-lineas-nazca.webp','Contempla los enigmas del desierto desde el aire en un sobrevuelo por las Líneas de Nazca.','Recojo en hotel, traslado a aeródromo, charla de seguridad, inicio de sobrevuelo, observación de figuras y retorno a Lima']
};
const serviceInfo = {
  'city-tour-cusco': {includes:['Transporte ida y retorno','Guía profesional','Asistencia permanente'], excludes:['Boletos de ingreso','Ingreso a Qorikancha','Gastos extra','Alimentos no mencionados']},
  'valle-sagrado-vip': {includes:['Transporte ida y retorno','Guía profesional','Asistencia permanente','Almuerzo buffet'], excludes:['Boletos de ingreso','Ingreso a Maras','Gastos extra','Alimentos no mencionados']},
  'valle-sagrado-tradicional': {includes:['Transporte ida y retorno','Guía profesional','Asistencia permanente','Almuerzo buffet'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'machu-picchu': {includes:['Transporte ida y retorno','Tren ida y retorno','Guía profesional','Ingreso a Machu Picchu','Bus Consettur'], excludes:['Gastos extra','Alimentos no mencionados']},
  'laguna-humantay': {includes:['Transporte ida y retorno','Bastón','Guía profesional','Asistencia permanente','Desayuno y almuerzo','Primeros auxilios'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'montana-7-colores': {includes:['Transporte ida y retorno','Bastón','Guía profesional','Asistencia permanente','Desayuno y almuerzo','Primeros auxilios'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'montana-colores-cuatrimotos': {includes:['Transporte ida y retorno','Bastón','Guía profesional','Cuatrimotos','Desayuno y almuerzo','Primeros auxilios'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'qeswachaka-4-lagunas': {includes:['Transporte ida y retorno','Guía profesional','Desayuno y almuerzo','Primeros auxilios'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'waqrapukara': {includes:['Transporte ida y retorno','Bastón','Guía profesional','Asistencia permanente','Desayuno y almuerzo','Primeros auxilios'], excludes:['Boletos de ingreso','Gastos extra','Alimentos no mencionados']},
  'glaciar-quelccaya': {includes:['Bus turístico ida y vuelta','Guía profesional','Desayuno y almuerzo','Ingresos','Equipos de seguridad'], excludes:['Gastos extra','Alimentos no mencionados']},
  'pallay-punchu': {includes:['Bus turístico ida y vuelta','Guía profesional','Desayuno y almuerzo','Ingresos','Primeros auxilios'], excludes:['Gastos extra','Alimentos no mencionados']},
  'cusco-mistico': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente'], excludes:['Gastos extra','Ingresos','Alimentos no mencionados']},
  'morada-dioses-cuatrimotos': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente'], excludes:['Gastos extra','Ingresos','Alimentos no mencionados']},
  '7-lagunas-ausangate': {includes:['Bus turístico ida y vuelta','Guía profesional','Desayuno y almuerzo','Primeros auxilios'], excludes:['Gastos extra','Ingreso a aguas termales','Alimentos no mencionados']},
  'valle-sur': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente','Primeros auxilios'], excludes:['Gastos extra','Ingreso a Capilla Sixtina','Alimentos no mencionados']},
  'city-tour-lima': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente','Primeros auxilios'], excludes:['Gastos extra','Ingreso a Catacumbas','Alimentos no mencionados']},
  'islas-ballestas-huacachina': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente','Primeros auxilios','Buggys','Degustación de vinos'], excludes:['Desayuno y almuerzo','Gastos extra','Alimentos no mencionados']},
  'sobrevuelo-lineas-nazca': {includes:['Bus turístico ida y vuelta','Guía profesional','Asistencia permanente','Primeros auxilios','Certificado de sobrevuelo','Desayuno y almuerzo','Equipos de seguridad'], excludes:['Gastos extra','Alimentos no mencionados']}
};
const slug = document.body.dataset.tour;
const [name,label,duration,difficulty,altitude,image,description,places,useOriginalImage] = tours[slug];
const heroImage = useOriginalImage ? image : image.replace(/\.png$/, '.webp');
document.title = `${name} | WAYNA INKA PERÚ AGENCY`;
const details = serviceInfo[slug];
const route = places.split(', ').map((place,index) => `<div data-step="${String(index + 1).padStart(2,'0')}">${place}</div>`).join('');
const includes = details.includes.map(item => `<li>${item}</li>`).join('');
const excludes = details.excludes.map(item => `<li>${item}</li>`).join('');
const pageUrl = `${window.location.origin}${window.location.pathname}`;
const imageUrl = new URL(`../assets/images/${heroImage}`, window.location.href).href;

const topHeader = document.querySelector('.top');
if (topHeader) {
  topHeader.className = 'header';
  topHeader.id = 'header';
  topHeader.innerHTML = `
    <div class="top-row">
      <a class="brand" href="../index.html#inicio" aria-label="WAYNA INKA PERÚ AGENCY, inicio">
        <img class="brand-logo" src="../assets/images/wayna-inka-logo.png" alt="WAYNA INKA PERÚ AGENCY">
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><i></i><i></i><i></i></button>
      <nav class="nav" aria-label="Navegacion principal">
        <a href="../index.html#inicio">Inicio</a>
        <a href="../index.html#tours">Tours</a>
        <a class="soon-link" href="../tours.html">Paquetes <small>Ver catálogo</small></a>
        <a href="../index.html#machu-picchu">Machu Picchu</a>
        <a href="../index.html#nosotros">Nosotros</a>
        <a href="../index.html#faq">FAQ</a>
        <a href="../index.html#contacto">Contacto</a>
        <a class="nav-cta" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(defaultMessage)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      </nav>
    </div>
  `;

  const menu = topHeader.querySelector('.nav');
  const toggle = topHeader.querySelector('.menu-toggle');
  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => topHeader.classList.toggle('scrolled', window.scrollY > 25), { passive: true });
}

const breadcrumb = document.createElement('div');
breadcrumb.className = 'page-breadcrumb';
breadcrumb.innerHTML = `<a href="../index.html#inicio">Inicio</a> / <a href="../tours.html">Tours</a> / <span>${name}</span>`;
const mainTour = document.querySelector('.tour-page');
if (mainTour) {
  document.body.insertBefore(breadcrumb, mainTour);
}

const footerMarkup = `
<footer id="contacto">
  <div class="footer-grid">
    <div>
      <a class="brand" href="../index.html#inicio"><img class="brand-logo" src="../assets/images/wayna-inka-logo.png" alt="WAYNA INKA PERÚ AGENCY"><span class="brand-label">WAYNA INKA <small>EXPERIENCE</small></span></a>
      <p>Experiencias auténticas por Cusco, Machu Picchu y los Andes.</p><i>Descubre. Conecta. Vive.</i>
      <p class="footer-detail"><strong>WAYNA INKA PERÚ AGENCY E.I.R.L.</strong><br>RUC: 20610938265</p>
    </div>
    <div>
      <h3>Tours</h3>
      <a href="../index.html#tours">City Tour Cusco</a>
      <a href="../index.html#tours">Valle Sagrado</a>
      <a href="../index.html#tours">Machu Picchu</a>
      <a href="../index.html#tours">Laguna Humantay</a>
      <a href="../index.html#tours">Montaña de Colores</a>
    </div>
    <div>
      <h3>Información</h3>
      <a href="../index.html#nosotros">Nosotros</a>
      <a href="../index.html#faq">Preguntas frecuentes</a>
      <a href="../proteccion-datos.html">Protección de datos</a>
      <a href="../esnna.html">ESNNA</a>
      <a href="../terminos.html">Términos y condiciones</a>
      <button class="plain-btn" id="claims-open">Libro de reclamaciones</button>
    </div>
    <div>
      <h3>Contacto</h3>
      <a href="mailto:waynainkaperuagency@gmail.com">waynainkaperuagency@gmail.com</a>
      <p>+51 950 160 488</p>
      <a class="js-wa" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(defaultMessage)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      <div class="social">
        <a aria-label="Instagram" target="_blank" href="https://www.instagram.com/waynainkaperuagency/"><svg class="social-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.3 6.2a1.1 1.1 0 1 1 -1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"/></svg></a>
        <a aria-label="TikTok" target="_blank" href="https://www.tiktok.com/@waynaincaperuagency"><svg class="social-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v10.3a4.8 4.8 0 1 1-3-4.45v2.2a2.7 2.7 0 1 0 1 2.15V3h2Zm2.2 2.1c.6 1.5 1.7 2.5 3.3 2.9v2.1A7 7 0 0 1 16 8.85V5.1h.2Z"/></svg></a>
        <a aria-label="Threads" target="_blank" href="https://www.threads.com/@waynainkaperuagency"><svg class="social-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.6 11.1c-.2-3.1-2.1-4.8-5.4-4.8-3.1 0-5.1 1.5-5.1 3.7 0 2.6 2.7 3.1 5 3.1 2.9 0 4.6.8 4.6 2.4 0 1.4-1.4 2.3-3.4 2.3-2.3 0-3.8-1.1-3.8-2.8 0-1.2.9-2 2.2-2 1.5 0 2.8 1 3.6 2.6M12.2 4.2c4.6 0 7.3 2.5 7.3 6.9 0 5.1-2.7 8.7-7.1 8.7-4.2 0-7.1-2.3-7.1-5.6 0-3.1 2.4-5.2 6-5.2 3.8 0 6.6 2.2 7.3 5.8"/></svg></a><a aria-label="Facebook" target="_blank" href="https://www.facebook.com/waynainkaperuagency"><svg class="social-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 22v-8h2.7l.4-3.2h-3.1V8.75c0-.93.26-1.56 1.6-1.56h1.7V4.32c-.3-.04-1.3-.13-2.48-.13-2.45 0-4.13 1.5-4.13 4.25v2.36H7.5V14h2.9v8h3.2Z"/></svg></a>
      </div>
    </div>
  </div>
  <div class="copyright">© 2026 WAYNA INKA PERÚ AGENCY · Todos los derechos reservados.</div>
</footer>
<a class="back-top" href="#tour-page" aria-label="Volver arriba"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg></a>
<a class="whatsapp" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(defaultMessage)}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp"><span><svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M9 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.5c.1.3 0 .4-.1.6l-.4.5c.6 1.1 1.4 1.9 2.5 2.5l.5-.4c.2-.1.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.5.7-.4.2-1.2.3-2.3-.1-1-.4-2.2-1.1-3.3-2.2-1.1-1.1-1.8-2.3-2.2-3.3-.4-1.1-.3-1.9-.1-2.3Z"/></svg></span><i>¿Tienes alguna pregunta? Escríbenos</i></a>
`;

document.body.insertAdjacentHTML('beforeend', footerMarkup);
const claimsScript = document.createElement('script');
claimsScript.src = '../claims.js';
document.body.appendChild(claimsScript);

const backTop = document.querySelector('.back-top');
if (backTop) {
  const toggleBackToTop = () => backTop.classList.toggle('visible', window.scrollY > 280);
  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backTop.addEventListener('click', event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

const whatsappButton = document.querySelector('.whatsapp');
if (whatsappButton) {
  whatsappButton.setAttribute('href', `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(defaultMessage)}`);
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name,
  description,
  url: pageUrl,
  image: imageUrl,
  touristType: 'Travelers',
  provider: {
    '@type': 'TravelAgency',
    name: 'WAYNA INKA PERÚ AGENCY',
    telephone: '+51 950 160 488',
    email: 'waynainkaperuagency@gmail.com'
  },
  itinerary: places.split(', ').map((place, index) => ({
    '@type': 'TouristAttraction',
    name: place,
    position: index + 1
  }))
};
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.textContent = JSON.stringify(structuredData);
document.head.appendChild(schemaScript);
document.querySelector('#tour-page').innerHTML = `<section class="hero" style="background-image:url('../assets/images/${heroImage}')"><div><p class="eyebrow">${label}</p><h1>${name}</h1><p>Una experiencia auténtica por el Perú.</p></div></section><section class="content"><div><h2>Descubre ${name}</h2><p>${description}</p><div class="facts"><span><b>Duración:</b> ${duration}</span><span><b>Dificultad:</b> ${difficulty}</span><span><b>Altitud máxima:</b> ${altitude}</span></div><h2>Ruta de la experiencia</h2><div class="route">${route}</div><div class="guide-grid"><section><h3 class="good">Incluye</h3><ul>${includes}</ul></section><section><h3 class="no">No incluye</h3><ul>${excludes}</ul></section></div><h2>Recomendaciones</h2><p>Lleva ropa adecuada para el clima, agua, protector solar y consulta con nuestro equipo cualquier requerimiento especial antes de viajar. Para rutas de altura, considera uno o dos días de aclimatación en Cusco.</p></div><aside class="side"><p class="eyebrow">WAYNA INKA PERÚ AGENCY</p><h2>¿Quieres vivir esta experiencia?</h2><p>Consulta disponibilidad, itinerario y detalles para tu fecha de viaje.</p><a class="button" target="_blank" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, WAYNA INKA PERÚ AGENCY. Quiero información y disponibilidad para el tour ${name}. ¿Me pueden ayudar, por favor?`)}">Consultar por WhatsApp</a></aside></section>`;
