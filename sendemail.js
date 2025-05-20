document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("9V1R3Dyo1fmHdFpii");
    console.log("Zainicjalizowany Public Key:", emailjs._userID);
  
    const form      = document.getElementById('contactForm');
    const alertDiv  = document.getElementById('alert');
    const spinner   = document.querySelector('.loading-spinner');
    const submitBtn = form?.querySelector('button[type="submit"]');
  
    if (!form) {
      return;
    }
  
    // --- 3. Obsługa wysyłki ---
    form.addEventListener('submit', async e => {
      e.preventDefault();
      alertDiv?.classList.add('hidden');
      submitBtn.disabled = true;
      spinner.classList.remove('hidden');
  
      try {
        const res = await emailjs.sendForm(
          'service_c95m3rk',
          'template_s9gxkik',
          form
        );
        console.log('Sukces:', res.status, res.text);
        alertDiv.textContent = "Message was sent!";
        alertDiv.classList.remove('hidden', 'error');
        alertDiv.classList.add('success');
        form.reset();
  
      } catch (err) {
        console.error('Błąd wysyłki:', err);
        alertDiv.textContent = `error: ${err.text || 'Please try again'}`;
        alertDiv.classList.remove('hidden', 'success');
        alertDiv.classList.add('error');
  
      } finally {
        submitBtn.disabled = false;
        spinner.classList.add('hidden');
      }
    });
  });