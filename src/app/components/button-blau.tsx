import { ReactNode } from "react";
import Button from "./button";

interface Props {
  children: ReactNode
  onClick: () => void
}

export default function ButtonBlau({ children, onClick }: Props) {
  return (
    <Button className="bg-blau-500 text-white" onClick={onClick}>{children}</Button>
  );
}