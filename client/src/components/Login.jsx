import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import SocialBtn from "./SocialBtn";
import MainBtn from "./MainBtn";


const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
      });
    
      const [error, setError] = useState("");
      
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await "http://localhost:3000/api/auth";
          const { data: res } = await axios.post(response, data);
          localStorage.setItem("token", res.data);
          window.location = "/";
          console.log(res.message);
          
        } catch (error) {
          if (error.response &&  error.response.status >= 400 && error.response.status <= 500) {
            setError(error.response.data.message);
          }
        }
      }
  return (
    <div className="w-full h-screen text-white flex flex-col items-center justify-center gap-10 relative">
      <img
        className="w-[269px] h-[299px] absolute left-6 top-4"
        src="/images/circle-shape3.svg"
        alt="circle-shape"
      />
      <img
        className="w-[229px] h-[249px] absolute right-6 top-60"
        src="/images/circle-shape2.svg"
        alt="circle-shape"
      />
      <img
        className="w-[229px] h-[249px] absolute left-6 bottom-0"
        src="/images/circle-shape1.svg"
        alt="circle-shape"
      />

      <div className="flex items-center justify-center gap-6">
        <div className="bg-[#4AB7F0] rounded-full w-[73px] h-[73px]"></div>
        <h1 className="text-4xl font-bold">
          Welcome to Sign In{" "}
          <span className="text-[var(--secondry-text)]"> Buddy! </span>
        </h1>
      </div>

      <form className="flex flex-col w-full items-center gap-6" onSubmit={handleSubmit}>
        <Input src="/images/mail.svg" alt="mail" type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter your Email"/>
        <Input src="/images/lock.svg" alt="password" type="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter your password"/>

        <div className="flex justify-between w-[50vw]">
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] cursor-pointer text-blue-800 border-2 rounded-md border-white outline-none bg-transparent appearance-none checked:bg-blue-800 checked:border-white"
              name="remember-me"
            />
            <label className="font-medium text-base" htmlFor="remember-me">
              Remember Me
            </label>
          </div>
          <div>
            <h4 className="text-[var(--secondry-text)] text-base font-semibold cursor-pointer">
              Forgot Password?
            </h4>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <MainBtn type="submit" name="Sign In"/>

        <div className="flex gap-3 items-center justify-center">
          <h5>New Here?</h5>
          <Link to="/signup">
            <span className="text-base font-semibold text-[var(--secondry-text)] cursor-pointer">Sign Up</span>
          </Link>
        </div>

        <div className="flex w-[50vw] items-center mt-4">
          <div className="w-full border-t-2 border-zinc-600"></div>
          <span className="text-base whitespace-nowrap px-4 text-[#B9B9B9]">Or continue with</span>
          <div className="w-full border-t-2 border-zinc-600"></div>
        </div>

        <div className="flex w-[50vw] justify-center gap-4">
            <SocialBtn src="/images/google.svg" alt="google" name="Google"/>
            <SocialBtn src="/images/facebook.svg" alt="facebook" name="Facebook"/>
          </div>
      </form>
    </div>
  )
}

export default Login
