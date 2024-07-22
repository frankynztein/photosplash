export default async function handler(req, res) {
  const { query, page } = req.query;
  const key = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
        Authorization: `Client-ID ${key}`,
    },
  };

  const URL = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=15&page=${page}`;
  
  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
