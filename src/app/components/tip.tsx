'use client';

import Image from "next/image";
import { ReactNode, useState } from "react";
import ButtonIconClose from "./button-icon-close";

interface Props {
  children: ReactNode
  header: string
}

export default function Tip({ children, header }: Props) {
  const [show, setShow] = useState(true);

  if (!show) return;
  return (
    <div className="bg-neutral-100 rounded-lg p-[14px] text-xs">
      <div className="flex relative">
        <Image
          alt="icon"
          height={16}
          src="/images/flashlight.svg"
          width={16}
        />
        <div className="text-sm ml-[8px]">{header}</div>
        <ButtonIconClose className="absolute -top-[10px] -right-[10px]" onClose={() => setShow(false)} />
      </div>
      <div className="text-neutral-500 my-1.5">
        {children}
      </div>
      <div className="text-blau-500">Learn More</div>
    </div>
  );
}