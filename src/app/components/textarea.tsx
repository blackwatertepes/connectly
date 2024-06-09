import { ReactNode } from "react";

interface Props {
  onChange: (val: string) => void
  value: string
}

export default function Textarea({ onChange, value }: Props) {
  return (
    <div className="flex flex-col grow my-2">
      <textarea onChange={(e) => onChange(e.currentTarget.value)} className="border grow h-[250px] rounded-lg text-sm p-[10px]" value={value} />
    </div>
  );
}