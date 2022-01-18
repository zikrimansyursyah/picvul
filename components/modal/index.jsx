import { useState, useEffect } from "react";
import { deleteAccount } from "../../services/auth";
import jwt from "jsonwebtoken";

export default function Modal({ setModal, setOpenModal }) {
  return (
    <>
      <div
        onClick={() => {
          setOpenModal({
            isOpen: false,
          });
        }}
        className="fixed top-0 z-40 w-screen h-screen bg-black/20 backdrop-md"
      ></div>
      <div className="fixed z-50 top-1/2 left-1/2 slide-bottom text-center p-5 bg-white rounded-md flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <div className="text-lg font-semibold">{setModal.modal_name}</div>
          <button
            onClick={() => {
              setOpenModal({
                isOpen: false,
              });
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
        {setModal.type == "upload_form" ? (
          <UploadForm />
        ) : setModal.type == "delete_account" ? (
          <DeleteAccountValidation setOpenModal={setOpenModal} />
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </>
  );
}

const UploadForm = () => {
  const [FileName, setFileName] = useState([]);

  function input() {
    setFileName((oldArray) => [
      ...oldArray,
      document.querySelector("#upload").value.split("\\").slice(-1)[0],
    ]);
  }

  useEffect(() => {});
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
      <div className="flex flex-col gap-3">
        {FileName.map((e, idx) => (
          <div
            key={idx}
            className="w-[32rem] py-2 px-4 bg-gray-100 rounded-xl border-2"
          >
            <div className="flex justify-between items-center">
              <div className="text-left">
                <div className="status font-semibold mb-1 text-blue-400">
                  Uploading <span className="text-gray-900">{e}</span>
                </div>
                <div className="time-remaining text-xs">
                  <span className="font-semibold">68%</span> - 12 Seconds
                  remaining
                </div>
              </div>
              <button
                className="rounded-full bg-red-300 text-red-700 p-1.5"
                onClick={() => {
                  setFileName(FileName.filter((x) => x !== e));
                }}
              >
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
        ))}
      </div>
    </>
  );
};

const DeleteAccountValidation = ({ setOpenModal }) => {
  function deleteAcc() {
    const access_token = document.cookie.match(
      new RegExp("(^| )access_token=([^;]+)")
    );
    const userSession = document.cookie.match(
      new RegExp("(^| )user_session=([^;]+)")
    );
    const authHeader = `Bearer ${access_token[2]}`;
    const userData = jwt.verify(userSession[2], "lumba-lumba");
    const id_user = userData._id;

    deleteAccount({ authHeader, id_user });
  }
  return (
    <div>
      <h1>Are you sure want to Delete Account?</h1>
      <div className="flex gap-3 mt-3">
        <button
          className="p-3 bg-gray-200 grow rounded-lg font-semibold hover:bg-gray-100"
          onClick={() => {
            deleteAcc();
          }}
        >
          Yes
        </button>
        <button
          className="p-3 bg-red-200 grow rounded-lg font-semibold hover:bg-red-300"
          onClick={() => {
            setOpenModal({
              isOpen: false,
            });
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};
