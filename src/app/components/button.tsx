import { ReactNode } from "react";

interface Props {
  children: ReactNode
  className?: string
  onClick: () => void
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button className={`h-[36px] border border-blue-500 rounded uppercase text-sm font-medium my-1.5 ${className}`} onClick={() => onClick()}>{children}</button>
  );
}