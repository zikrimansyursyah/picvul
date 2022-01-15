import { useState } from "react";

export default function Modal({ setIsModalOpen, setModal, setModalName }) {
  return (
    <>
      <div
        onClick={() => {
          setIsModalOpen(false);
        }}
        className="fixed top-0 z-40 w-screen h-screen bg-black/20 backdrop-md"
      ></div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-5 bg-white rounded-md flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <div className="text-lg font-semibold">{setModalName}</div>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="justify-self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {setModal == "upload_form" ? (
          <UploadForm />
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </>
  );
}

const UploadForm = () => {
  let fileName = [];
  const [FileTotal, setFileTotal] = useState(0);

  function input() {
    fileName.push(
      document.querySelector("#upload").value.split("\\").slice(-1)[0]
    );
    setFileTotal(FileTotal++);
  }

  return (
    <>
      <label
        htmlFor="upload"
        className="w-[32rem] h-40 mb-5 border-4 border-dashed rounded-xl flex flex-col justify-center items-center bg-gray-100 cursor-pointer"
      >
        <div>
          drop your picture here or{" "}
          <a className="text-blue-400 font-semibold ml-1">Browse</a>
        </div>
        <div className="text-sm text-gray-500">format .jpg .png .webp</div>
      </label>
      <input
        type="file"
        id="upload"
        name="upload"
        className="hidden"
        onChange={input}
      />
      <div className="w-[32rem] py-2 px-4 bg-gray-100 rounded-xl border-2">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <div className="status font-semibold mb-1 text-blue-400">
              Uploading
            </div>
            <div className="time-remaining text-xs">
              <span className="font-semibold">68%</span> - 12 Seconds remaining
            </div>
          </div>
          <button className="rounded-full bg-red-300 text-red-700 p-1.5">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="border-2 w-full rounded-full mt-3 mb-1.5"></div>
      </div>
    </>
  );
};
