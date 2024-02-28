import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { WavyBackground } from "../components/ui/wavy-background";
import { FaClipboardList, FaClipboardUser } from "react-icons/fa6";
import { EmailList } from "../components/waitlist/emailList";
import MintSec from "../components/mint-nft/mint-sec";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#000] text-white">
      <WavyBackground>
        <div className="w-full p-3 h-[400px] mb-[100px] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 capitalize">
              Need some help with your tech problems
            </h2>
            <p className="text-2xl font-bold mb-3">
              Hi, lyub de Cyber Developer is here to help.
            </p>

            <p className="text-sm lowercase text-gray-300 font-semibold text-shadow-lg w-[80%] mx-auto">
              Struggling trying to get the internet working, cant seem to get
              enough attention for your buisness, need a website or a smart
              contract? I can you with that..
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
              It only takes you to make a change
            </h2>

            <p className="text-sm">
              Follow me through my little journey, if you are interested I am
              going this is a small blog website where I basically introduce
              myself, try to create a team and spread some knowledge and the
              place to be if you want to know when I will be laucnhing my next
              project
            </p>

            <p className="font-bold mt-2">Dont be a loser, spread some love</p>

            <div>
              <div className="flex items-center gap-2  mt-10">
                <a
                  href="/about"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardUser className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">about</p>
                </a>
                <a
                  href="/services"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardUser className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">services</p>
                </a>
                <a
                  href="/contact"
                  className="block w-full text-sm text-[#f4f4f4]  hover:text-white"
                >
                  <FaClipboardList className="w-[32px] h-[32px] block mx-auto" />
                  <p className="font-bold mt-2 uppercase">contact</p>
                </a>
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
