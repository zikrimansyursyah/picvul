export default function Button({ isPrimary, type, children }) {
  return (
    <>
      {isPrimary ? (
        <button
          type={type}
          className="w-full text-white font-medium bg-slate-800 py-3 rounded-lg flex items-center justify-center gap-3 hover:shadow-lg"
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          className="w-full mt-4 font-medium border border-1 border-gray-400 py-3 rounded-lg flex items-center justify-center gap-3 hover:shadow-lg"
        >
          {children}
        </button>
      )}
    </>
  );
}
