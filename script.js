// Funzione per gestire il menu hamburger
(() =>  {
    const toggleButton = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if  (toggleButton && menu) {
        toggleButton.addEventListener('click', () =>  {
            menu.classList.toggle('open');
            toggleButton.classList.toggle('open');
        });
    }
})();

// Inject favicon if missing (works across all pages)
(() => {
  const head = document.head;
  const hasFavicon = head.querySelector('link[rel="icon"]');
  if (!hasFavicon) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.svg';
    link.type = 'image/svg+xml';
    head.appendChild(link);
  }
  // Optional Apple touch icon
  const hasApple = head.querySelector('link[rel="apple-touch-icon"]');
  if (!hasApple) {
    const apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.href = '/images/game11.jpg';
    head.appendChild(apple);
  }
})();