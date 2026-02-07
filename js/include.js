async function loadPartial(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(file);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(`Failed to load ${file}`, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('header-placeholder', 'partials/header.html');
  loadPartial('footer-placeholder', 'partials/footer.html');
});
