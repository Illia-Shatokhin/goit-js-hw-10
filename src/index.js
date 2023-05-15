import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { renderListItem } from './renderListItem.js';
import { renderCountryInfo } from './renderCountryInfo.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(inputListener, DEBOUNCE_DELAY));

function inputListener(e) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    return;
  }
  fetchCountries(inputValue)
    .then(countrys => {
      if (countrys.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countrys.length === 1) {
        const languages = Object.values(countrys[0].languages).join(', ');
        const country = countrys[0];
        renderCountryInfo(
          countryInfo,
          country.flags.svg,
          country.name.official,
          country.capital,
          country.population,
          languages
        );
      } else if (countrys.length > 1 && countrys.length <= 10) {
        countrys.forEach(country => {
          renderListItem(countryList, country.flags.svg, country.name.official);
        });
      } else {
        Notify.failure('Oops, there is no country with that name');
      }
    })
    .catch(err => console.log(err));
}
