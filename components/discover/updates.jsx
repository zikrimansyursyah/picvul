import Image from "next/image";
import { useState } from "react";

export default function Updates() {
  const [HideUpdates, setHideUpdates] = useState(false);
  return (
    <>
      <button
        className={`mb-5 bg-blue-400 font-semibold text-white py-1 px-3 rounded-xl hover:bg-blue-500 hover:motion-safe:duration-500 hover:shadow-lg ${
          HideUpdates ? "block" : "hidden"
        }`}
        onClick={() => {
          setHideUpdates(false);
        }}
      >
        Show Updates
      </button>
      <div
        className={`font-semibold mb-10 ${HideUpdates ? "hidden" : "block"}`}
      >
        <div className="flex justify-between">
          <h1>People Updates</h1>
          <a
            className="font-normal cursor-pointer"
            onClick={() => {
              setHideUpdates(true);
            }}
          >
            Hide
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-3">
          <div className="flex justify-center">
            <UpdatesCard />
          </div>
          <div className="hidden lg:block">
            <UpdatesCard />
          </div>
          <div className="hidden xl:block">
            <UpdatesCard />
          </div>
          <div className="hidden 2xl:block">
            <UpdatesCard />
          </div>
          <div className="hidden md:block">
            <div className="absolute z-20 translate-x-20 h-32 w-52 flex justify-center items-center bg-gradient-to-r from-transparent to-gray-50">
              <div className="bg-white px-4 py-1 rounded-full text-gray-600">
                see more
              </div>
            </div>
            <UpdatesCard />
          </div>
        </div>
      </div>
    </>
  );
}

const UpdatesCard = ({ username, userFoto, isFolowing, userPost }) => {
  return (
    <div className="content pt-2 max-w-max scale-up-hor-left">
      <div className="absolute translate-y-2 h-16 w-16 border-2 border-white rounded-full z-10">
        <Image
          className="rounded-full object-cover"
          src="/profile.JPG"
          alt="profile"
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-1 pl-8 mb-2">
        <div className="h-20 w-20">
          <Image
            className="rounded-lg object-cover"
            src="/content/pic1.webp"
            alt="pic1"
            height={100}
            width={100}
          />
        </div>
        <div className="h-20 w-20">
          <Image
            className="rounded-lg object-cover"
            src="/content/pic2.webp"
            alt="pic1"
            height={100}
            width={100}
          />
        </div>
        <div className="h-20 w-20">
          <Image
            className="rounded-lg object-cover"
            src="/content/pic3.webp"
            alt="pic1"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="flex justify-between pl-8 text-sm">
        <div>Zikri Mansyursyah</div>
        <div className="text-gray-400">Following</div>
      </div>
    </div>
  );
};
