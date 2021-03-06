import { useState } from "react";
import Image from "next/image";
import Login from "./login";
import Register from "./register";
import Alert from "../alert";

export default function Auth() {
  const [Form, setForm] = useState(true);
  const [LoadState, setLoadState] = useState(false);
  const [TheAlert, setTheAlert] = useState({
    type: false,
    message: "",
    isOpen: false,
  });

  return (
    <div className="w-screen h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        {Form ? (
          <Login
            setForm={setForm}
            setAlert={setTheAlert}
            setLoadState={setLoadState}
          />
        ) : (
          <Register
            setForm={setForm}
            setAlert={setTheAlert}
            setLoadState={setLoadState}
          />
        )}
      </div>
      <div className="w-1/2 h-screen hidden md:block">
        <div className="h-full w-full p-10 bg-[url(/cdn/webassets/login2.webp)] bg-cover bg-center flex justify-end items-end">
          <div className=" w-fit p-5 bg-gradient-to-b from-white/50 to-gray-100/40 backdrop-blur-xs rounded-sm">
            <div className="">
              <div className="flex items-center gap-4">
                <Image
                  src="/cdn/webassets/picvul-logo.png"
                  alt="picvul-logo"
                  width={50}
                  height={50}
                  blurDataURL="/cdn/webassets/loading.webp"
                  placeholder="blur"
                />
                <div className="h-10 pl-4 border-l font-semibold font-primary text-lg text-gray-900 flex items-center">
                  Designed by Zikri Mansyursyah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {TheAlert.isOpen ? (
        <Alert setAlert={TheAlert} isOpen={setTheAlert} />
      ) : (
        <div className="hidden"></div>
      )}
      {LoadState ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg shadow-2xl font-semibold bg-[#FCFCFC] flex flex-col items-center">
          <Image
            src="/cdn/webassets/loading-state.gif"
            alt="loading"
            width={100}
            height={100}
          />
          Processing...
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
}
