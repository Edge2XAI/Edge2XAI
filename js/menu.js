(function () {
  var header = document.querySelector('header.site');
  if (!header) return;
  var btn = header.querySelector('.nav-toggle');
  var nav = header.querySelector('nav.primary');
  if (!btn || !nav) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      btn.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (header.classList.contains('nav-open') && !header.contains(e.target)) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 980) setOpen(false);
  });
})();
