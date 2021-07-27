import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/shared/Navbar";

function DashboardVendor() {
  // const [recentOrders, setRecentOrders] = useState([]);
  const [recentOrders] = useState([]);
  return (
    <>
      <div className="relative md:ml-64 bg-secondary">
        <Navbar
          title="Dashboard"
          profileLink="/vendor/profile"
          savedAddressLink="/vendor/saved-address"
        />

        <div className="vendor_stats pt-10 md:pt-20 p-4">
          <div className="mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 pr-0 md:pr-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-6">
                      <div className="content">
                        <p className="stat-title mb-1 text-ashtext text-1xl leading-6">
                          Total Orders
                        </p>
                        <div className="stat-content text-2xl leading-6 text-blackcolor">
                          <span className="stat-value">0</span>
                          <span className="stat-suffix ml-1 text-base">
                            Order(s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 px-0 md:px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-6">
                      <div className="content">
                        <p className="stat-title mb-1 text-ashtext text-1xl leading-6">
                          Completed orders
                        </p>
                        <div className="stat-content text-2xl leading-6 text-blackcolor">
                          <span className="stat-value">0</span>
                          <span className="stat-suffix ml-1 text-base">
                            Order(s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 px-0 md:px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-6">
                      <div className="content">
                        <p className="stat-title mb-1 text-ashtext text-1xl leading-6">
                          Delivered Orders
                        </p>
                        <div className="stat-content text-2xl leading-6 text-blackcolor">
                          <span className="stat-value">0</span>
                          <span className="stat-suffix ml-1 text-base">
                            Order(s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 pl-0 md:pl-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-6">
                      <div className="content">
                        <p className="stat-title mb-1 text-ashtext text-1xl leading-6">
                          Pending Orders
                        </p>
                        <div className="stat-content text-2xl leading-6 text-blackcolor">
                          <span className="stat-value">0</span>
                          <span className="stat-suffix ml-1 text-base">
                            Order(s)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent_order mt-4">
          <div className="inner w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-black">
                      Recent Requests
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to="/vendor/order">
                      <button
                        className="text-primary active:bg-primary text-xs font-bold px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all orders
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-8 bg-tableheadbg text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date Created
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Client Name
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Address
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Order Status
                      </th>
                      <th className="px-6 bg-tableheadbg text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Price
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
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        319
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        319
                      </td>
                    </tr> */}
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
      </div>
    </>
  );
}

export default DashboardVendor;
