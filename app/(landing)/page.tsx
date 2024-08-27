import Image from "next/image";
import { WavyBackground } from "../components/ui/wavy-background";
import { FaClipboardList, FaClipboardUser } from "react-icons/fa6";
import { EmailList } from "../components/waitlist/emailList";
import MintSec from "../components/mint-nft/mint-sec";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#000] text-white">
      {/* bg */}
      <WavyBackground>
        <div className="w-full p-3 h-[400px] mb-[100px] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 capitalize">
              Have tech problems or need a website?
            </h2>
            <p className="text-2xl font-bold my-3 text-gray-300">Ecostatic</p>

            <p className="text-sm captialize lowercase text-gray-500 font-semibold text-shadow-lg w-[80%] mx-auto">
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
            <h2 className="text-4xl font-bold captilize mb-2 captilize">
              With Tech advancing and programs updating its sometimes hard to
              keep up
            </h2>

            <p className="text-sm">
              From iphones to computers making sure your tech request is
              fufilled as well as specializing in full stack web development
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


      <div className="flex items-center justify-center gap-5 p-10 bg-[#222]">

          <div className="w-[50%] p-5 bg-[#555] drop-shadow-lg rounded">
            <h2 className="text-2xl font-bold mb-4">Affilicate:</h2>
            <ul className="flex flex-col gap-4">
              <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="https://crypto.com/app/y8yjabr8my" target="_blank">Crypto</a>
              </li>
              <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="https://cash.app/app/H1W6G6Z" target="_blank">CashApp</a>
              </li>
              <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">Coinbase</a>
              </li>
              {/* <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">Kraken</a>
              </li> */}
              <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">Kukoin</a>
              </li>
              {/* <li className="bg-[#222] text-xl p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">bluehost</a>
              </li> */}
            </ul>
          </div>


          <div className="w-[30%] p-5 bg-[#555] drop-shadow-lg rounded">
            <h2 className="text-2xl font-bold mb-4">Bazar:</h2>
            <ul className="flex flex-col gap-4">
              <li className="bg-[#222] p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">CyberShed.store</a>
              </li>
              <li className="bg-[#222] p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">urbenflexforge.com</a>
              </li>
              <li className="bg-[#222] p-2 rounded drop-shadow-lg hover:bg-[#111]">
                <a href="#">urbenflexforge.com</a>
              </li>
            </ul>
          </div>



      </div>


    </main>
  );
}
