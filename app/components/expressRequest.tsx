"use client";

import { SendExpressPayment } from "../lib/action";
import { useModal } from "./hooks/use-modal-store";

const ExpressRequest = () => {
  const { onOpen } = useModal();

  const handleExpressClientRequest = async () => {
    try {
      console.log("express checkout initiziazle.");
      onOpen("SendServicesRequest");
    } catch (error) {
      console.log(error);
    }
  };

  const handleExpress = async (e: any) => {
    try {
      console.log("handle exprees payout");


      onOpen("SendExpressPayment");


      
    } catch (eror) {
      console.log(eror);
    }
  };

  return (
    <section className="w-[40%] mx-auto p-10 flex items-center justify-between flex-col gap-5">

      <header>
        <h2 className="text-4xl font-bold text-center">Express Request: </h2>
      </header>

      <div className="flex items-center justify-center gap-4 w-[80%]">

        <div className="w-full flex items-center justify-around">
          <button
            onClick={handleExpressClientRequest}
            className="p-2 bg-[#222] text-2xl font-bold hover:bg-[#444] rounded"
          >
            Order Now
          </button>
        </div>
        <div className="w-full flex items-center justify-around">
          <button
            onClick={handleExpress}
            className="p-2 bg-[#222] text-2xl font-bold hover:bg-[#444] rounded"
          >
            pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpressRequest;
