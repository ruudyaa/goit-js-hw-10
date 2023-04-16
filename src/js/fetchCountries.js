const url = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: ['name', 'capital', 'population', 'flags', 'languages'],
});

export const fetchCountries = name => {
  return fetch(`${url}${name}?${searchParams}`).then(response => {
    if (response.status === 404) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
