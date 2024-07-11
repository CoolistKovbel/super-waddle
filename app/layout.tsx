import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "./components/main-header/main-header";
import "./globals.css";
import { ModalProvider } from "./components/providers/model-provider";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LyubsDevCyberStop",
  description:
    "Welome to LyubsDevCyberStop the place to see the latest projects that I have to offer, from fullstack applications to blockchain dApp, where you can get your development needs done and see the work. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <ModalProvider />
        <ToastContainer />
      </body>
    </html>
  );
}
