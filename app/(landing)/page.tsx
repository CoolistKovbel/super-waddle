import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-black text-white flex items-center justify-center flex-col p-10">

      <div className="sm:w-[300px] md:w-[800px] lg-[1080px] flex items-center justify-center flex-col gap-10">

        <section className="bg-[#111] mx-auto w-full h-[400px] flex items-center justify-center flex-col gap-3 rounded-m ">
          <div className="w-[300px] h-[300px] relative shadow-lg">
            <Image src="/TestConflict.png" alt="profile-image" fill />
          </div>

          <h2 className="text-2xl font-bold">Howdy de name is lyub</h2>
          <p className="text-md text-gray-500">
            Welcome to my service, what can i help you with
          </p>
        </section>

        <section className="bg-[#111] mx-auto w-full h-[400px] ">
          <h2>Need a blog</h2>
          <p>
            Sit down and contact me we will be able to come up with a good
            looking blog where you will be able to either build and allow your
            community to build their own blogs
          </p>
        </section>

        <section className="bg-[#111] mx-auto w-full h-[400px]"> 
          <h2>Need a NFT collection</h2>
          <p>
            Do you want to have create a community based of an image? allow
            people to minting official images and sell them on the open market
            if they wanted to?
          </p>
        </section>

        <section className="bg-[#111] mx-auto w-full h-[400px]">
          <h2>Own a buisness, a lot of work and need an ai to help</h2>
          <p>
            Setup a AI client built to help you buisness, either answer
            questions about your buisness or review your documents and generate
            your yearly statement
          </p>
        </section>

      </div>

    </main>
  );
}
