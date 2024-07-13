import Link from "next/link";

const Page = async () => {
  
  const projects = [
    {
      title: "Phontunelightway",
      type: "defi app",
      category: "LIFE",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. `,
        link: `/${crypto.randomUUID()}`
    },
    {
      title: "BeaconPulseWave",
      type: "defi app",
      category: "DEFI",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. `,
        link: `/${crypto.randomUUID()}`
    },
    {
      title: "Pinnote",
      type: "Social Service App",
      category: "DEFI",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. `,
        link: `/${crypto.randomUUID()}`
    },
    {
      title: "PrimeBlossom",
      type: "defi app",
      category: "DEFI",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. `,
        link: `/${crypto.randomUUID()}`
    },
    {
      title: "Mystic Murko",
      type: "chat group app",
      category: "DEFI",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. `,
        link: `/${crypto.randomUUID()}`
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-cente flex-col">

      <header className="p-4 text-2xl">
        <h2 className="font-bold">Portfolio page</h2>
      </header>


      <section className="w-full h-[800px] overflow-auto ">

        <h2 className="text-center p-4 ">Recent Project:</h2>

        {/* Card container */}
        <div className="flex items-center justify-center flex-col ">

          {projects.map((item) => (
            <div key={crypto.randomUUID()} className="w-[300px] md:w-[800px] h-[300px] p-4 relative bg-[#444] rounded mt-10 flex flex-col justify-between gap-4">
              <header className=" p-2">
                <h2 className="text-2xl text-6xl font-bold">{item.title}</h2>
                <p className="mt-3 text-gray-500 hover:text-gray-200">{item.desription}</p>
              </header>
              <span className="absolute right-0 bg-[#222] p-2 -top-5 font-bold rounded drop-shadow-lg">{item.type}</span>
              <nav>
                <Link href={`/portfolio/projects${item.link}`} className="p-2 font-bold text-emerald-500 bg-[#222] rounded hover:bg-[#444]">{item.link.slice(0, 8)}</Link>
              </nav>
            </div>
          ))}
        </div>


      </section>
    </main>
  );
};

export default Page;
