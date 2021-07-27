import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";
import PricingModal from "../../components/vendors/PricingModal";

function Pricing({ user }) {
  let history = useHistory();
  const [pricings, setPricings] = useState([]);
  const userId = user.data._id;

  useEffect(() => {
    // authMiddleWare(history);
    const authToken = getToken();
    const url = `/vendor/${userId}/prices`;

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get(url).then((response) => {
      setPricings(response.data.data);
    });
  }, [history, userId]);

  return (
    <>
      <div className="relative md:ml-64 bg-secondary h-screen">
        <Navbar
          title="Pricing"
          profileLink="/vendor/profile"
          savedAddressLink="/vendor/saved-address"
        />
        <div className="my_saved_address pt-20">
          <div className="inner w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blackcolor">
                      Laundry Pricings
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <PricingModal id={userId} />
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Garments
                      </th>
                      <th className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Price
                      </th>
                      <th className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Description
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Estimated Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricings.map((pricing) => {
                      return (
                        <tr key={pricing._id}>
                          <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-normal">
                            {pricing.itemName}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {pricing.price}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {pricing.description}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {pricing.estimatedTime}
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

export default Pricing;
