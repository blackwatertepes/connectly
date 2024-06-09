import { ReactNode } from "react";
import Button from "./button";

interface Props {
  children: ReactNode
  onClick: () => void
}

export default function ButtonWhite({ children, onClick }: Props) {
  return (
    <Button className="bg-white text-blau-500" onClick={onClick}>{children}</Button>
  );
}