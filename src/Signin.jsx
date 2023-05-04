import React from "react";
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
const SignIn = () => {

  const user = useRef("");
  const pass = useRef("");
  const [err, setErr] = useState();
  const {signin,curruser}=useAuth();

  const handlesubmit = async () => {
    try {
      setErr("");
      //console.log(`${user.current.value} ${pass.current.value}`);
      await signin(user.current.value, pass.current.value);
      user.current.value = "";
      pass.current.value = "";
    } catch (err) {
      console.log(err);
      setErr("User not found");
    }
  };

  return  !curruser?(<main className="flex flex-col min-h-screen bg-black items-center justify-center text-center border-8 border-yellow-500 ">
      <img
        src="https://skillicons.dev/icons?i=firebase"
        alt="firebase"
        className=" w-auto h-auto"
      />
      <h1 className="text-5xl text-yellow-500 ">Sign In</h1>
   {/*    {curruser ? (
        <h1 className="text-xl text-yellow-600 m-1">{curruser.email}</h1>
      ) : null} */}
      <form
        action=""
        className="my-5 flex flex-col justify-center items-center"
      >
        <input
          type="Email"
          placeholder="email address"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-yellow-500 p-2  w-80 border-x border-y border-orange-700 focus:outline-none focus:ring-1 focus:ring-sky-50 rounded-lg"
          autoComplete="off"
          ref={user}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-slate-950 text-lg placeholder:text-slate-40 text-yellow-500 p-2  w-80 border-x border-y border-orange-700 focus:outline-none focus:ring-yellow-500 m-1 rounded-lg"
          autoComplete="off"
          ref={pass}
          required
        />

        <input
          type="button"
          value="Sign In"
          className=" rounded-xl text-lg text-slate-800 bg-orange-600 hover:bg-orange-500 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
          onClick={handlesubmit}
        />

        <h1 className="text-xl text-slate-300">won't have an account.</h1>
        <Link to="/" className="text-xl text-yellow-500  hover:underline ">
          Signup
        </Link>
      </form>
      {err ? (
        <h1 className=" bg-red-300 rounded-lg border-red-600 border-2 p-2 text-xl text-red-900">
          {err}
        </h1>
      ) : null}
    </main>): (< Navigate to='/profile'/>)
     
};

export default SignIn;