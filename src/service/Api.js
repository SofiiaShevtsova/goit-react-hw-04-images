import axios from 'axios';
import { Notify } from 'notiflix';

export const getImage = async (query, page) => {
  let nameImages = `q=${query}`;
  let pageToShow = page;
  const options =
    'key=31187211-d453cf6c0705ee9af6400cbd4&min_height=1200&image_type=photo&orientation=horizontal&safesearch=true&per_page=10';
  const baseUrl = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(
      `${baseUrl}?${options}&page=${pageToShow}&${nameImages}`
    );
    if (response.data.hits.length === 0) {
      throw new Error();
    }

    return response.data.hits;
  } catch (error) {
    Notify.failure(
      `Sorry, there are no images matching your search query. Please try again.`,
      {
        width: '500px',
        distance: '50px',
        fontSize: '24px',
      }
    );
  }
};
