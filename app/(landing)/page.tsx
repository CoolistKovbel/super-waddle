import Image from "next/image"


export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col bg-black text-white">
      
      <div className="sm:w-[300px] md:w-[800px] lg-[1080px]">

        <section className="bg-[#111] mx-auto w-full h-[400px] flex items-center justify-center flex-col gap-3 rounded-lg">

          <div className="w-[300px] h-[300px] relative shadow-lg">
            <Image src="/TestConflict.png" alt="profile-image" fill/>
          </div>

          <h2 className="text-2xl font-bold">Howdy de name is lyub</h2>
          <p className="text-md text-gray-500">Welcome to my service, what can i help you with</p>

        </section>

      </div>

    </main>
  );
}
