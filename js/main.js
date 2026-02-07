document.addEventListener('DOMContentLoaded', () => {

  // Capture CTA source + scroll to subscribe
  document.querySelectorAll('.subscribe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // IMPORTANT for buttons inside forms later

      const source = btn.getAttribute('data-source') || 'Unknown';

      const input = document.getElementById('source_cta');
      if (input) input.value = source;

      const subscribeSection = document.getElementById('subscribe');
      if (subscribeSection) {
        subscribeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Subscribe section not found');
      }
    });
  });

});
