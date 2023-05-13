function renderCountryInfo(elem, flag, name, capital, popul, langs) {
  const markup = `
<div class="wrap">
    <img src="${flag}" alt="${name}" width="40" />
    <h2>${name}</h2>
</div>
<p><b>Capital: </b>${capital}</p>
<p><b>Population: </b>${popul}</p>
<p><b>Languages: </b>${langs}</p>
`;
  elem.insertAdjacentHTML('beforeend', markup);
}
export { renderCountryInfo };
