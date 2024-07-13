"use client";

import { useModal } from "../hooks/use-modal-store";
import { toast } from "react-toastify";
import { useState } from "react";
import { ethers } from "ethers";
import { verifyMessage } from "ethers/lib/utils";

const Portfolioaduploop = () => {
  const [isValidSign, setValidSign] = useState(false);
  const { isOpen, onClose, type, signature } = useModal();

  const urlParts = window.location.href.split("/");
  const desiredUrl = "/" + urlParts.slice(3).join("/");

  const isModalOpen = isOpen && type === "addPortfolio";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.currentTarget);
    formData.append("sessoinUrl", desiredUrl);

    try {
      console.log("the user wants a service erquest");



      form.reset();

      onClose();
    } catch (error) {
      console.error("Error:", error);
      // TODO: Handle error
    }
  };

  const handleSignature = async () => {
    try {
      console.log("hadnling signature");
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const user = await signer.getAddress();

      const message = "You are setting a order with ... lyub. Correct";
      const sign = await signer.signMessage(message)



      const confirm = await verifyMessage(message, sign);


      const verifyiqueions = `soo ${user}, is going paying lyub ${sign} correct, here is the confirmation result; ${confirm}`;

      toast(verifyiqueions);

      setValidSign(true);
      onClose();
    } catch (error) {
      console.log("erorr", error);
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
            Request A servcie
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg "
          >
            <label htmlFor="username" className="text-white text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-[90%] overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="give name"
              name="username"
              id="username"
            />

            <label htmlFor="email" className="text-white text-lg mb-2">
              Desciption
            </label>
            <input
              type="text"
              className="w-[90%]  overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="give email."
              name="email"
              id="email"
            />

            <label
              htmlFor="serviceType"
              className="text-white text-lg mb-2 w-full"
            >
              ProjectNotes:
            </label>
            {/* Possabliy add a inner form */}
            <textarea
              className="w-[90%] h-[500px] overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter additional information about how you want your project to go as well as what else you may be having a tech issuse."
              name="serviceUserRequest"
              id="serviceUserRequest"
            />

            <label
              htmlFor="serviceUserRequest"
              className="text-white text-lg mb-2"
            >
              Description:
            </label>
            <textarea
              className="w-[90%] h-[500px] overflow-auto resize-none bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter additional information about how you want your project to go as well as what else you may be having a tech issuse."
              name="serviceUserRequest"
              id="serviceUserRequest"
            />

            {!isValidSign ? (
              <button
                onClick={handleSignature}
                className="p-4 bg-[#444] hover:bg-[#222] font-bold"
                type="button"
              >
                sign
              </button>
            ) : (
              <button className="p-4 bg-[#444] hover:bg-[#222] font-bold">
                submit
              </button>
            )}
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

export default Portfolioaduploop;
