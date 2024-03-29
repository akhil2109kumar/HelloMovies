import apiCaller from "../utils/Api";

export const moviesApiCaller = () => {
  return apiCaller("/movies", "GET", {}, "http://127.0.0.1:8000/api");
};

export const favoriteApiCaller = () => {
  return apiCaller("/favorite/list/", "GET", {}, "http://127.0.0.1:8000/api");
};

export const AddTofavoriteApiCaller = ({id}: any) => {
  return apiCaller("/favorite/add/", "POST", {movie: id}, "http://127.0.0.1:8000/api");
};
export const removefavoriteApiCaller = ({id}: any) => {
  return apiCaller(`/favorites/remove/${id}`, "DELETE", {}, "http://127.0.0.1:8000/api");
};
