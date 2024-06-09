import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function MessageSection({ children }: Props) {
  return (
    <div className="relative flex flex-col items-start border-t first:border-0 border-green-400 border-dashed mt-[6px] first:mt-0 pt-[8px] first:pt-0">
      {children}
    </div>
  );
}