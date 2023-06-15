const BASE_URL = "https://api.tvmaze.com";

const apiget = async (querystring) => {
  const response = await fetch(`${BASE_URL}${querystring}`);
  const body = await response.json();

  return body;
};

export const searchshow = (query) => {
  return apiget(`sda/search/shows?q=${query}`);
};
