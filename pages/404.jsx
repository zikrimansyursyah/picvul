import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../components/header";

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
            src="/cdn/webassets/picvul-logo.png"
            alt="picvul-logo"
            width={50}
            height={50}
            blurDataURL="/cdn/webassets/loading.webp"
            placeholder="blur"
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
          src="/cdn/webassets/404.webp"
          alt="404-not-found"
          width={400}
          height={400}
          blurDataURL="/cdn/webassets/loading.webp"
          placeholder="blur"
        />
        <h1 className=" text-5xl font-semibold">OOPS.</h1>
        <div className="text-gray-700 text-2xl text-center">
          We can&apos;t seem to find the page you are looking for
        </div>
      </div>
    </>
  );
}
