import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/cleanit-logo.png";

export default function SidebarVendor({ handleLogout }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H20M4 6H20H4ZM4 12H20H4Z"
                stroke="#3F3F46"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 mb-4"
            to="/"
          >
            <img src={logo} alt="..." className=" w-28" />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Clean It
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6L18 18M6 18L18 6L6 18Z"
                        stroke="#3F3F46"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center sidebar-nav-item">
                <NavLink
                  className="text-sm capitalize py-3 px-3 font-medium block flex items-center text-blackcolor hover:font-semibold"
                  to="/vendor/dashboard"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Dashboard
                </NavLink>
              </li>

              <li className="items-center sidebar-nav-item">
                <NavLink
                  className="text-blackcolor hover:font-semibold text-sm capitalize py-3 px-3 font-medium block flex items-center"
                  to="/vendor/order"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M9 12H15M9 16H15M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H12.586C12.8512 3.00006 13.1055 3.10545 13.293 3.293L18.707 8.707C18.8946 8.89449 18.9999 9.1488 19 9.414V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Order
                </NavLink>
              </li>

              <li className="items-center sidebar-nav-item">
                <NavLink
                  className="text-blackcolor hover:font-semibold text-sm capitalize py-3 px-3 font-medium block flex items-center"
                  to="/vendor/pricing"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M11.9999 8.99999V11M11.9999 15H12.0099M5.07192 19H18.9279C20.4679 19 21.4299 17.333 20.6599 16L13.7319 3.99999C12.9619 2.66699 11.0379 2.66699 10.2679 3.99999L3.33992 16C2.56992 17.333 3.53192 19 5.07192 19Z"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Pricing
                </NavLink>
              </li>

              <li className="items-center sidebar-nav-item">
                <a
                  className="text-blackcolor hover:font-semibold text-sm capitalize py-3 px-3 font-medium block flex items-center"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M13.675 4.317C13.249 2.561 10.751 2.561 10.325 4.317C10.049 5.452 8.749 5.99 7.753 5.382C6.209 4.442 4.443 6.209 5.383 7.752C5.5243 7.98375 5.60889 8.24559 5.62987 8.51621C5.65085 8.78683 5.60764 9.05859 5.50375 9.30935C5.39985 9.56011 5.23822 9.7828 5.032 9.95929C4.82578 10.1358 4.5808 10.2611 4.317 10.325C2.561 10.751 2.561 13.249 4.317 13.675C4.58056 13.7391 4.82529 13.8645 5.03127 14.0409C5.23726 14.2174 5.3987 14.44 5.50247 14.6906C5.60624 14.9412 5.64942 15.2128 5.62848 15.4832C5.60755 15.7537 5.5231 16.0153 5.382 16.247C4.442 17.791 6.209 19.557 7.752 18.617C7.98375 18.4757 8.24559 18.3911 8.51621 18.3701C8.78683 18.3491 9.05859 18.3924 9.30935 18.4963C9.56011 18.6001 9.7828 18.7618 9.95929 18.968C10.1358 19.1742 10.2611 19.4192 10.325 19.683C10.751 21.439 13.249 21.439 13.675 19.683C13.7391 19.4194 13.8645 19.1747 14.0409 18.9687C14.2174 18.7627 14.44 18.6013 14.6906 18.4975C14.9412 18.3938 15.2128 18.3506 15.4832 18.3715C15.7537 18.3924 16.0153 18.4769 16.247 18.618C17.791 19.558 19.557 17.791 18.617 16.248C18.4757 16.0162 18.3911 15.7544 18.3701 15.4838C18.3491 15.2132 18.3924 14.9414 18.4963 14.6907C18.6001 14.4399 18.7618 14.2172 18.968 14.0407C19.1742 13.8642 19.4192 13.7389 19.683 13.675C21.439 13.249 21.439 10.751 19.683 10.325C19.4194 10.2609 19.1747 10.1355 18.9687 9.95905C18.7627 9.78258 18.6013 9.55999 18.4975 9.30938C18.3938 9.05877 18.3506 8.78721 18.3715 8.51677C18.3924 8.24634 18.4769 7.98466 18.618 7.753C19.558 6.209 17.791 4.443 16.248 5.383C16.0162 5.5243 15.7544 5.60889 15.4838 5.62987C15.2132 5.65085 14.9414 5.60764 14.6907 5.50375C14.4399 5.39985 14.2172 5.23822 14.0407 5.032C13.8642 4.82578 13.7389 4.5808 13.675 4.317Z"
                      stroke="#3F3F46"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213Z"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Settings (soon)
                </a>
              </li>

              <li className="items-center sidebar-nav-item">
                <a
                  className="text-blackcolor hover:font-semibold text-sm capitalize py-3 px-3 font-medium block flex items-center"
                  href="#logout"
                  onClick={handleLogout}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M17 16L21 12M21 12L17 8M21 12H7M13 16V17C13 17.7956 12.6839 18.5587 12.1213 19.1213C11.5587 19.6839 10.7956 20 10 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H10C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V8"
                      stroke="#3F3F46"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
