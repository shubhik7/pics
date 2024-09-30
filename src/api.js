import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID qQIgzOEzeT0hk4P3zY0pAkzNBZXlJPXq9-TliCYNZFU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
