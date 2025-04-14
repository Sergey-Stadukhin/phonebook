// Сделал так, чтобы все отобразилось
export async function fetchSuggestions(query, attribute) {
  // Пока тут есть только поиск по name, по аналогии добавить почту и номер
  const res = await fetch(`http://89.111.155.239:8000/search?value=${query}&attribute=${attribute || 'name'}&page=1&size=10`);
  const data = await res.json();

  return data;
}

// Как примерно должно быть. Сам запрос, обработка ошибки
// Возможно, вернуть объект с ошибкой(Идея есть в "Фишках" в текстовом документе)
// export async function fetchSuggestions(query, attribute) {
//   try {
//     const res = await fetch(`http://89.111.155.239:8000/search?value=${query}&attribute=${attribute}&page=1&size=10`);
//     if (!res.ok) {
//       throw new Error(`Ошибка при запросе: ${res.status}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error('Ошибка при получении данных:', error);
//     return {}; // Тут должен быть объект с ошибкой, например
//   }
// }