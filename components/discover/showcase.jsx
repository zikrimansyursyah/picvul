export default function Showcase() {
  return (
    <div className="font-semibold">
      <h1>Picvul Showcase</h1>
      <div className="menu flex justify-between mt-4">
        <button className="flex items-center gap-2 border py-2 px-3 rounded-full text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <div className="font-semibold text-sm">Popular</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="menu-list flex gap-5">
          <button className="border px-3 rounded-full border-transparent bg-slate-800 text-white">
            All Categories
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            3D Design
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            Product Design
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            Illustration
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            NFT
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            UIUX Design
          </button>
          <button className="border px-3 rounded-full border-transparent bg-white hover:bg-slate-800 hover:text-white motion-safe:duration-500">
            Animation
          </button>
        </div>
        <button className="flex items-center gap-2 border py-2 pl-3 pr-4 rounded-full text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <div className="font-semibold text-sm">Filters</div>
        </button>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 pt-5">
          <div className="card p-1.5 bg-white h-fit rounded-xl group hover:scale-105 hover:motion-safe:duration-500 hover:shadow-xl">
            <div className="h-40 p-3 bg-[url('/content/card-1.jpg')] rounded-xl bg-cover bg-center flex flex-col group-hover:shadow-lg">
              <a
                href="#"
                className="p-2 bg-white rounded-md h-fit w-fit self-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="py-1.5 px-3 rounded-full bg-white font-semibold w-fit text-sm self-center mt-5 hidden group-hover:block hover:scale-105 hover:motion-safe:duration-500"
              >
                Details
              </a>
            </div>
            <div className="absolute -translate-y-6 translate-x-2 border-2 border-white bg-[url('/profile.JPG')] rounded-full h-12 w-12 bg-cover bg-center"></div>
            <div className="flex justify-between px-1.5 mt-8 mb-3 font-semibold text-sm">
              <a href="#">Zikri Mansyursyah</a>
              <a href="#" className="text-blue-400">
                Follow
              </a>
            </div>
          </div>
          <div className="card p-1.5 bg-white h-fit rounded-xl group hover:scale-105 hover:motion-safe:duration-500 hover:shadow-xl">
            <div className="h-40 p-3 bg-[url('/content/card-1.jpg')] rounded-xl bg-cover bg-center flex flex-col group-hover:shadow-lg">
              <a
                href="#"
                className="p-2 bg-white rounded-md h-fit w-fit self-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="py-1.5 px-3 rounded-full bg-white font-semibold w-fit text-sm self-center mt-5 hidden group-hover:block hover:scale-105 hover:motion-safe:duration-500"
              >
                Details
              </a>
            </div>
            <div className="absolute -translate-y-6 translate-x-2 border-2 border-white bg-[url('/profile.JPG')] rounded-full h-12 w-12 bg-cover bg-center"></div>
            <div className="flex justify-between px-1.5 mt-8 mb-3 font-semibold text-sm">
              <a href="#">Zikri Mansyursyah</a>
              <a href="#" className="text-blue-400">
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
