import { searchModel } from '../models/searchModel.js';

export const searchView = {
  renderSuggestions(suggestions) {
    const suggestionsItems = suggestions.items.slice(0, 10);
    console.log('renderSuggestions')
    console.log(suggestionsItems)
    const container = document.getElementById('suggestions');
    container.innerHTML = '';

    if (suggestionsItems.length === 0) {
      container.classList.add('hidden');
      return;
    }

    suggestionsItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.FullNameRus;
      li.addEventListener('click', () => {
        document.getElementById('searchInput').value = item.FullNameRus;
        searchModel.setQuery(item.FullNameRus);
        container.classList.add('hidden');
      });
      container.appendChild(li);
    });

    container.classList.remove('hidden');
  },

  showLoading() {
    document.getElementById('loadingMessage').classList.remove('hidden');
    document.getElementById('resultTable').classList.add('hidden');
  },

  hideLoading() {
    document.getElementById('loadingMessage').classList.add('hidden');
  },
  renderResults(data) {
    console.log('renderResults')
    console.log(data)
    this.hideLoading();
    const table = document.getElementById('resultTable');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    data.items.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.FullNameRus}</td>
        <td>${item.Email}</td>
        <td>${item.Phone}</td>
        <td>${item.Mobile}</td>
      `;
      tbody.appendChild(row);
    });

    table.classList.remove('hidden');
  }
};