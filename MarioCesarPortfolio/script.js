// Click/touch: toggle 'open' for the clicked suitcase. Close others when clicking outside.
const suitcases = Array.from(document.querySelectorAll('.suitcase'));
suitcases.forEach(s => {
  s.addEventListener('click', (e) => {
    // Toggle this one
    s.classList.toggle('open');
  });
});

// Single document handler to close any open suitcase when clicking outside
document.addEventListener('click', (ev) => {
  const clicked = ev.target.closest('.suitcase');
  suitcases.forEach(s => {
    if (s !== clicked && s.classList.contains('open')) s.classList.remove('open');
  });
});
