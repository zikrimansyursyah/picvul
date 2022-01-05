export default function Alert({ message, setOpenAlert }) {
  setTimeout(() => {
    setOpenAlert(false);
  }, 5000);

  return (
    <div className="absolute top-0 right-0 mt-5 mr-5">
      <div className="bg-white px-2 py-1 shadow-lg rounded-md flex gap-3">
        <div className="flex items-center gap-5 border-l-4 border-amber-300 rounded-sm pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-amber-300"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <div className="flex flex-col py-2">
            <div className="font-semibold">Uh oh, something went wrong</div>
            <div className="text-gray-600">{message}</div>
          </div>
        </div>
        <button
          className="px-2 rounded-lg hover:bg-amber-100"
          onClick={() => {
            setOpenAlert(false);
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
    </div>
  );
}
