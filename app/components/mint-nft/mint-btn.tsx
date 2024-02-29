"use client";

import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const MintButton = () => {
  const handleSubmit = async () => {

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const account = await signer.getAddress()
      // const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      // const res = await contract.mint(amount, {
      //   value: ethers.utils.parseEther((0.042 * amount).toString()),
      // });
  
      // console.log(res.hash, "Transaction started");

      // console.log(res);
      // res.wait();
  
      // console.log(res.hash, "Transaction ended");
      toast(`transacting soon minting nfty baby ${account}`)


    } catch (error) {
      console.log(error);
      toast(
        `☠ No worrk big error make sure metamask is worky: ${error?.toString()}`
      );
    }


  };

  return (
    <button
      onClick={handleSubmit}
      className="relative overflow-hidden bg-transparent border-2 border-purple-700 p-4 w-[150px] text-xl font-bold rounded-full focus:outline-none focus:ring focus:border-purple-500 transition-all"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-800 opacity-0 hover:opacity-100 transition-opacity filter blur-sm"></span>
      <span className="relative z-10 text-white flex items-center justify-center h-full">
        Mint Now
      </span>
    </button>
  );
};

export default MintButton;
