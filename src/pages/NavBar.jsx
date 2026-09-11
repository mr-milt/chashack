import React from "react";

import codecats from "../assets/codecats.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex gap-3 shadow-md justify-end items-center text-center text-3xl">
      <div className="flex flex-1 items-center text-center mx-3">
        <div>
          <Link to={'/'}>
            <img
              className="w-20 items-center text-center"
              src={codecats}
              alt="Code Cats logo"
            />
          </Link>
        </div>
        <div>
          <div className="items-center text-center text-blue">
            <Link to={"/aboutus"} className="">
              About us
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center text-center mx-3">
        <div></div>
      </div>
    </div>
  );
}
