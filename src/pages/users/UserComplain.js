import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";

function UserComplain({ user }) {
  let history = useHistory();

  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [orderId, setOrderId] = useState("");
  const [complain, setComplain] = useState("");

  function validateForm() {
    return orderId.length > 0 && complain.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsError(false);
    setLoader(true);
    authMiddleWare(history);
    const authToken = getToken();
    const url = `/order/${orderId}/complains`;
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    await axios.post(url, { complain }).then((response) => {
      console.log(response);
      setLoader(false);
    });
  }
  return (
    <>
      <div className="relative md:ml-64 bg-secondary h-screen">
        <Navbar
          title="Make Complain"
          profileLink="/user/profile"
          savedAddressLink="/user/saved-address"
        />
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 mb:px-4">
          <div className="make_your_complain pt-10 md:pt-20">
            <div className="inner w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded min-h-60">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-medium text-base text-blackcolor">
                        PLEASE STATE YOUR COMPLAINT
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <form className="px-8 py-6" onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-700 text-sm mb-2"
                        htmlFor="order-id"
                      >
                        Order ID
                      </label>
                      <input
                        type="text"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="please type in or paste your order id"
                        style={{ transition: "all .15s ease" }}
                        required
                        autoFocus
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <textarea
                        type="text"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="please type in or paste your order id"
                        style={{ transition: "all .15s ease" }}
                        required
                        cols="30"
                        rows="10"
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!validateForm() && loader}
                      className="text-white px-6 py-2 bg-primary"
                      style={{ background: loader ? "#ccc" : null }}
                    >
                      Submit Complain
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserComplain;
