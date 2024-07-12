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
            <div key={crypto.randomUUID()} className="w-[300px] h-[300px] p-4 relative  mt-10">
              <header >
                <h2 className="text-2xl">{item.title}</h2>
                <p>{item.desription}</p>
              </header>
              <span className="absolute">{item.type}</span>
              <Link href={`/project${item.link}`}>{item.link.slice(0, 8)}</Link>
            </div>
          ))}
        </div>


      </section>
    </main>
  );
};

export default Page;
