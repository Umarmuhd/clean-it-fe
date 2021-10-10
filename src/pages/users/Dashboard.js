import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";

function Dashboard({ user }) {
  let history = useHistory();
  const [orders, setOrders] = useState([]);
  const [recentVendors] = useState([]);
  const userId = user.data._id;

  useEffect(() => {
    authMiddleWare(history);
    const authToken = getToken();
    const url = `/auth/${userId}/order`;

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get(url).then((response) => {
      setOrders(response.data.data);
    });
  }, [history, userId]);

  //Recent Orders - Last 5 orders
  const recentOrders = orders.slice(Math.max(orders.length - 5, 0));

  return (
    <>
      <div className="relative md:ml-64 bg-secondary">
        <Navbar
          title="Dashboard"
          profileLink="/user/profile"
          savedAddressLink="/user/saved-address"
        />

        <div className="make_request make_request pt-10 md:pt-20 p-4">
          <div className="inner text-center bg-white min-h-60 flex items-center justify-center">
            <div className="content">
              <h1 className="font-semibold leading-tight text-4xl mb-8">
                How may we be of help to you today?
              </h1>
              <Link
                to="/user/request-service"
                className="text-white px-8 py-4 bg-primary"
              >
                Make Request
              </Link>
            </div>
          </div>
        </div>
        <div className="recent_order mt-4">
          <div className="inner w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-blackcolor">
                      Recent Requests
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-8 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Vendor
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Order ID
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => {
                      return (
                        <tr key={order._id}>
                          <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-normal">
                            Vendor X
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {order._id}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {order.orderStatus}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {recentOrders.length === 0 && (
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
        <div className="most_recent_vendors mt-4">
          <div className="inner w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-medium text-base text-blackcolor">
                      Most Recent Vendors
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-8 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Vendor
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Orders Completed
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-borderBottom py-3 text-sm capitalize border-l-0 border-r-0 whitespace-nowrap font-medium text-left">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        /argon/index.html
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        3,985
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        319
                      </td>
                    </tr> */}
                  </tbody>
                </table>
                {recentVendors.length === 0 && (
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

export default Dashboard;
