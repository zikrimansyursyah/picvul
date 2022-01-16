export default function Button({ isPrimary, type, children, clicked }) {
  return (
    <>
      {isPrimary ? (
        <button
          onClick={clicked}
          type={type}
          className="w-full text-white font-medium bg-slate-800 py-3 rounded-lg flex items-center justify-center gap-3 hover:shadow-lg"
        >
          {children}
        </button>
      ) : (
        <button
          onClick={clicked}
          type={type}
          className="w-full mt-4 font-medium border border-1 border-gray-400 py-3 rounded-lg flex items-center justify-center gap-3 hover:shadow-lg"
        >
          {children}
        </button>
      )}
    </>
  );
}
