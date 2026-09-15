const claimsModalMarkup = `
  <div class="modal" id="claims-modal" role="dialog" aria-modal="true" aria-labelledby="claims-title">
    <div class="modal-box claims">
      <button class="modal-close" type="button" aria-label="Cerrar"><span aria-hidden="true">&times;</span></button>
      <h2 id="claims-title">Libro de reclamaciones</h2>
      <p class="claims-intro">Registra tu solicitud y te responderemos por los canales de contacto indicados.</p>
      <form id="claims-form">
        <div class="claims-fields">
          <label>Nombre completo<input name="fullName" autocomplete="name" required></label>
          <label>Documento de identidad<input name="documentId" inputmode="numeric" required></label>
          <label>Correo electrónico<input name="email" type="email" autocomplete="email" required></label>
          <label>Teléfono<input name="phone" type="tel" autocomplete="tel" required></label>
          <label>Tipo de solicitud<select name="requestType" required><option value="">Selecciona una opción</option><option>Reclamo</option><option>Queja</option></select></label>
          <label>Fecha del incidente<input name="incidentDate" type="date" required></label>
        </div>
        <label>Detalle de la solicitud<textarea name="details" rows="5" required></textarea></label>
        <label class="claims-consent"><input name="consent" type="checkbox" required> Confirmo que la información proporcionada es correcta.</label>
        <button class="button gold" type="submit">Enviar reclamación</button>
      </form>
      <div class="form-message" role="status" hidden>
        <strong>Solicitud enviada correctamente.</strong>
        <span>Hemos registrado tu información. Nuestro equipo se pondrá en contacto contigo.</span>
      </div>
    </div>
  </div>`;

function setupClaimsBook() {
  const openButton = document.querySelector('#claims-open');
  if (!openButton || document.querySelector('#claims-modal')) return;
  document.body.insertAdjacentHTML('beforeend', claimsModalMarkup);
  const modal = document.querySelector('#claims-modal');
  const form = modal.querySelector('#claims-form');
  const message = modal.querySelector('.form-message');
  const close = () => { modal.classList.remove('visible'); document.body.style.overflow = ''; };
  openButton.addEventListener('click', () => { modal.classList.add('visible'); document.body.style.overflow = 'hidden'; modal.querySelector('input').focus(); });
  modal.addEventListener('click', event => { if (event.target === modal || event.target.closest('.modal-close')) close(); });
  form.addEventListener('submit', event => { event.preventDefault(); form.hidden = true; form.style.display = 'none'; message.hidden = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('visible')) close(); });
}

function setupPaymentMethods() {
  const paymentMarkup = `<div class="payment-methods" aria-label="Métodos de pago aceptados">
    <span class="payment-title">Pago seguro</span>
    <span class="payment-logo visa" aria-label="Visa"><svg viewBox="0 0 48 24" role="img"><text x="4" y="17">VISA</text></svg></span>
    <span class="payment-logo mastercard" aria-label="Mastercard"><svg viewBox="0 0 48 24" role="img"><circle cx="20" cy="12" r="8"/><circle cx="28" cy="12" r="8"/></svg></span>
    <span class="payment-logo amex" aria-label="American Express"><svg viewBox="0 0 48 24" role="img"><text x="4" y="15">AMEX</text></svg></span>
    <span class="payment-logo paypal" aria-label="PayPal"><svg viewBox="0 0 48 24" role="img"><text x="4" y="16">PayPal</text></svg></span>
  </div>`;
  document.querySelectorAll('footer').forEach(footer => {
    const copyright = footer.querySelector('.copyright');
    if (copyright && !copyright.querySelector('.payment-methods')) copyright.insertAdjacentHTML('beforeend', paymentMarkup);
  });
}

function initializeSharedFooterFeatures() {
  setupClaimsBook();
  setupPaymentMethods();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeSharedFooterFeatures);
else initializeSharedFooterFeatures();
