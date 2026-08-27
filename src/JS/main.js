document.addEventListener('DOMContentLoaded', () => {

  /* ===== Menu sanduíche ===== */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('menu-principal');
  const overlay = document.querySelector('.menu-overlay');

  function openMenu() {
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('active');
      isOpen ? closeMenu() : openMenu();
    });

    // Fecha o menu ao clicar em qualquer link (útil em telas pequenas)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Fecha ao clicar fora do menu (na sobreposição escura)
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Fecha com a tecla Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ===== Botão "voltar ao topo" (Home) ===== */
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop(); // estado inicial

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});