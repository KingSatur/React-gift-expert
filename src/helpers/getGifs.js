export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=S6cVxP7wmVKlKIlNUpwMc29tP0RVe7IR&limit=4`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      src: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
