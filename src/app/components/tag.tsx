import { ReactNode } from "react";

interface Props {
  children: ReactNode
  className?: string
}

export default function Tag({ children, className }: Props) {
  return (
    <div className={`text-green-500 text-xs bg-neutral-100 rounded-md p-[8px] ${className}`}>{children}</div>
  );
}