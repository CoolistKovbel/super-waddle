"use client"

import { whiteList } from "@/app/lib/action";
import { useTransition } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaitListForm = () => {

  const [isPending, startTransition] = useTransition()

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      whiteList(formData).then((data) => {
        toast(data.status)
      });
    })
  
  }
  

  return (
    <form onSubmit={onSubmitForm}>
      {
        !isPending ? (
          <input
            type="email"
            placeholder="enter email here"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-4 bg-neutral-950 placeholder:text-neutral-700"
            name="email"
            id="email"
          />
        ) : (
          <p>Loading...</p>
        )
      }
    </form>
  );
};

export default WaitListForm;
