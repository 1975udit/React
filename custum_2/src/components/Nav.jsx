import React from "react";
import { Link} from "react-router-dom"

function Nav(){
    return (
        <div className="relative w-full bg-gray-600 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span className="text-white font-bold">CUSTOM</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-sm font-semibold text-white hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-sm font-semibold text-white hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-sm font-semibold text-white hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
        </div>
      </div>

    )
}

export default Nav;