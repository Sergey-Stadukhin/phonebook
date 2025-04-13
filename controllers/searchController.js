import { searchModel } from '../models/searchModel.js';
import { searchView } from '../views/searchView.js';
import { fetchSuggestions } from '../api/searchApi.js';

let debounceTimer;

export function initController() {
  searchView.initTheme();

  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value;
    searchModel.setQuery(query);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const suggestions = await fetchSuggestions(query);
      searchView.renderSuggestions(suggestions);
    }, 300);
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    searchView.toggleTheme();
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    alert(`Ищем: ${searchModel.query}`);
  });
}