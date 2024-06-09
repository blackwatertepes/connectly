import Image from "next/image"

interface Props {
  icon: string
  onChange: (val: boolean) => void
  open?: boolean
  required?: boolean
  text: string
}

export default function SidebarSectionHeader({ icon, onChange, open, required, text }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Image
          alt="icon"
          height={18}
          src={`/images/${icon}.svg`}
          width={18}
        />
        <h5 className="font-medium ml-[8px]">{text}</h5>
      </div>
      {required ? (
        <span className="uppercase text-xs font-medium bg-neutral-100 p-[6px] rounded-md ml-[14px]">Required</span>
      ) : (
        <input type="checkbox" className="toggle toggle-info" checked={open} onChange={(_) => onChange(!open)} />
      )}
    </div>
  );
}