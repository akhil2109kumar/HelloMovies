import apiCaller from "../utils/Api";

export const moviesApiCaller = () => {
  return apiCaller("/movies", "GET", {}, "http://127.0.0.1:8000/api");
};
