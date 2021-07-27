import React from "react";

function Testimonials() {
  return (
    <>
      <div className="py-20 bg-secondary">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <div className="text-center">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              TESTIMONIALS
            </p>
            {/* <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900"> */}
            <h3 className="text-4xl font-semibold">
              What our <span className="text-primary">Clients say?</span>
            </h3>
          </div>

          <div className="mt-20">
            <div className="sm:flex items-center">
              <div className="text-left">
                <div className="mb-4 text-gray-500">
                  <svg
                    height="35px"
                    className="mb-2"
                    fill="#1890ff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    // xml:space="preserve"
                  >
                    <g>
                      <g id="right_x5F_quote">
                        <g>
                          <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                          <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p className="mt-2 text-base leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                  <div className="text-sm mt-5">
                    <a
                      href="#jonathan"
                      className="font-medium leading-none text-gray-900 hover:text-primary transition duration-500 ease-in-out"
                    >
                      Jonathan Reinink
                    </a>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
              <img
                className="w-full h-full sm:w-48 sm:h-48 h-full rounded-full sm:ml-10"
                src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg"
                alt="Avatar of Jonathan Reinink"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
