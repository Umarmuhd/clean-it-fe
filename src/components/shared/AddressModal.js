import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

export default function Modal({ id }) {
  let history = useHistory();
  const [showModal, setShowModal] = React.useState(false);
  // eslint-disable-next-line
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);
    authMiddleWare(history);

    const authToken = getToken();
    const newAddress = { address, email, phone };
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };

    await axios.post("/location", newAddress).then((response) => {
      console.log(response);
      window.location.reload();
    });
    setShowModal(false);
    setEmail("");
    setPhone("");
    setAddress("");
  };
  return (
    <>
      <button
        className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6V9H14C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14V11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H9V6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5Z"
            fill="#FFFFFF"
          />
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg md:w-5/12">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-4 px-6 border-b border-solid border-borderbg rounded-t">
                  <h3 className="text-base font-medium text-blackcolor leading-5">
                    Add Address
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit} id="addressForm">
                    <div className="relative w-full mb-3">
                      <input
                        type="email"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email Address"
                        style={{ transition: "all .15s ease" }}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <input
                        type="text"
                        className="border border-solid border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Address"
                        style={{ transition: "all .15s ease" }}
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex flex-col-reverse p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-blackcolor background-transparent border-primary rounded border capitalize px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full hover:text-primary mt-4"
                    style={{ background: loader ? "#ccc" : null }}
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={loader}
                  >
                    Close
                  </button>
                  <button
                    className="bg-primary text-white capitalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
                    form="addressForm"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
