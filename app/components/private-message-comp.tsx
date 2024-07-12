"use client"

import { useModal } from "./hooks/use-modal-store";



const PriaveMessageComp = () => {
    const {onOpen} = useModal()

    const handPrivateMessage = () => {
        onOpen("SendUserPM")
    }


  return (
    <div className="text-center p-10 font-bold text-3xl">
      <h2 className="mb-4">OR send a Private Message</h2>
      <button onClick={handPrivateMessage} className="text-2xl font-bold p-4 bg-[#444] drop-shadow-lg rounded hover:bg-[#222]">
        send message
      </button>
    </div>
  );
};

export default PriaveMessageComp;
