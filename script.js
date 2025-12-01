// Header scroll background
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile menu if open
    document.querySelector('.site-nav')?.classList.remove('open');
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');
menuBtn?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});
