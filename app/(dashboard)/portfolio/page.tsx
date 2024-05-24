
const Page = async () => {
  
  const projects = [
    {
      title: "entropic",
      type: "NFTListingPlace",
      category: "LIFE",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. A
        user is allowed to list erc-721 token collection that either are
        created by themselves or support pioneers.`,
    },
    {
      title: "mysticmurkoXD",
      type: "NFTChatApp",
      category: "LIFE",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. A
        user is allowed to list erc-721 token collection that either are
        created by themselves or support pioneers.`,
    },
    {
      title: "pinnote",
      type: "NFTChatApp",
      category: "LIFE",
      profojetImage: "/banner-test.png",
      desription: `A small decentralized application invovles solidity and javascript
        using, ethers and nextjs, and typescript to created this project. A user is able to join a group of 3 members who also have the nft collection`,
    },
    {

    }
  ];

  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center">
      <header>
        <h2>Portfolio page</h2>
      </header>

      <section>
        <h2>Recent Project:</h2>

        {/* Card container */}

        {projects.map((item) => (
          <div key={crypto.randomUUID()}>
            <h2>{item.title}</h2>
            <p>{item.desription}</p>
            <span>{item.type}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
