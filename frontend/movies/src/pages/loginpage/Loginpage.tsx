import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate= useNavigate()
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [errorFlag, setErrorFlag] = useState<boolean>(false)

  const handleLogin = async() => {
    // Handle login logic here
    if(username || password) {
    try{
      const response = await axios.post('http://localhost:8000/api/login/',{
        "username": username,
        "password": password
    });
      navigate("/")
    localStorage.setItem("token", response.data.token);
    }catch(error: any){
      setErrorMessage(error.response.data.non_field_errors[0])
      setErrorFlag(true)
    }}
    else{
      setErrorMessage("username and password field may not be blank.")
      setErrorFlag(true)
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-white p-8 rounded shadow-md w-96">
        <h1 className="lg:text-6xl text-3xl font-sans font-bold leading-none text-center mb-5">
          Login
        </h1>
        {errorFlag ? <p className="text-amber-400 text-center mt-5">
          {errorMessage}
        </p> : "" }
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="UserName"
              onChange={(event)=> setUsername(event.target.value)}
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
              className="block w-full p-3 ps-10 text-sm text-gray-400 rounded-lg h-14 bg-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              onChange={(event)=> setPassword(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="mb-4 text-cyan-200 "> New to HelloMovie's  ? <Link to="/signup"><span className="text-white"> Create your account here </span></Link>  </p>
      </div>
    </div>
  );
};

export default Login;