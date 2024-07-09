import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { WavyBackground } from "../components/ui/wavy-background";
import { FaClipboardList, FaClipboardUser } from "react-icons/fa6";
import { EmailList } from "../components/waitlist/emailList";
import MintSec from "../components/mint-nft/mint-sec";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#000] text-white">
      <WavyBackground>
        <div className="w-full p-3 h-[400px] mb-[100px] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 capitalize">
              Have tech problems or need some assistance?
            </h2>
            <p className="text-2xl font-bold mb-3">Ecostatic</p>

            <p className="text-sm lowercase text-gray-300 font-semibold text-shadow-lg w-[80%] mx-auto">
              Struggling trying to get the internet working, cant seem to get
              enough attention for your buisness, need a website or a smart
              contract? I can help you with that..
            </p>
          </div>
        </div>

        <div className="w-full p-3 h-[400px] flex flex-col items-center justify-center">
          <Image
            src="/TestConflict.png"
            alt="lyub"
            width={300}
            height={300}
            className="mb-5"
          />

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold captilize mb-2">
              With Tech advancing and programs updating its sometimes hard to
              keep up
            </h2>

            <p className="text-sm">
              Currently specializing in full stack web development as well as
              small tech gadget restoration, from iphones to computers making
              sure your tech request is fufilled
            </p>

            <p className="font-bold mt-2">Dont be a loser, spread some love</p>

            <div>
              <div className="flex items-center gap-2  mt-10">
                <Link
                  href="/about"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardUser className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">about</p>
                </Link>

                <Link
                  href="/services"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardUser className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">services</p>
                </Link>

                <Link
                  href="/contact"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardList className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">contact</p>
                </Link>

                <Link
                  href="/portfolio"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardList className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">porfolio</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>

      <EmailList />

      <MintSec />

      <ToastContainer />
    </main>
  );
}
