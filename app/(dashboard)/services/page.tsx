const Page = async () => {
  return (
    <main className="min-h-screen w-full bg-[#111] text-white flex items-center justify-center flex-col gap-4">
      {/* section header */}
      <header className="w-full bg-[#111] border-2 p-3">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">My Services</h2>

        <p className="text-sm font-bold text-gray-500">
          For the moment I am a team of one. With different skills and talents I
          hope to come as good use.
        </p>
      </header>


      <div className="w-[340px] md:w-[80%] flex items-center justify-center gap-4 flex-col">

        <section className="w-full bg-[#222] border-2 p-3 shadow-lg rounded-md">

          <header className="mb-3 ">
            <h2 className="text-2xl font-bold">Web devlopment</h2>
            <p className="text-sm">
              You can either hire me for a specfic section or build out a full
              site.
            </p>
          </header>

          <ul className="list-disc p-5">
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Front End development</span>
              <ul>
                <li>Build out the UI design of the website</li>
                <li>Help build out certain UI component</li>
              </ul>
            </li>
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Back End development</span>
              <ul>
                <li>Build a rest api</li>
                <li>Build out authentication setup</li>
              </ul>
            </li>
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Full stack development</span>
              <p>
                cover both front end and backend devlopment built towards your
                desire
              </p>
            </li>
          </ul>
        </section>

        <section className="w-full bg-[#222] border-2 p-3 shadow-lg rounded-md">
          <header className="mb-3">
            <h2 className="text-2xl font-bold">Blockchain Devlopment</h2>
            <p className="text-sm">
              You can either hire me to build a specfic contract or implement it
              into you website or just build out a site for you blockchain and
              smart contract connection
            </p>
          </header>
          <ul className="list-disc p-5">
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Smart Contract Development</span>
              <ul>
                <li>Audit smart contract</li>
                <li>Build out smart contract towards your desire</li>
              </ul>
            </li>
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Blockchain Development</span>
              <p>Buid an application connected with smart contract </p>
            </li>
            <li>
              <span className="bg-[#000] inline-block p-1 rounded-md">Blockchain FullStack Development</span>
              <p>
                Buid an application connected with smart contract and database{" "}
              </p>
            </li>
          </ul>
        </section>


        <section className="w-full bg-[#222] border-2 p-3 shadow-lg rounded-md">
          <header className="mb-3">
            <h2 className="text-2xl font-bold">Project Development</h2>
            <p className="text-sm">
              Dont have an idea of what you want, want something that will make you
              stand out and look cool
            </p>
          </header>

          <ul className="list-disc p-5">
            <li>Blog website</li>
            <li>AI chat client</li>
            <li>NFT minting website</li>
            <li>Token Faucet website</li>
          </ul>
        </section>
      </div>


      <footer className="p-4 text-sm text-gray-500">
        <p>
          payment will verry, I am planing to except only <span className="underline">crypto currency</span> for my
          service but if you want an express build I will have a <span className="underline">stripe payment </span>
          system which you could follow
        </p>
      </footer>
    </main>
  );
};

export default Page;
