// Animasi muncul saat discroll
const sections = document.querySelectorAll('.section-fade');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const sectionTop = sec.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) sec.classList.add('visible');
  });
});
