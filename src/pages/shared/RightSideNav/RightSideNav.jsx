import React from "react";
import {BsGoogle,BsGithub,BsYoutube,BsWhatsapp,BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
const RightSideNav = () => {
  return (
    <div>
      <div className="flex flex-col mb-2">
        <button
            className="focus:text-white font-medium border-2 border-red-500 transition duration-300 focus:bg-red-500 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none"
            >
            <BsGoogle></BsGoogle>
            <p className="mx-auto">Sign in with Google</p>
        </button>
        <button
            className="focus:text-white font-medium border-2 border-blue-500 transition duration-300 focus:bg-blue-500 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none"
            >
            <FaFacebookSquare></FaFacebookSquare>
            <p className="mx-auto">Sign in with Facebook</p>
        </button>
      </div>
      {/*================ find us on =============*/}
      <div>
        <p className="text-xl">Find us on</p>

        <div className="flex flex-col">
            <button
                className="focus:text-white text-green-400 font-medium border-2  border-b-0 border-gray-300 transition duration-300 focus:bg-slate-400 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0  px-4  outline-none"
                >
                <BsWhatsapp></BsWhatsapp>
                <p className="mx-4">Whatsapp</p>
            </button>
            <button
                className="focus:text-white text-slate-700 font-medium border-2 border-b-0 border-gray-300 transition duration-300 focus:bg-slate-400 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0  px-4  outline-none"
                >
                <BsGithub></BsGithub>
                <p className="mx-4">Github</p>
            </button>
            <button
                className="focus:text-white text-pink-500 font-medium border-2 border-b-0 border-gray-300 transition duration-300 focus:bg-slate-400 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0  px-4  outline-none"
                >
                <BsInstagram></BsInstagram>
                <p className="mx-4">Instagram</p>
            </button>
            <button
                className="focus:text-white text-red-500 font-medium border-2 border-gray-300 transition duration-300 focus:bg-slate-400 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0  px-4  outline-none"
                >
                <BsYoutube></BsYoutube>
                <p className="mx-4">Youtube</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
