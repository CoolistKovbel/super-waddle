"use client";

import { useEffect, useState } from "react";
import SendUserPM from "../modals/sendPM";
import JobRequestModal from "../modals/jobrequestmodal";
import SendPayment from "../modals/sendExpressPaymnet";
import Portfolioaduploop from "../modals/HandlePortfolioModal";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SendUserPM />
      <JobRequestModal />
      <SendPayment />
      <Portfolioaduploop />
    </>
  );
};
