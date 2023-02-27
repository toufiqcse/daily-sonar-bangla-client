import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../pages/shared/Footer/Footer";
import LeftSideNav from "../../pages/shared/LeftSideNav/LeftSideNav";
import Nav from "../../pages/shared/Nav/Nav/Nav";
import RightSideNav from "../../pages/shared/RightSideNav/RightSideNav";

const Rooot = () => {
  return (
    <div>
      <Nav />
      {/* =================main-layout============= */}
      <div className="container mx-auto my-4 flex justify-center ">
        <div className="w-1/4">
            <LeftSideNav/>
        </div>
        <div className="w-1/2">
            <Outlet/>
        </div>
        <div className="w-1/4">
            <RightSideNav/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooot;
