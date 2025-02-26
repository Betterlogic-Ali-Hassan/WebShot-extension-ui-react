import axios from "axios";

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${
      import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY
    } `,
  },
});
