export const searchView = {
  renderSuggestions(suggestions) {
    const container = document.getElementById('suggestions');
    container.innerHTML = '';
    suggestions.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item;
      container.appendChild(div);
    });
  },
  toggleTheme() {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(current);
    document.body.classList.add(next);
    localStorage.setItem('theme', next);
  },
  initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(theme);
  }
};