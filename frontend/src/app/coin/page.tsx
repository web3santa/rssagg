"use client";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Deposit from "@/components/Deposit";

const page: React.FC = () => {
  return (
    <div className="flex justify-center itemm-center">
      <Deposit />
    </div>
  );
};

export default page;
