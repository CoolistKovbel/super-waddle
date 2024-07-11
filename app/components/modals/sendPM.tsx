"use client";

import { handleUserMessage } from "@/app/lib/action";
import { useModal } from "../hooks/use-modal-store";




const SendUserPM = () => {
  const { isOpen, onClose, type, signature } = useModal();

  const urlParts = window.location.href.split("/");
  const desiredUrl = "/" + urlParts.slice(3).join("/");

  const isModalOpen = isOpen && type === "SendUserPM";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("sessoinUrl", desiredUrl);
    formData.append("address", signature as string)

    try {
      console.log(signature, desiredUrl)

      handleUserMessage(formData)

      onClose();
    } catch (error) {
      console.error("Error:", error);
      // TODO: Handle error
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#222] rounded-md p-4 w-[300px] md:w-[600px] overflow-auto h-[50%]">
        <div className="w-full h-full text-white flex justify-between flex-col relative">
          <h2 className="text-2xl md:text-4xl text-center font-bold">
            Send Message to: {signature}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg "
          >
            <label htmlFor="title" className="text-white text-lg mb-2">
              title:
            </label>
            <input
              type="string"
              className="w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter vault name"
              name="title"
              id="title"
            />

            <label
              htmlFor="message"
              className="text-white text-lg mb-2"
            >
              Message:
            </label>
            <textarea
              className="w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-4 overflow-auto resize-none w-full h-[400px]"
              placeholder="Enter message"
              name="message"
              id="message"
            />


            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-3 px-6 font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>

          {/* close button */}
          <button className="absolute top-5 left-5" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#f4f4f4]"
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
    </div>
  );
};

export default SendUserPM;
