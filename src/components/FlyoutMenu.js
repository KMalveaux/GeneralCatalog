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
            className="accountNavButton text-white hover rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center0"
            type="button"
          >
            Account
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
              className={`z-10 ${showFlyoutMenu ? '' : 'hidden'} absolute mt-1 rounded-lg w-44 `}
            >
                <ul className="flyoutAccountButton">
                    <li>
                        <Link
                            to="/Login" // Update this path
                            className="flyoutLoginSignupBttns"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Signup" // Update this path
                            className="flyoutLoginSignupBttns"
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

