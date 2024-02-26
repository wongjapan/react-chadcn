import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar w-full">
      <div className="flex flex-1 md:gap-1 lg:gap-2">
        <span
          className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
          data-tip="Menu"
        >
          <label
            aria-label="Open menu"
            htmlFor="drawer"
            className="btn btn-square btn-ghost drawer-button lg:hidden
            
          }"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
