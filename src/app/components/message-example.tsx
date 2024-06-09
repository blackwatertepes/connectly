'use client';

import { useAtom } from "jotai";
import MessageSection from "./message-section"
import Tag from "./tag"
import { messageBodyMessageAtom, messageButtonsAtom, messageButtonsShowAtom, messageFooterMessageAtom, messageFooterShowAtom, messageHeaderImageAtom, messageHeaderShowAtom } from "../atoms/message-atoms";
import Image from "next/image";

export default function MessageExample() {
  const [messageHeaderImage, setMessageHeaderImage] = useAtom(messageHeaderImageAtom);
  const [messageBodyMessage, setMessageBodyMessage] = useAtom(messageBodyMessageAtom);
  const [messageFooterMessage, setMessageFooterMessage] = useAtom(messageFooterMessageAtom);
  const [messageButtons, setMessageButtons] = useAtom(messageButtonsAtom);
  const [messageHeaderShow, setMessageHeaderShow] = useAtom(messageHeaderShowAtom);
  const [messageFooterShow, setMessageFooterShow] = useAtom(messageFooterShowAtom);
  const [messageButtonsShow, setMessageButtonsShow] = useAtom(messageButtonsShowAtom);

  return (
    <div className="flex flex-col w-[304px] bg-white shadow-md rounded-lg p-[12px]">
      <div className="flex items-center my-[2px] mb-[12px]">
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-indigo-450 mr-[10px]">
          <Image
            alt="message bubble"
            height={16}
            src="/images/message.svg"
            width={16}
          />
        </div>
        <h4 className="font-medium">Message Example</h4>
      </div>
      <div className="flex flex-col grow bg-neutral-100 rounded-lg p-[24px]">
        <div className="grow bg-white shadow-sm rounded-md text-sm p-[6px]">
          {messageHeaderImage && messageHeaderShow && (
            <MessageSection>
              <Tag className="absolute top-[8px] left-[8px]">Header</Tag>
              <Image
                alt="message header image"
                height={110}
                src={messageHeaderImage}
                width={220}
              />
            </MessageSection>
          )}
          <MessageSection>
            <Tag>Body message</Tag>
            {messageBodyMessage}
          </MessageSection>
          {messageFooterShow && (
            <MessageSection>
              <Tag>Footer</Tag>
              <div className="text-neutral-400">{messageFooterMessage}</div>
            </MessageSection>
          )}
        </div>
        {messageButtonsShow && messageButtons.map((btn, idx) => (
          <div className="bg-white shadow-sm rounded-md text-blau-500 text-sm p-[6px] text-center mt-[8px]" key={`${btn.label}-${idx}`}>
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  );
}