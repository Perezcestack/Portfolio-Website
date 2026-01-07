// Add click/touch support: toggle 'open' class
document.querySelectorAll('.suitcase').forEach(s => {
  s.addEventListener('click', (e) => {
    // allow hover to still work; toggle for touch devices
    s.classList.toggle('open');
  });
  // close when clicking outside
  document.addEventListener('click', (ev) => {
    if (!s.contains(ev.target) && s.classList.contains('open')) s.classList.remove('open');
  });
});
