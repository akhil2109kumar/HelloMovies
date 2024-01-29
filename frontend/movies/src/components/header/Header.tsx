import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              <h3 className="text-2xl font-sans font-bold mb-2">HelloMovies</h3>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
