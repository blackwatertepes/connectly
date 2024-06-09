import Image from "next/image";

interface Props {
  idx: number
  onChange: (val: string) => void
  onDelete: () => void
  value: string
}

export default function SidebarNewButton({ idx, onChange, onDelete, value }: Props) {
  return (
    <div className="flex flex-col text-sm my-[4px]">
      <div className="flex justify-between items-center">
        <label className="font-medium my-[2px]" htmlFor="button_a">Button {idx + 1}</label>
        <div className="flex justify-center py-[8px]" onClick={(_) => onDelete()}>
          <Image
            alt="icon"
            height={14}
            src="/images/trash.svg"
            width={14}
          />
        </div>
      </div>
      <input
        className="grow border rounded-lg h-[45px] p-[12px] my-[2px]"
        id="button_a"
        name="button_a"
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="Enter text"
        type="text"
        value={value}
      />
    </div>
  );
}