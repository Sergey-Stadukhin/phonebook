import { initController } from './controllers/searchController.js';
import { initThemeController } from './controllers/themeController.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeController();
});
document.addEventListener('DOMContentLoaded', initController);