// Dark mode toggle with localStorage
(function(){
  const key = 'prefers-dark';
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const initDark = localStorage.getItem(key);
  if(initDark === 'true'){ root.style.colorScheme = 'dark'; }
  if(initDark === 'false'){ root.style.colorScheme = 'light'; }
  btn?.addEventListener('click', () => {
    const current = root.style.colorScheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.style.colorScheme = next;
    localStorage.setItem(key, String(next === 'dark'));
  });
  // Year
  const y = document.getElementById('year'); if(y) y.textContent = String(new Date().getFullYear());
})();