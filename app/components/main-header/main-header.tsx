"use client";

import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useModal } from "../hooks/use-modal-store";

const MainHeader = () => {
  const [user, setUser] = useState<string>();
  const [handleDrop, setHandleDrop] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {onOpen} =  useModal()

  const clientTalkToNetwork = async () => {
    console.log("client talking");
    try {
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider.getSigner();
      const account = await signer.getAddress();

      console.log("networking resopinsing");
      setUser(account);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    clientTalkToNetwork();
  }, []);

  const handleDropDown = () => {
    setHandleDrop((prevDrop) => !prevDrop);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setHandleDrop(false);
    }
  };

  const handleProtfpopIpdate = () => {
    onOpen("addPortfolio")
  }

  useEffect(() => {
    if (handleDrop) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleDrop]);

  return (
    <header className="w-full p-4 bg-[#000] text-white flex items-center justify-between">
      <h2>
        <Link href="/" className="flex items-center">
          <Image src="/bbS.png" alt="small forge bot" width={32} height={32} />
          <span>De Cyber Dev</span>
        </Link>
      </h2>

      <nav className="w-[220px] text-[10px] font-bold uppercase flex items-center justify-between">
        {user === "0x1C352E8F3e035c524F2385818b44859906d3c705" && (
          <>
            <p onClick={handleDropDown} className="relative">
              Panel 🎛️
            </p>

            {handleDrop && (
              <div className="w-[300px] h-[500px] bg-[#222] p-4 absolute top-[63px] right-0 z-50">

                <h4>{user.substring(0,8)}</h4>
                <button onClick={handleProtfpopIpdate} > add </button>

              </div>
            )}
          </>
        )}
        <Link href="/about" className="hover:text-emerald-500 hover:underline">
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-emerald-500 hover:underline"
        >
          Contact
        </Link>
        <Link
          href="/services"
          className="hover:text-emerald-500 hover:underline"
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="hover:text-emerald-500 hover:underline"
        >
          Portfolio
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
