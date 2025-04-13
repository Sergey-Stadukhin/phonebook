import { themeModel } from '../models/themeModel.js';
import { themeView } from '../views/themeView.js';

export function initThemeController() {
  let currentTheme = themeModel.getTheme();
  themeView.applyTheme(currentTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      themeModel.setTheme(currentTheme);
      themeView.applyTheme(currentTheme);
    });
  }
}