'use client';

interface Props {
  className?: string
  onClose: () => void
}

export default function ButtonIconClose({ className, onClose }: Props) {
  return (
    <div className={`flex justify-center items-center w-10 h-10 rounded-full bg-mono-100 ${className}`} onClick={(_) => onClose()}>
      <div className="rotate-45">
        <div className="relative left-[7px] top-[1px] w-[2px] h-[16px] bg-neutral-500"></div>
        <div className="relative -top-[8px] w-[16px] h-[2px] bg-neutral-500"></div>
      </div>
    </div>
  );
}
