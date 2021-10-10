import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authMiddleWare } from "../../utils/auth";
import { getToken } from "../../utils/Common";
import axios from "../../axios";

import Navbar from "../../components/shared/Navbar";

function RequestService({ user }) {
  let history = useHistory();
  // eslint-disable-next-line
  const [isError, setIsError] = useState(false);
  // eslint-disable-next-line
  const [loader, setLoader] = useState(false);

  const [vendors, setVendors] = useState([]);
  // eslint-disable-next-line
  const [selectedVendor, setSelectedVendor] = useState("");
  const [pricings, setPricings] = useState([]);
  // eslint-disable-next-line
  const userId = user.data._id;

  const [pickupDelivery, setPickupDelivery] = useState("");
  // eslint-disable-next-line
  const [extraDescription, setExtraDescription] = useState("");

  useEffect(() => {
    authMiddleWare(history);
    const authToken = getToken();

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get("/vendor/getAllvendors").then((response) => {
      setVendors(response.data.data);
    });
  }, [history]);

  useEffect(() => {
    authMiddleWare(history);
    const authToken = getToken();

    const url = selectedVendor
      ? `/vendor/${selectedVendor}/prices`
      : "/pricing";

    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
    axios.get(url).then((response) => {
      const res = response.data.data.map((price) => {
        return {
          id: price._id,
          itemName: price.itemName,
          price: price.price,
          estimatedTime: price.estimatedTime,
          quantity: "",
        };
      });
      setPricings(res);
    });
  }, [history, selectedVendor]);

  const handleQuantityChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...pricings];
    list[index][name] = value;
    setPricings(list);
  };

  const totalPrice = pricings.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  //Reset Pricing after sumbiting
  const resetTotal = () => {
    pricings.forEach((pricing) => {
      setPricings({ ...pricing, quantity: 0 });
    });
  };

  const makeOrder = async (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);

    pricings.forEach((pricing) => {
      const newOrder = {
        pricing: pricing._id,
        orderType: pickupDelivery,
        dropOffDate: new Date(),
        pickOffDate: pricing.estimatedTime,
        washType: "Express-wash",
      };

      axios
        .post("/order", newOrder)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            console.log(response);
            setLoader(false);
            setPickupDelivery("");
            resetTotal();
            window.location.reload();
          } else {
            setIsError(true);
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
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
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded rounded-t-xl">
              <div className="rounded mb-0 px-4 pt-6 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-xl text-blackcolor uppercase leading-6">
                      Request Service
                    </h3>

                    <div
                      className="w-full min-w-full block my-6"
                      style={{ height: "1px", background: "#e8e8e8" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <div className="flex flex-col md:flex-row px-2 py-2">
                  <div className="left px-2 w-full md:w-1/2 md:mb-14">
                    <div className="card border-solid border border-borderblue border-4xl rounded-4xl">
                      <div className="head min-h-48 px-5 text-base font-medium rounded-t-md border border-solid border-borderBottom border-t-0 border-r-0 border-l-0">
                        <div className="head-wrapper flex items-center">
                          <div className="head-title inline-block py-4 overflow-hidden whitespace-nowrap overflow-ellipsis flex-1 text-base text-blackcolor font-medium">
                            Please Select Vendor
                          </div>
                        </div>
                      </div>
                      <div className="body px-5 py-6">
                        <div className="mb-4">
                          <div>Please select an Address</div>
                          <div className="flex mt-4">
                            <div className="select-box w-52">
                              <div className=" w-52">
                                <select
                                  name="address"
                                  id="address"
                                  className="w-full h-8 border-borderbg border-solid"
                                  style={{ borderWidth: "1px" }}
                                >
                                  <option value=""></option>
                                  <option value=""></option>
                                </select>
                              </div>
                            </div>
                            <label
                              htmlFor=""
                              className="ml-4 flex items-center"
                            >
                              <span>
                                <input
                                  type="checkbox"
                                  name="useCurrentLocation"
                                  id="currentLocation"
                                />
                              </span>
                              <span className="px-2 text-sm text-ashtext2">
                                Use Current Location
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="w-full">
                          <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                              <tr>
                                <th className="px-8 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-r-0 border-t-0 whitespace-nowrap font-medium text-left">
                                  Name
                                </th>
                                <th className="px-6 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-t-0 border-r-0 whitespace-nowrap font-medium text-left">
                                  Address
                                </th>
                                <th className="px-6 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-t-0 border-r-0 whitespace-nowrap font-medium text-left">
                                  Distance
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {vendors.map((vendor) => {
                                return (
                                  <tr key={vendor._id}>
                                    <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-normal">
                                      {vendor.name}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {vendor.address}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      Xkm
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>

                          {!vendors && (
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
                  <div className="right px-2 w-full md:w-1/2">
                    <div className="card">
                      <div className="head min-h-48 px-5 text-base font-medium rounded-t-md border border-solid border-borderBottom border-t-0 border-r-0 border-l-0">
                        <div className="head-wrapper flex items-center">
                          <div className="head-title inline-block py-4 overflow-hidden whitespace-nowrap overflow-ellipsis flex-1 text-base text-blackcolor font-medium">
                            Please specify Items
                          </div>
                        </div>
                      </div>
                      <div className="body px-5 py-6">
                        <div className="w-full">
                          <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                              <tr>
                                <th className="px-8 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-r-0 border-t-0 whitespace-nowrap font-medium text-left">
                                  Quantity
                                </th>
                                <th className="px-6 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-t-0 border-r-0 whitespace-nowrap font-medium text-left">
                                  Garment
                                </th>
                                <th className="px-6 text-blackcolor align-middle border border-solid border-blueGray-100 py-3 text-sm capitalize border-l-0 border-t-0 border-r-0 whitespace-nowrap font-medium text-left">
                                  Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {pricings.map((pricing, index) => {
                                return (
                                  <tr key={pricing.id}>
                                    <th className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                      <input
                                        className="border bg-secondary px-3 py-1"
                                        type="number"
                                        min="0"
                                        name="quantity"
                                        value={pricing.quantity}
                                        onChange={(event) =>
                                          handleQuantityChange(index, event)
                                        }
                                      />
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {pricing.itemName}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                      {pricing.price}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                          {pricings.length === 0 && (
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
                        <div
                          className="w-full min-w-full block my-6"
                          style={{ height: "1px", background: "#e8e8e8" }}
                        ></div>
                        <div className="mt-6 total">
                          <span className="text-2.5xl text-ashtext2">
                            Total ₦{totalPrice}
                          </span>
                        </div>
                      </div>
                      <form method="post">
                        <div className="pick-up_delivery px-5 py-6">
                          <div className="w-full">
                            <div className="options flex mt-5 mb-2">
                              <div className="w-1/2">
                                <label htmlFor="selfDropPick">
                                  <input
                                    type="radio"
                                    name="pickupDeliveryMethod"
                                    value="Self Drop-off/Pickup"
                                    id="selfDropPick"
                                    onChange={(e) =>
                                      setPickupDelivery(e.target.value)
                                    }
                                    required
                                  />
                                  <span className="ml-3 text-ashtext2 text-sm">
                                    Self Drop-off/Pickup
                                  </span>
                                </label>
                              </div>
                              <div className="w-1/2">
                                <label htmlFor="venDropPick">
                                  <input
                                    type="radio"
                                    name="pickupDeliveryMethod"
                                    value="Vendor Pickup/Delivery"
                                    id="venDropPick"
                                    onChange={(e) =>
                                      setPickupDelivery(e.target.value)
                                    }
                                  />
                                  <span className="ml-3 text-ashtext2 text-sm">
                                    Vendor Pickup/Delivery
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="more-info mt-5 mb-2">
                              <textarea
                                name="more-info"
                                id="moreInfo"
                                cols="30"
                                rows="3"
                                className="w-full px-3 py-2 border border-solid rounded border-borderbg focus:border-primary"
                                onChange={(e) =>
                                  setExtraDescription(e.target.value)
                                }
                              ></textarea>
                            </div>
                            <div className="request-btn">
                              <button
                                type="submit"
                                className=" px-4 py-1 border border-borderbg bg-primary text-white"
                                onClick={makeOrder}
                              >
                                Make request
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestService;
