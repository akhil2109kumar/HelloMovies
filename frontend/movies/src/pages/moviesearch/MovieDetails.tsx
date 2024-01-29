import React from "react";
import { useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black text-white min-h-screen flex  flex-wrap lg:flex-col flex-row">
        <div className="bg-black text-white">
          <main className="flex justify-center items-center p-6">
            <div className="flex bg-[#060618] flex-col md:flex-row p-6 rounded-lg">
              <div className="flex-none mb-4 md:mb-0">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYmI3N2EzOWQtZjFiMi00MjgwLTgzN2UtZGI0ZGY1ZDQyOTRiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
                  alt="Movie Poster"
                  className="w-64 h-auto rounded-lg"
                />
              </div>
              <div className="md:ml-6">
                <h3 className="text-2xl font-bold">KING KONG</h3>
                <p className="mt-2">
                  A greedy film producer assembles a team of moviemakers and
                  sets out for the
                </p>
                <p>
                  {" "}
                  infamous Skull Island, where they find more than just
                  cannibalistic natives.
                </p>
                <div className="mt-4">
                  <div className="flex border-b border-gray-500 justify-between items-center">
                    <div className="flex">
                      <span className="py-1 px-3 mr-2">Action</span>
                      <span className="py-1 px-3 mr-2">Adventure</span>
                      <span className="py-1 px-3">Drama</span>
                      <span className="py-1 px-3 text-yellow-500">187 min</span>
                    </div>
                    <div className="flex">
                      <span className="py-1 mx-1">IMDb:</span>
                      <span className="py-1 py-1">
                        <svg
                          className="w-4 h-4 mt-1 mx-1 ms-1 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </span>
                      <span className="py-1 ">6.7</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 ">
                  <div className="flex">
                    <p>
                      <strong className="mr-5 text-blue-300">Director:</strong>
                    </p>
                    <p className="w-32">Peter Jackson</p>
                  </div>
                  <div className="flex">
                    <p>
                      <strong className="mr-8 text-blue-300">Actors:</strong>
                    </p>
                    <p className="w-32">
                      Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="flex justify-center items-center">
            <button className="bg-[#202029] flex rounded-lg py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 px-1 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span className="ml-1" onClick={() => navigate("/")}>
                Back to Results
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
