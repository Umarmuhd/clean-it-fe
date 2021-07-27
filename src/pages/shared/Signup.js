import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { setUserSession } from "../../utils/Common";

import MainNavigation from "../../components/shared/MainNavigation";
import github from "../../assets/socials/github.svg";
import google from "../../assets/socials/google.svg";

function Signup() {
  let history = useHistory();

  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // handle button click of signup form
  const handleSignup = async (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);
    const userData = {
      name: name,
      password: password,
      email: email,
      role: role,
      address: "no 123 Lagos, Nigeria",
      phone: "08123456789",
    };
    await axios
      .post("/auth/register", userData)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          setLoader(false);
          setUserSession(response.data.token);
          userData.role === "user"
            ? history.push("/user/dashboard")
            : history.push("/vendor/dashboard");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
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
                        Sign up with
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
                      <small>Or Sign up with credentials</small>
                    </div>
                    <form onSubmit={handleSignup}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          aria-describedby="nameHelp"
                          style={{ transition: "all 0.15s ease 0s" }}
                          id="fullName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
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
                      <div className="flex flex-wrap mt-4">
                        {" "}
                        <div className="w-1/2">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="role"
                              type="radio"
                              value="user"
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              onChange={(e) => setRole(e.target.value)}
                              style={{ transition: "all 0.15s ease 0s" }}
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">
                              <small>Sign up as a User</small>
                            </span>
                          </label>
                        </div>
                        <div className="w-1/2 flex justify-end">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="role"
                              type="radio"
                              value="vendor"
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              onChange={(e) => setRole(e.target.value)}
                              style={{ transition: "all 0.15s ease 0s" }}
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">
                              <small>Sign up as a Vendor</small>
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all 0.15s ease 0s" }}
                          disabled={loader}
                        >
                          Create account
                        </button>
                      </div>
                    </form>
                    {isError && <p>Email already exist</p>}
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 text-center">
                  <div className="w-full text-center flex justify-center">
                    <p>
                      <small>Already got an account?</small>
                    </p>
                    <Link to="/login" className="text-primary ml-2">
                      <small> Login here</small>
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

export default Signup;
