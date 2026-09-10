const WHATSAPP = '51927895331';
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
  'city-tour-lima': ['City Tour Lima','Cultura & Ciudad','1 día','Fácil','150 m s. n. m.','city-tour-lima.webp','Descubre la Ciudad de los Reyes entre historia, arte, monumentos y vistas del litoral limeño.','Recojo en hotel, Centro Histórico, Plaza Mayor, Catacumbas de San Francisco, Parque del Amor y Miraflores'],
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
document.title = `${name} | AURIT´IKA EXPERIENCE`;
const details = serviceInfo[slug];
const route = places.split(', ').map((place,index) => `<div data-step="${String(index + 1).padStart(2,'0')}">${place}</div>`).join('');
const includes = details.includes.map(item => `<li>${item}</li>`).join('');
const excludes = details.excludes.map(item => `<li>${item}</li>`).join('');
const pageUrl = `${window.location.origin}${window.location.pathname}`;
const imageUrl = new URL(`../assets/images/${heroImage}`, window.location.href).href;
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
    name: 'AURIT´IKA EXPERIENCE',
    telephone: '+51 927 895 331',
    email: 'Agenciadeviajesauritika@gmail.com'
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
document.querySelector('#tour-page').innerHTML = `<section class="hero" style="background-image:url('../assets/images/${heroImage}')"><div><p class="eyebrow">${label}</p><h1>${name}</h1><p>Una experiencia auténtica por el Perú.</p></div></section><section class="content"><div><h2>Descubre ${name}</h2><p>${description}</p><div class="facts"><span><b>Duración:</b> ${duration}</span><span><b>Dificultad:</b> ${difficulty}</span><span><b>Altitud máxima:</b> ${altitude}</span></div><h2>Ruta de la experiencia</h2><div class="route">${route}</div><div class="guide-grid"><section><h3 class="good">Incluye</h3><ul>${includes}</ul></section><section><h3 class="no">No incluye</h3><ul>${excludes}</ul></section></div><h2>Recomendaciones</h2><p>Lleva ropa adecuada para el clima, agua, protector solar y consulta con nuestro equipo cualquier requerimiento especial antes de viajar. Para rutas de altura, considera uno o dos días de aclimatación en Cusco.</p></div><aside class="side"><p class="eyebrow">AURIT´IKA EXPERIENCE</p><h2>¿Quieres vivir esta experiencia?</h2><p>Consulta disponibilidad, itinerario y detalles para tu fecha de viaje.</p><a class="button" target="_blank" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, AURIT´IKA EXPERIENCE. Quiero información y disponibilidad para el tour ${name}. ¿Me pueden ayudar, por favor?`)}">Consultar por WhatsApp</a></aside></section>`;
