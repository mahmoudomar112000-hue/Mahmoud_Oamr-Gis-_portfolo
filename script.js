
// Theme toggle
const btn = document.getElementById('themeToggle');
if (btn) btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}
// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// Scrollspy
const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('#nav a')];
function onScroll(){
  const pos = window.scrollY + 100;
  let current = sections[0].id;
  for(const sec of sections){
    if(pos >= sec.offsetTop){ current = sec.id; }
  }
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+current));
}
window.addEventListener('scroll', onScroll);
onScroll();
