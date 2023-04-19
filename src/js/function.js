export function createGallaryListHTML(items) {
  return items
    .map(item => {
      const { preview, original, description } = item;

      const template = `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `;

      return template;
    })
    .join('');
}

export function getDataFromLocalStorage(storageKey) {
  const savedData = localStorage.getItem(storageKey);

  return savedData ? JSON.parse(savedData) : {};
}
