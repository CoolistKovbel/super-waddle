"use client";


import { SendExpressPayment } from "@/app/lib/action";
import { useModal } from "../hooks/use-modal-store";
import { toast } from "react-toastify";

const SendPayment = () => {
  const { isOpen, onClose, type, signature } = useModal();

  const urlParts = window.location.href.split("/");
  const desiredUrl = "/" + urlParts.slice(3).join("/");

  const isModalOpen = isOpen && type === "SendExpressPayment";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("sessoinUrl", desiredUrl);

    try {
      console.log("the user wants a service erquest");

      const gg = await SendExpressPayment(formData)
      
      console.log(gg)

      if(gg?.status) {
        console.log(gg.payload)
        toast("paymeny  sent")
      }
    


      onClose();
    } catch (error) {
      console.error("Error:", error);
      // TODO: Handle error
      // -----

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
      <div className="bg-[#222] rounded-md p-4 w-[300px] md:w-[800px] overflow-auto h-[50%]">

        <div className="w-full h-full text-white flex justify-between flex-col relative">
          <h2 className="text-2xl md:text-4xl text-center font-bold">
            Pay Now
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg "
          >

            <label htmlFor="transactoinId" className="text-white text-lg mb-2">
             Tranascation
            </label>
            <input
              type="text"
              className="w-[90%] overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="give name"
              name="transactoinId"
              id="transactoinId"
            />

            <label htmlFor="metaAddress" className="text-white text-lg mb-2">
             MetaAddress
            </label>
            <input
              type="text"
              className="w-[90%]  overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="give email."
              name="metaAddress"
              id="metaAddress"
            />


            <label htmlFor="serviceType" className="text-white text-lg mb-2 w-full">
              Service Type
            </label>
            <select name="serviceType" id="serviceType" className="bg-[#222] p-2">
              <option value="----">-----</option>
              <option value="fs">Fullstack development</option>
              <option value="bs">Blockchain development</option>
              <option value="IR"> phone repair</option>
            </select>

            <button className="p-4 bg-[#444] hover:bg-[#222] font-bold">submit</button>

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

export default SendPayment;
