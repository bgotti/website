(function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const backToTop = document.getElementById('back-to-top');

  function sanitize(input) {
    return input.replace(/[<>]/g, '');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const links = document.querySelectorAll('.site-nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = sanitize(form.name.value.trim());
      const email = sanitize(form.email.value.trim());
      const subject = sanitize(form.subject.value.trim());
      const message = sanitize(form.message.value.trim());
      const status = document.getElementById('form-status');

      if (!name || !email || !subject || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'red';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Please enter a valid email.';
        status.style.color = 'red';
        return;
      }

      status.textContent = 'Message sent successfully! (simulated)';
      status.style.color = 'green';
      form.reset();
    });
  }
})();
