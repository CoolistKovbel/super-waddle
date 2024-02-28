import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

import WaitListForm from "./waitlist-form";

export function EmailList() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-[#000] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="relative z-10 text-[2.4rem] md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h2>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Get notified when a new project is launched from me or my team. From
          crypto, to blockchain, to the latest tech stacks. Planning on
          releasing tool kits that will help you out in your journey as well as
          releasing missions that you can work on to make money, learn, and
          proper in your family.
        </p>

        <WaitListForm />
      </div>
      <BackgroundBeams />
    </div>
  );
}
