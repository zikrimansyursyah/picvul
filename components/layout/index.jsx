import Image from "next/image";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <nav className="border-b fixed w-screen glass z-20">
        <div className="container mx-auto flex justify-between px-3">
          <div className="user flex items-center gap-3 py-4">
            <div className="user-image w-12 h-12 flex cursor-pointer group">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src="/profile.JPG"
                alt="profile"
                width={100}
                height={100}
              />
              <div className="user-action hidden group-hover:block hover:block absolute translate-y-12 pt-3 cursor-default z-10">
                <div className="border bg-white p-5 rounded-lg shadow-lg">
                  <a
                    className="px-4 py-1 rounded-lg text-red-500 font-semibold hover:bg-red-50 cursor-pointer"
                    onClick={() => {
                      sessionStorage.removeItem("logged");
                      window.location = "/";
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="name font-semibold">Zikri Mansyursyah</span>
              <span className="job text-sm font-medium text-gray-400">
                UIUX Designer
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-7">
            <a
              href="#"
              className="flex items-center font-semibold border-b-2 border-gray-700"
            >
              Discover
            </a>
            <a
              href="#"
              className="flex items-center font-semibold text-gray-400 border-b-2 border-transparent hover:text-black hover:border-gray-700"
            >
              Trending
            </a>
            <a
              href="#"
              className="flex items-center font-semibold text-gray-400 border-b-2 border-transparent hover:text-black hover:border-gray-700"
            >
              For You
            </a>
            <a
              href="#"
              className="flex items-center font-semibold text-gray-400 border-b-2 border-transparent hover:text-black hover:border-gray-700"
            >
              Article
            </a>
          </div>
          <div className="search self-center hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute translate-x-2 translate-y-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="h-10 w-32 lg:w-auto rounded-full border border-gray-300 pl-9 pr-3 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="user-menu hidden lg:flex items-center gap-5 self-center text-gray-700">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </a>
            <button className="bg-blue-400 px-7 py-3 h-10 flex items-center rounded-full text-white font-semibold hover:bg-blue-500">
              Upload
            </button>
          </div>
          <button className="md:hidden pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="content min-h-screen container mx-auto pt-20 px-3">
        {children}
      </div>
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14">
                <Image
                  src="/picvul-logo.png"
                  alt="picvul-logo"
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="text-slate-700 text-4xl font-bold font-ubuntu">
                picvul
              </h1>
            </div>
            <div className="desc pl-2 font-thin">
              picvul is a platform or media to share images with everyone, you
              can use it for free. created and designed by Zikri Mansyursyah
            </div>
            <div className="sosmed pl-2">
              follow me on
              <div className="flex gap-4 mt-3 text-slate-700">
                <a href="!#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a href="!#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a href="!#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="!#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">Trending</div>
          <div className="mt-12">Article</div>
          <div className="mt-12">Documentation</div>
        </div>
      </footer>
    </>
  );
}
