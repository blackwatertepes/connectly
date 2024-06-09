import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function SidebarSection({ children }: Props) {
  return (
    <div className="flex flex-col border rounded-lg my-[12px] px-[24px] py-[16px]">{children}</div>
  );
}