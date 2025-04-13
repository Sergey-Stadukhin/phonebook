import { searchModel } from '../models/searchModel.js';
import { searchView } from '../views/searchView.js';
import { fetchSuggestions } from '../api/searchApi.js';

let debounceTimer;

export function initController() {
  console.log('initController')
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchSelect = document.getElementById('searchSelect');

  // Ввод в поле инпута
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    console.log(`Строка поиска: ${query}`);
    searchModel.setQuery(query);

    clearTimeout(debounceTimer);
    // Обернул в debounce, чтобы оптимизировать. Так не будет запроса при каждом нажатии кнопки
    debounceTimer = setTimeout(async () => {
      const suggestions = await fetchSuggestions(query);
      console.log('suggestions=')
      console.log(suggestions)
      searchView.renderSuggestions(suggestions);
    }, 300);
  });

  async function performSearch() {
    const results = await fetchSuggestions(searchModel.query);
    searchView.renderResults(results);
  }

  // Поиск или по нажатию Enter, или по кнопке "поиск"
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log(`Ищем: ${searchModel.query}`);
      performSearch();
    }
  });

  searchBtn.addEventListener('click', () => {
    console.log(`Ищем: ${searchModel.query}`);
    searchView.showLoading();
    performSearch();
  });

  searchSelect.addEventListener('change', (e) => {
    console.log('Сменили фильтр')
    console.log(e.target.value)
    const selectedValue = e.target.value;
    searchModel.setFilters(selectedValue);
    /* Для демонстрации функционала - просто хардкод
    Вообще лучше сделать что то типа [{id: 1, value: 'ФИО', attribute: 'FullNameRus'}, ...] 
    для выпадающих списков и оперировать айдишниками */
    if (selectedValue === 'Телефон:') {
      searchInput.setAttribute('type', 'number')
    } else {
      searchInput.setAttribute('type', 'text')
    }
    // При выборе фильтра по почте добавить маску или валидаци по маске (Например, такой /^[a-zA-Z0-9@._-]*$/)
  });
}
