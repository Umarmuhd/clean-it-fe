import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";

function UserProfile(props) {
  let history = useHistory();

  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [userdata, setUserdata] = useState({
    id: "",
    name: "",
    email: "",
    occupation: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    authMiddleWare(history);
    const authToken = getToken();
    const url = `/auth/me`;

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get(url).then((response) => {
      const user = response.data.data;
      setUserdata({
        ...setUserdata,
        id: user._id,
        name: user.name,
        email: user.email,
        occupation: user.profession,
        phone: user.phone,
        image: user.image,
      });
    });
  }, [history]);

  const handleChange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setUserdata({ ...userdata, image: event.target.files[0] });
  };

  const updateFormValues = (event) => {
    event.preventDefault();

    setIsError(false);
    setLoader(true);

    authMiddleWare(history);
    const authToken = getToken();
    const url = `/auth/profile/${userdata.id}`;

    let form_data = new FormData();
    form_data.append("file", userdata.image);
    form_data.append("name", userdata.name);
    form_data.append("phone", userdata.phone);
    form_data.append("email", userdata.email);
    form_data.append("profession", userdata.occupation);

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios
      .put(url, form_data)
      .then((response) => {
        setLoader(false);
        console.log(response);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          history.push("/login");
        }
        console.log(error);
        setLoader(false);
        setIsError(true);
      });
  };

  return (
    <div className="relative md:ml-64 bg-secondary h-screen">
      <Navbar
        title=""
        profileLink="/user/profile"
        savedAddressLink="/user/saved-address"
      />
      <div className="user_profile pt-20">
        <div className="inner w-full mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="min-h-478">
              <div className="rounded-t mb-0 px-4 py-3 border-b border-solid border-gray-300">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-blackcolor">
                      User Profile
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <form className="py-4 px-8" onSubmit={updateFormValues}>
                  <div className="flex flex-col-reverse md:flex-row">
                    <div className="details w-full md:w-3/6 p-2 pl-0">
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          style={{ transition: "all .15s ease" }}
                          name="name"
                          value={userdata.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <input
                          type="email"
                          className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email Address"
                          style={{ transition: "all .15s ease" }}
                          name="email"
                          value={userdata.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <input
                          type="text"
                          className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Ocupation"
                          style={{ transition: "all .15s ease" }}
                          name="occupation"
                          value={userdata.occupation}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <input
                          type="tel"
                          className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone Number"
                          style={{ transition: "all .15s ease" }}
                          name="phone"
                          value={userdata.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="profile_pic w-full md:w-3/6 flex flex-col justify-center p-2 items-center">
                      <span className="justify-center rounded-full items-center flex bg-ashcolor w-60 h-60">
                        {
                          // userdata.image ? (
                          //   <img
                          //     src={userdata.image}
                          //     alt={userdata.name}
                          //     className="w-32 h-32"
                          //   />
                          // ) :
                          <svg
                            className="w-32 h-32"
                            width="1em"
                            height="1em"
                            viewBox="64 64 896 896"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                              fill="#FFFFFF"
                            />
                          </svg>
                        }
                      </span>

                      <div className="flex w-full items-center justify-center bg-grey-lighter mt-5">
                        <label
                          className="flex flex-col items-center px-4 py-1 bg-white text-blue rounded tracking-wide border border-borderbg cursor-pointer hover:bg-gray-200"
                          style={{
                            boxShadow: "0 2px 0 rgb(0 0 0 / 2%)",
                            transition:
                              "all .3s cubic-bezier(.645,.045,.355,1)",
                          }}
                        >
                          <span className="text-sm leading-6">
                            Click to Upload
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  {isError && <p>Unable to update profile</p>}
                  <div className="py-2 text-center">
                    <div
                      className="w-full min-w-full block my-6"
                      style={{ height: "1px", background: "#e8e8e8" }}
                    ></div>
                    <button
                      type="submit"
                      style={{
                        textShadow: "0 -1px 0 rgb(0 0 0 / 12%)",
                        boxShadow: "0 2px 0 rgb(0 0 0 / 5%)",
                        transition: "all .3s cubic-bezier(.645,.045,.355,1)",
                        background: loader ? "#ccc" : null,
                      }}
                      className="text-white bg-primary border-primary text-sm leading-6 rounded inline-block px-4 h-8"
                      disabled={loader}
                    >
                      <span>Update Profile</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
