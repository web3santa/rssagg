import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center text-1xl items-center grid-rows-4">
      <Link href="/">Hello</Link>

      <Link href="/create" className="btn gap-12 m-9">
        Create
      </Link>
      <Link href="/coin" className="btn btn-ghost m-9">
        Coin
      </Link>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
