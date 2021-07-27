import React from "react";
import { Link } from "react-router-dom";

import MainNavigation from "../../components/shared/MainNavigation";
import AnimLoader from "../../components/shared/AnimLoader";
import hero from "../../assets/svg/hero.svg";
import Testimonials from "../../components/shared/Testimonials";
import Footer from "../../components/shared/Footer";

function Home() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* <AnimLoader /> */}
        <section className="hero relative pt-16 pb-14 flex content-center justify-center min-h-screen bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap flex-col-reverse md:flex-row">
              <div className="left w-full lg:w-6/12 pt-6 text-center md:text-left">
                <h1 className="text-primary font-bold text-5xl">
                  Let us help you worry-less about your laundry needs
                </h1>
                <p className="mt-4 text-basetext-blackcolor mb-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quis excepturi corporis numquam impedit, vel
                  reiciendis laboriosam mollitia inventore eligendi, itaque cum
                  quaerat nisi reprehenderit distinctio officia a aspernatur
                  fuga nulla in quisquam dicta! Reiciendis repellendus doloribus
                  voluptate tempora doloremque.
                </p>
                <Link
                  to="/signup"
                  className="text-lg bg-primary px-7 py-4 text-white font-bold rounded-xl"
                >
                  Get Started
                </Link>
              </div>
              <div className="right md:pl-12">
                <img
                  src={hero}
                  alt="hero"
                  className="md:w-11/12 mx-auto w-9/12"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services pb-20 pt-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-semibold">Our Services</h2>
            <p className="text-lg leading-relaxed my-4 mx-auto text-gray-600 w-full md:w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              placeat in cumque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis cum minima quisquam aut sed eius?
            </p>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Dry Cleaning</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Ironing</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 min-h-48 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Carpet Washing</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about pt-5 pb-10 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold text-center">About Us</h2>
            <div className="flex flex-wrap items-center mt-8">
              <div className="w-full md:w-5/12 px-4 mr-auto">
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto"></div>
            </div>
          </div>
        </section>

        <section className="how-it-works relative py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">How it works?</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Get started in 4 easy steps.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary mr-3"></span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Lorem ipsum dolor sit amet.
                          </h4>
                        </div>
                      </div>
                    </li>

                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary mr-3"></span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Lorem ipsum dolor sit amet.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default Home;
