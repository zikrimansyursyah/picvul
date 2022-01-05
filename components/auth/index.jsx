import { useState } from "react";
import Image from "next/image";
import Login from "./login";
import Register from "./register";
import Alert from "../alert";

export default function Auth() {
  const [Form, setForm] = useState(true);
  const [OpenAlert, setOpenAlert] = useState(false);
  const [AlertMessage, setAlertMessage] = useState(null);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        {Form ? (
          <Login
            setForm={setForm}
            setOpenAlert={setOpenAlert}
            setAlertMessage={setAlertMessage}
          />
        ) : (
          <Register setForm={setForm} />
        )}
      </div>
      <div className="w-1/2 h-screen hidden md:block">
        <div className="h-full w-full p-10 bg-login1 bg-cover bg-center flex justify-end items-end">
          <div className=" w-fit p-5 bg-gradient-to-b from-white/50 to-gray-100/40 backdrop-blur-xs rounded-sm">
            <div className="">
              <div className="flex items-center gap-4">
                <Image
                  src="/picvul-logo.png"
                  alt="picvul-logo"
                  width={50}
                  height={50}
                />
                <div className="h-10 pl-4 border-l font-semibold font-primary text-lg text-gray-900 flex items-center">
                  Designed by Zikri Mansyursyah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {OpenAlert ? (
        <Alert message={AlertMessage} setOpenAlert={setOpenAlert} />
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
}
