function renderListItem(elem, flag, name) {
  const markup = `<li><img src="${flag}" alt="${name}" width="40" />${name}</li>`;
  elem.insertAdjacentHTML('beforeend', markup);
}
export { renderListItem };
