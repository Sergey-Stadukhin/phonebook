// Сделал так, чтобы все отобразилось
export async function fetchSuggestions(query, attribute) {
  // Падает запрос, убрать коммент, если заработает
  const res = await fetch(`https://proxy-kappa-beryl.vercel.app/api/proxy/search?value=${query}&attribute=${attribute || 'name'}&page=1&size=10`);
  const data = await res.json();

  // const data = {
  //   "items": [
  //     {
  //       "Index": 0,
  //       "ID": "string",
  //       "FullNameRus": "string",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 1,
  //       "ID": "string1",
  //       "FullNameRus": "string1",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 2,
  //       "ID": "string2",
  //       "FullNameRus": "string2",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 3,
  //       "ID": "string3",
  //       "FullNameRus": "string3",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 4,
  //       "ID": "string4",
  //       "FullNameRus": "string4",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 5,
  //       "ID": "string5",
  //       "FullNameRus": "string5",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 6,
  //       "ID": "string6",
  //       "FullNameRus": "string6",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 7,
  //       "ID": "string7",
  //       "FullNameRus": "string7",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 8,
  //       "ID": "string8",
  //       "FullNameRus": "string8",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 9,
  //       "ID": "string9",
  //       "FullNameRus": "string9",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 10,
  //       "ID": "string10",
  //       "FullNameRus": "string10",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 11,
  //       "ID": "string11",
  //       "FullNameRus": "string11",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 12,
  //       "ID": "string12",
  //       "FullNameRus": "string12",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 13,
  //       "ID": "string13",
  //       "FullNameRus": "string13",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 14,
  //       "ID": "string14",
  //       "FullNameRus": "string14",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     },
  //     {
  //       "Index": 15,
  //       "ID": "string15",
  //       "FullNameRus": "string15",
  //       "DepartmentID": "string",
  //       "OrganizationID": "string",
  //       "Boleet": 0,
  //       "Email": "string",
  //       "Photo": "string",
  //       "Phone": "string",
  //       "Mobile": "string",
  //       "Address": "string",
  //       "Workplace": "string"
  //     }
  //   ],
  //   "total": 50,
  //   "page": 1,
  //   "size": 10,
  //   "pages": 5
  // }
  return data;
}

// Как примерно должно быть. Сам запрос, обработка ошибки
// Возможно, вернуть объект с ошибкой(Идея есть в "Фишках" в текстовом документе)
// export async function fetchSuggestions(query, attribute) {
//   try {
//     const res = await fetch(`http://89.111.155.239:8000/search?value=${query}&attribute=${attribute}&page=1&size=10`);
                              //  'http://89.111.155.239:8000/search?value=%D0%98%D0%B2%D0%B0%D0%BD&attribute=FullNameRus&page=1&size=50'
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