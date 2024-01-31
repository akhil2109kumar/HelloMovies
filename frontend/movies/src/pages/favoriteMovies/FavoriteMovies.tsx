import React,{ useEffect} from "react";
import { useNavigate } from "react-router-dom";

const FavoriteMovies = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    var token = localStorage.getItem("token");
    if(token === null){
      navigate("/login")
    }else{
      
    }
  },[])
  return (
    <div className="bg-black text-white px-8 self-center">
      {/* Movie Results */}
      <section className="p-8">
        <div className="flex justify-between">
          <h2 className="text-xl font-normal mb-6">
            Found <span className="text-amber-400">112</span> Movies
          </h2>
          <p className="flex justify-center">
            layout:
            <span className="mx-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="8" fill="#04060C" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 11C9 9.89543 9.89543 9 11 9H13C14.1046 9 15 9.89543 15 11V13C15 14.1046 14.1046 15 13 15H11C9.89543 15 9 14.1046 9 13V11ZM9 19C9 17.8954 9.89543 17 11 17H13C14.1046 17 15 17.8954 15 19V21C15 22.1046 14.1046 23 13 23H11C9.89543 23 9 22.1046 9 21V19ZM17 11C17 9.89543 17.8954 9 19 9H21C22.1046 9 23 9.89543 23 11V13C23 14.1046 22.1046 15 21 15H19C17.8954 15 17 14.1046 17 13V11ZM19 17C17.8954 17 17 17.8954 17 19V21C17 22.1046 17.8954 23 19 23H21C22.1046 23 23 22.1046 23 21V19C23 17.8954 22.1046 17 21 17H19Z"
                  fill="#FBBF24"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="8" fill="#0F172A" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.8571 8C23.4883 8 24 8.44772 24 9V11C24 11.5523 23.4883 12 22.8571 12H9.14286C8.51166 12 8 11.5523 8 11V9C8 8.44772 8.51166 8 9.14286 8H22.8571ZM22.8571 14C23.4883 14 24 14.4477 24 15V17C24 17.5523 23.4883 18 22.8571 18H9.14286C8.51166 18 8 17.5523 8 17V15C8 14.4477 8.51166 14 9.14286 14H22.8571ZM22.8571 20C23.4883 20 24 20.4477 24 21V23C24 23.5523 23.4883 24 22.8571 24H9.14286C8.51166 24 8 23.5523 8 23V21C8 20.4477 8.51166 20 9.14286 20H22.8571Z"
                  fill="#475569"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="flex flex-wrap max-w-[1200px] mx-auto gap-12 cursor-pointer justify-between">
          {/* div 1 */}
          {/* {data && data?.results?.map((item: any, index: any) => (
            <div
              className="flex flex-col items-center justify-center text-center w-[21%]"
              onClick={() => navigate("/moviesdetails", { state: { key: item.id } })}
            >
              <img
                className="w-full rounded-lg"
                src={item.image}
                alt="Movie Poster"
              />
              
              <h3 className="mt-2 font-bold text-blue-400 text-base">
                {item.title}
              </h3>
              <p className="text-xs font-light">
                {item.genres}
              </p>

              <p className="text-xs flex items-center font-light">
                IMDb:{" "}
                <span className="px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.23247 0.582263C5.47405 -0.194088 6.52593 -0.194088 6.76747 0.582263L7.63065 3.35612C7.73871 3.70332 8.04852 3.93839 8.3982 3.93839H11.1914C11.9732 3.93839 12.2983 4.98296 11.6658 5.46277L9.406 7.17711C9.12314 7.39166 9.00476 7.77203 9.11281 8.11921L9.976 10.8931C10.2175 11.6694 9.36662 12.3151 8.73408 11.8353L6.47436 10.1209C6.1915 9.90632 5.80849 9.90632 5.52564 10.1209L3.26586 11.8353C2.6334 12.3151 1.78242 11.6694 2.024 10.8931L2.88715 8.11921C2.99519 7.77203 2.87683 7.39166 2.59399 7.17711L0.334213 5.46277C-0.29826 4.98296 0.0267889 3.93839 0.80856 3.93839H3.6018C3.95142 3.93839 4.26127 3.70332 4.36932 3.35612L5.23247 0.582263Z"
                      fill="#FBBF24"
                    />
                  </svg>
                </span>
                {item.rating}
              </p>
            </div>
          ))} */}
        </div>

        <div className="flex justify-between mt-8">
          <h2 className="text-xl font-normal mb-6">
            Showing 1 to 20 of <span className="text-amber-400">112</span>{" "}
            results
          </h2>
          <p className="flex justify-center">
            <span className="mx-2.5">
              <button className="h-8 px-5 text-white text-sm rounded-xl bg-slate-900">
                Previous
              </button>
            </span>
            <span className="ms-4">
              <button className="h-8 px-5 text-white text-sm rounded-xl bg-slate-900">
                Next
              </button>
            </span>
          </p>
        </div>
        {/* {data.results.length != 0?  <div>""</div>:<div className="text-amber-400 text-center mt-5">
          No results found for "Search movie name"
        </div>} */}
      </section>
    </div>
  );
};

export default FavoriteMovies;