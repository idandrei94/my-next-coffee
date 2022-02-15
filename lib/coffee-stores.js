// Initialise Unsplash
import { createApi } from 'unsplash-js';

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (query, latLong, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    perPage: 40,
  });

  const unsplashResults = photos.response?.results;
  return unsplashResults.map((result) => result.urls['regular']);
};

export const fetchCoffeeStores = async (
  latLong = '59.911573067705234,10.740452691000621',
  limit = 7
) => {
  try {
    const photos = await getListOfCoffeeStorePhotos();
    const response = await fetch(
      getUrlForCoffeeStores('coffee', latLong, limit),
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
      }
    );
    const data = await response.json();

    return (
      data.results?.map((venue, idx) => {
        // console.log(data?.results);
        const neighbourhood = venue.location.neighborhood;
        return {
          id: venue.fsq_id, // <------
          address: venue.location.address || '',
          name: venue.name,
          neighbourhood:
            (neighbourhood && neighbourhood.length > 0 && neighbourhood[0]) ||
            venue.location.cross_street ||
            venue.location.locality ||
            venue.timezone.substring(venue.timezone.indexOf('/') + 1) ||
            '',
          distance: venue.distance,
          imgUrl: photos[idx],
        };
      }) || []
    );
  } catch (error) {
    if (
      !process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY ||
      !process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
    ) {
      console.error(
        '🚨 Make sure to setup your API keys, checkout the docs on Github 🚨'
      );
    }
    console.log('Something went wrong fetching coffee shops', error);
    return [];
  }
};
