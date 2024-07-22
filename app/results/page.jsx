import { Gallery } from '@/components/Gallery';

const key = process.env.API_KEY;

const options = {
  method: "GET",
  headers: {
      Accept: "application/json",
      Authorization: `Client-ID ${key}`,
  },
};

async function fetchPhotos(query) {
  const URL = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=9&page=1`;
  const res = await fetch(URL, options);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

const Results = async ({searchParams}) => {
  const {query} = searchParams;
  const data = await fetchPhotos(query);

  return (
    <Gallery initialData={data.results} query={query} />
  )
}

export default Results;