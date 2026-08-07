// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // Contact / interest form -> WhatsApp
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const interesse = document.getElementById('interesse') ? document.getElementById('interesse').value : '';
      const mensagem = document.getElementById('mensagem') ? document.getElementById('mensagem').value.trim() : '';
      let texto = `Oi! Meu nome é ${nome}.\nTelefone: ${telefone}`;
      if (interesse) texto += `\nInteresse: ${interesse}`;
      if (mensagem) texto += `\nMensagem: ${mensagem}`;
      const url = `https://wa.me/5541998278818?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }

  // Work-with-us form -> WhatsApp
  const jobForm = document.getElementById('jobForm');
  if (jobForm) {
    jobForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = document.getElementById('jobNome').value.trim();
      const telefone = document.getElementById('jobTelefone').value.trim();
      const area = document.getElementById('jobArea').value;
      const mensagem = document.getElementById('jobMensagem').value.trim();
      let texto = `Oi! Meu nome é ${nome} e tenho interesse em trabalhar com vocês.\nTelefone: ${telefone}\nÁrea de interesse: ${area}`;
      if (mensagem) texto += `\nSobre mim: ${mensagem}`;
      const url = `https://wa.me/5541998278818?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }

  // Blog "read more" smooth scroll (in case of same-page anchors)
  document.querySelectorAll('a.read').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
