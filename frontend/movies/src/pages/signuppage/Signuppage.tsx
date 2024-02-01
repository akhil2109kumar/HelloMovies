import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signuppage = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorFlag, setErrorFlag] = useState<boolean>(false);

  const handleLogin = async () => {
    // Handle signup api working here
    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        username: username,
        password: password,
      });
      navigate("/login");
    } catch (error: any) {
      setErrorFlag(true);
      console.log("error", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-white p-8 rounded shadow-md w-96">
        <h1 className="lg:text-6xl text-3xl font-sans font-bold leading-none text-center mb-5">
          SignUp
        </h1>
        {errorFlag ? (
          <p className="text-amber-400 text-center mt-5">
            UserName or Password required
          </p>
        ) : (
          ""
        )}
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="first Name"
              onChange={(event: { target: { value: any } }) =>
                setFirstname(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="LastName"
              onChange={(event: { target: { value: any } }) =>
                setLastname(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="default-searchusername"
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="UserName"
              onChange={(event: { target: { value: any } }) =>
                setUsername(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="default-search"
              required
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              onChange={(event: { target: { value: any } }) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="default-search"
              required
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              onChange={(event: { target: { value: any } }) =>
                setPassword(event.target.value)
              }
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
            onClick={handleLogin}
          >
            SignUp
          </button>
        </form>
        <p className="mb-4 text-cyan-200 ">
          {" "}
          Already have an account ?{" "}
          <Link to="/login">
            <span> login </span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
