import "../../assets/styles/globals.css";
import type { Metadata } from "next";

import SomeClientComponent from "./SomeClientComponent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>
      <SomeClientComponent>
        {children}
      </SomeClientComponent>
    </>
  )
}
