import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import MovieSearchPage from "../moviesearch/MovieSearch";
import {
  AddTofavoriteApiCaller,
  favoriteApiCaller,
  moviesApiCaller,
  removefavoriteApiCaller,
} from "../../services/ApiCaller";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MovieTypes } from "../../utils/types";
const HomePage = () => {
  const navigate = useNavigate();
  var token = localStorage.getItem("token");
  const [movieData, setMovieData] = useState<MovieTypes[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<boolean>(false);
  const [loder, setLoder] = useState<boolean>(false);

  const getAllMovies = async () => {
    try {
      const data = await moviesApiCaller();
      setFavoriteMovies(false);

      setMovieData(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchFunction = async (value: string) => {
    await fetchData(value);
  };
  async function fetchData(value: string) {
    setLoder(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/movies/?search=${value}`
      );
      setMovieData(response.data.results);
      setLoder(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  const fetchMoviesData = async () => {
    if (token === null) {
      navigate("/login");
    } else {
      try {
        const favMovieData = await favoriteApiCaller();
        setMovieData(favMovieData.data.results);
        setFavoriteMovies(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const addFavorite = async (id: string) => {
    if (favoriteMovies) {
      try {
        const response = await removefavoriteApiCaller({ id });
        fetchMoviesData()
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        const response = await AddTofavoriteApiCaller({ id });
        getAllMovies()
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <>
      <div className="bg-black text-white lg:mt-40 lg:mb-0 my-10 flex flex-col">
        {/* <Loader /> */}
        <nav className="p-4"></nav>
        <main className="flex-grow flex flex-col items-center justify-center p-4 h-96 items-center">
          <h1 className="lg:text-6xl text-3xl font-sans font-bold lg:w-2/5 w-3/4 leading-none text-center mb-4">
            Need help finding the next movie?
          </h1>
          <p className="mb-4 text-cyan-200 tracking-wide text-center lg:w-3/12 w-3/4">
            Search for your next movie through HelloMovie's huge movie library
          </p>
          <div className="flex items-center mb-4 lg:w-3/12 w-11/12">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for your next movie"
                onChange={(event) => searchFunction(event.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex self-center mx-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-800 dark:text-white"
                viewBox="0 0 20 16"
                fill="#FBBF24"
                aria-hidden="true"
              >
                <path
                  d="M.302.061a.671.671 0 0 0-.213.178L0 .357v15.279l.082.107a.964.964 0 0 0 .216.182C.428 16 .503 16 10 16s9.571 0 9.702-.075a.964.964 0 0 0 .216-.182l.082-.107V.357l-.09-.118C19.718-.02 20.59 0 9.994 0 1.263 0 .42.008.302.061Zm2.851 1.547v.488H1.155v-.973h1.998v.485Zm3.131 0v.488H4.327v-.973H6.284v.485Zm3.168 0v.488H7.496v-.973h1.956v.485Zm3.13 0v.488h-1.956v-.973H12.583v.485Zm3.132 0v.488H13.757v-.973H15.714v.485Zm3.13 0v.488H16.93v-.973h1.916v.485ZM8.715 5.504c.295.142 3.455 1.913 3.53 1.978.29.242.29.762 0 1.019-.1.09-3.172 1.821-3.563 2.01-.362.175-.81.068-1.025-.246l-.12-.174V8.02c0-1.996 0-2.078.075-2.217.201-.378.678-.506 1.103-.3Zm-5.56 8.867v.485H1.154v-.973h1.998v.488Zm3.13 0v.485H4.327v-.46c0-.253.011-.474.026-.488.012-.01.451-.025.977-.025h.954v.488Zm3.168 0v.485H7.496v-.973h1.956v.488Zm3.13 0v.485h-1.956v-.973H12.583v.488Zm3.132 0v.485H13.757v-.46c0-.253.011-.474.026-.488.015-.01.455-.025.977-.025h.954v.488Zm3.13 0v.485H16.93v-.973h1.916v.488Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="mr-5">
              <button onClick={() => getAllMovies()}>Movies</button>
            </div>

            <div className="flex self-center mx-1 ">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 16"
                fill="#FBBF24"
                aria-hidden="true"
              >
                <path
                  d="M.36.086A.662.662 0 0 0 .094.34L0 .508v6.426c0 6.032.004 6.434.074 6.573.04.082.13.189.196.238.119.086.192.09 1.6.11l1.477.02-.372.648c-.335.574-.376.668-.372.849.004.36.27.614.638.614.356 0 .442-.094 1.072-1.18l.553-.95h12.227l.545.934c.298.516.585.98.634 1.037.119.127.372.2.565.163.323-.061.589-.446.523-.75-.016-.065-.188-.397-.388-.741l-.364-.623 1.501-.02c1.429-.021 1.502-.025 1.62-.111a.803.803 0 0 0 .197-.238c.07-.14.074-.54.074-6.569 0-6.303 0-6.43-.086-6.59a.553.553 0 0 0-.27-.258L21.456 0h-10.46C.593 0 .536 0 .36.086Zm9.22 3.905c.205.103.311.27.331.513.025.278-.081.48-.331.606-.156.078-.258.094-.585.094h-.401v2.123c0 1.414-.017 2.176-.05 2.291a.693.693 0 0 1-.51.471c-.136.025-.214.009-.373-.07-.369-.188-.356-.085-.356-2.606V5.204h-.377c-.47 0-.663-.049-.802-.217-.29-.344-.188-.832.213-1.012.098-.04.47-.057 1.612-.057 1.326 0 1.494.004 1.629.073Zm2.509-.028c.266.14.302.213.912 1.975.327.947.61 1.705.626 1.688.017-.016.274-.782.573-1.696.299-.918.581-1.713.626-1.77.115-.148.43-.263.614-.226a.637.637 0 0 1 .508.64c0 .094-.348 1.2-.827 2.643-.72 2.172-.843 2.495-.97 2.639-.389.43-1.035.266-1.256-.324-.045-.119-.442-1.254-.88-2.524-.516-1.488-.798-2.369-.798-2.48 0-.418.511-.75.872-.565Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="mr-5">TV Shows</div>
            <div className="flex self-center mx-1 ">
              <div className="cursor-pointer h-3 w-4 bg-[#FBBF24] flex items-center justify-center">
                <h5 className="text-sm text-gray-800">&#9829;</h5>
              </div>
            </div>
            <div className="mr-5">
              <button onClick={() => fetchMoviesData()}>Favorite</button>
            </div>
          </div>
        </main>

        {movieData.length && (
          <MovieSearchPage
            data={movieData}
            getAllMovies={getAllMovies}
            favoriteMoviesFlag={favoriteMovies}
            addFavorite={addFavorite}
          />
        )}
        {loder && <Loader />}
      </div>
    </>
  );
};

export default HomePage;
