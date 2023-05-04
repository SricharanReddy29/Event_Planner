import React from "react";
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import './index.css'
import { useAuth } from "./AuthProvider";

const Signup = () => {
  const user = useRef("");
  const pass = useRef("");
  const conpass = useRef("");
  const [err, setErr] = useState();

  const {signup}=useAuth();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (pass.current.value !== conpass.current.value) {
      return setErr("Please enter the password correctly");
    }

    try {
      setErr("");
      console.log(`${user.current.value} ${pass.current.value}`);
      await signup(user.current.value, pass.current.value);
      user.current.value = "";
      pass.current.value = "";
      conpass.current.value = "";
    } catch (err) {
      console.log(err);
      setErr("Account creation unsuccessfull");
    }
  };

  return  (
    <main className="flex flex-col min-h-screen bg-teal-400 items-center justify-center text-center ">
      <img
        src="https://skillicons.dev/icons?i=firebase"
        alt="firebase"
        className=" w-auto h-auto"
      />
      <h1 className="text-5xl text-blue-600 ">Sign Up</h1>

      <form
        action=""
        className="my-5 flex flex-col justify-center items-center"
      >
        <input
          type="Email"
          placeholder="email address"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-1 focus:ring-sky-50 rounded-lg"
          autoComplete="off"
          ref={user}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-sky-500 m-1 rounded-lg"
          autoComplete="off"
          ref={pass}
          required
        />
        <input
          type="password"
          placeholder="ConfirmPassword"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-zinc-500 p-2  w-80 border-x border-y border-blue-700 focus:outline-none focus:ring-sky-500 m-1 rounded-lg"
          autoComplete="off"
          ref={conpass}
          required
        />

        <input
          type="button"
          value="Sign Up"
          className=" rounded-xl text-lg text-slate-800 bg-sky-300 hover:bg-green-5-500 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
          onClick={handlesubmit}
        />

        <h1 className="text-xl text-slate-300">
          Do you have an account already?.
        </h1>
        <Link
          to="/signin"
          className="text-xl text-green-600  hover:underline "
        >
          signin
        </Link>
      </form>
      </main>
  )
};

export default Signup;