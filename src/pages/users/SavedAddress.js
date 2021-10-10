import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";
import AddressModal from "../../components/shared/AddressModal";

function SavedAddress({ user }) {
  let history = useHistory();
  const [addresses, setAddresses] = useState([]);
  // eslint-disable-next-line
  const [currentAddress, setCurrentAddress] = useState({});
  const userId = user.data._id;

  //Fetch user saved address
  useEffect(() => {
    authMiddleWare(history);
    const authToken = getToken();
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get("/location").then((response) => {
      setAddresses(response.data.data);
    });
  }, [history]);

  const userAddresses = addresses.filter(
    (location) => location.createdBy === userId
  );
  // eslint-disable-next-line
  const editAddress = (data) => {};
  // eslint-disable-next-line
  const deleteAddressHandler = (data) => {
    authMiddleWare(history);
    const authToken = getToken();
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    let addressId = data._id;
    axios
      .delete(`location/${addressId}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative md:ml-64 bg-secondary h-screen">
        <Navbar
          title=""
          profileLink="/user/profile"
          savedAddressLink="/user/saved-address"
        />
        <div className="my_saved_address pt-10 md:pt-20">
          <div className="inner w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-blackcolor">
                      Saved Address
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <AddressModal />
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-8 text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Email
                      </th>
                      <th className="px-6 text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Phone
                      </th>
                      <th className="px-6 text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Address
                      </th>
                      <th className="px-6 text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userAddresses.map((address) => {
                      return (
                        <tr key={address._id}>
                          <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-normal">
                            {address.email}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {address.phone}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {address.address}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button className="mr-2">edit</button>
                            <button>delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {addresses.length === 0 && (
                  <div className="w-full flex flex-col items-center justify-center py-10">
                    <div className="empty-image">
                      <svg
                        width="64"
                        height="41"
                        viewBox="0 0 64 41"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(0 1)"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <ellipse
                            fill="#F5F5F5"
                            cx="32"
                            cy="33"
                            rx="32"
                            ry="7"
                          ></ellipse>
                          <g fillRule="nonzero" stroke="#D9D9D9">
                            <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                            <path
                              d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                              fill="#FAFAFA"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="empty-description text-ashtext3 text-sm">
                      No Data
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedAddress;
