import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { setUserSession } from "../../utils/Common";

import MainNavigation from "../../components/shared/MainNavigation";
import github from "../../assets/socials/github.svg";
import google from "../../assets/socials/google.svg";

function Login() {
  let history = useHistory();

  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // handle button click of login form
  const handleLogin = (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);

    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          const role = response.data.user.role === "user" ? "U" : "V";
          setLoader(false);
          setUserSession(response.data.token, role);
          response.data.user.role === "user"
            ? history.push("/user/dashboard")
            : history.push("/vendor/dashboard");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoader(false);
      });
  };
  return (
    <>
      <MainNavigation />
      <div className="text-gray-800 antialiased">
        <section className="pt-10 w-full h-full bg-secondary">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full pb-10">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        <img alt="..." className="w-5 mr-1" src={github} />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        <img alt="..." className="w-5 mr-1" src={google} />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={handleLogin}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          aria-describedby="emailHelp"
                          style={{ transition: "all 0.15s ease 0s" }}
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all 0.15s ease 0s" }}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all 0.15s ease 0s" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          // disabled={!(validateForm() && loader)}
                          disabled={loader}
                          style={{
                            transition: "all 0.15s ease 0s",
                            background: loader ? "#ccc" : null,
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    {isError && (
                      <p>The username or password provided were incorrect!</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <Link to="/forgot-password" className="text-blackcolor">
                      <small>Forgot password?</small>
                    </Link>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/signup" className="text-blackcolor">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
