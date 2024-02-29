import Image from 'next/image'
import React from 'react'
import MintButton from './mint-btn'
import Link from 'next/link'


const MintSec = () => {
  return (

    <div className="w-[800px] h-[500px] mx-auto p-4">
    <div className="flex flex-col items-center justify-center gap-4 h-full text-white rounded-lg p-8 shadow-lg">
      <h2 className="text-4xl md:text-6xl font-extrabold capitalize text-center">
        Become a Supporter
      </h2>

      <p className="text-gray-400 text-sm text-center leading-6">
        Support the future! Mint an NFT and contribute towards our next
        project. You&#39;ll also get a share of the success. Learn more
        about the exclusive features by visiting the link in the
        description.
      </p>

      <div className="flex items-center gap-4 text-center justify-center">
        <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden">
          <Image
            src="/mq.png"
            alt="nft"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <p className="text-lg font-semibold">
            Minting one person account
          </p>
          <Link href="/mintfq">Learn More</Link>
        </div>
      </div>


      <MintButton />

    </div>
  </div>
  )
}

export default MintSec