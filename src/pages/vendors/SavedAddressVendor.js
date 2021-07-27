import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";
import AddressModal from "../../components/shared/AddressModal";

function SavedAddressVendor({ user }) {
  let history = useHistory();
  const [addresses, setAddresses] = useState([]);
  const userId = user.data._id;

  //Fetch user saved address
  useEffect(() => {
    // authMiddleWare(history);
    const authToken = getToken();

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get("/location").then((response) => {
      setAddresses(response.data.data);
    });
  }, [history]);

  const userAddresses = addresses.filter(
    (location) => location.createdBy === userId
  );
  return (
    <>
      <div className="relative md:ml-64 bg-secondary h-screen">
        <Navbar
          title=""
          profileLink="/vendor/profile"
          savedAddressLink="/vendor/saved-address"
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
                      <th className="px-8 align-middle border border-solid border-borderBottom py-3 text-sm text-blackcolor capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Email
                      </th>
                      <th className="px-6 align-middle border border-solid border-borderBottom py-3 text-sm text-blackcolor capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Phone
                      </th>
                      <th className="px-6 align-middle border border-solid border-borderBottom py-3 text-sm text-blackcolor capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Address
                      </th>
                      <th className="px-6 align-middle border border-solid border-borderBottom py-3 text-sm text-blackcolor capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
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
                            340
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedAddressVendor;
