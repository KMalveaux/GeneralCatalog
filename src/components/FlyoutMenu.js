import React, { useState } from 'react';
import "../css/FlyoutMenu.css"
import { Link } from 'react-router-dom';

const FlyoutMenu = () => {
    const [showFlyoutMenu, setShowFlyoutMenu] = useState(false);
  
    const toggleFlyoutMenu = () => {
      setShowFlyoutMenu(!showFlyoutMenu);
    };
  
    return (
        <>
          <button
            id="flyoutMenuOffsetButton"
            onClick={toggleFlyoutMenu}
            className="text-white hover focus:ring-4 focus:outline-none  font-sm rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center0"
            type="button"
          >
            <h1>Account</h1>
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {showFlyoutMenu && (
            <div
              id="flyoutOffset"
              className={`z-10 ${showFlyoutMenu ? '' : 'hidden'} absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
                <ul className="flyoutAccountButton">
                    <li>
                        <Link
                            to="/Login" // Update this path
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Signup" // Update this path
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
          )}
        </>
      );
  };
  
  export default FlyoutMenu;

