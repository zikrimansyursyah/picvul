export default function Modal({ setIsModalOpen, setModal }) {
  return (
    <>
      <div onClick={() => { setIsModalOpen(false) }} className="fixed top-0 z-40 w-screen h-screen bg-black/20 backdrop-md">
      </div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-5 bg-white rounded-md flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <div className="text-lg font-semibold">{setModal == 'upload_form' ? 'Upload' : ''}</div>
          <button onClick={() => { setIsModalOpen(false) }} className="justify-self-end"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg></button>
        </div>
        {
          setModal == 'upload_form' ?
            <UploadForm /> : <div className="hidden"></div>
        }
      </div>
    </>
  )
}

const UploadForm = () => {
  return (
    <div className="w-96 h-40 border-4 border-dashed rounded-xl flex flex-col justify-center items-center bg-gray-100">
      <div>drop your picture here or <a href="#" className="text-blue-400 font-semibold ml-1">Browse</a></div>
      <div className="text-sm text-gray-500">format .jpg .png .webp</div>
    </div>
  )
}