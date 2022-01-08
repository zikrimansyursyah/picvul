import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../components/header";
import webAssets from "../db/assets.json";
import Loader from "../components/imgLoader";

export default function NotFound() {
  const [Count, setCount] = useState(10);
  const router = useRouter();
  useEffect(() => {
    let x = setInterval(() => {
      if (Count == 0) {
        clearInterval(x);
        router.push("/");
      } else {
        setCount((Count -= 1));
      }
    }, 1000);
  });

  return (
    <>
      <Header pageTitle={"404 Not Found"} />
      <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
        <div className="flex gap-2">
          <Image
            loader={Loader}
            src={webAssets.picvul_logo}
            alt="picvul-logo"
            width={50}
            height={50}
          />
          <div className=" text-gray-700 text text-4xl font-thin font-ubuntu">
            picvul
          </div>
        </div>
        <div className="text-lg font-thin">
          you will automatic redirect to home on
        </div>
        <div className="time font-semibold text-lg">{Count}</div>
        <Image
          loader={Loader}
          src={webAssets[404]}
          alt="404-not-found"
          width={400}
          height={400}
        />
        <h1 className=" text-5xl font-semibold">OOPS.</h1>
        <div className="text-gray-700 text-2xl text-center">
          We can&apos;t seem to find the page you are looking for
        </div>
      </div>
    </>
  );
}
