import React from "react";

const SignUp = () => {
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
          Welcome to Sign Up{" "}
          <span className="text-[var(--secondry-text)]"> Buddy! </span>
        </h1>
      </div>

      <form className="flex flex-col w-full items-center gap-6">
        <div className="input-div">
          <img src="/images/person.svg" alt="user" />
          <input
            className="input-field"
            type="text"
            name="fullName"
            placeholder="Enter your Full Name"
          />
        </div>
        <div className="input-div">
          <img src="/images/mail.svg" alt="mail" />
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="input-div">
          <img src="/images/lock.svg" alt="password" />
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="flex justify-between w-[50vw]">
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] text-blue-800 border-2 rounded-md border-white outline-none bg-transparent appearance-none checked:bg-blue-800 checked:border-white"
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

        <button className="w-[50vw] h-[64px] bg-[var(--secondry-text)] rounded-[8px] font-bold hover:bg-[#4AB7F0] cursor-pointer transition-all">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
