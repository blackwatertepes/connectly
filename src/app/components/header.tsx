'use client';

import ButtonIconClose from "./button-icon-close";

interface Props {
  label: string
}

export default function Header({ label }: Props) {
  return (
    <div className="flex px-6 z-10 justify-between items-center h-[4.375rem] bg-white shadow-md">
      <div className="font-medium">{label}</div>
      <ButtonIconClose onClose={() => void(0)} />
    </div>
  );
}