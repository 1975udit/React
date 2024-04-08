import React from "react";

function Footer(){
    return(
        <section className="bg-gray-600 relative overflow-hidden py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <span className="ml-4 text-white text-lg font-bold">CUSTOM</span>
                </div>
                <div>
                  <p className="mb-4  text-base font-medium">
                    The Custom Development Company
                  </p>
                  <p className="text-sm text-white">
                    © Copyright 2022. All Rights Reserved by CustomUI.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default Footer;