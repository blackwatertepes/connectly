'use client';

import { useAtom } from "jotai";
import ButtonBlau from "./button-blau";
import ButtonIconClose from "./button-icon-close";
import ButtonWhite from "./button-white";
import SidebarNewButton from "./sidebar-new-button";
import SidebarSection from "./sidebar-section";
import Textarea from "./textarea";
import Tip from "./tip";
import { messageBodyMessageAtom, messageButtonsAtom, messageButtonsShowAtom, messageFooterMessageAtom, messageFooterShowAtom, messageHeaderImageAtom, messageHeaderShowAtom } from "../atoms/message-atoms";
import { useEffect, useRef } from "react";
import SidebarSectionHeader from "./sidebar-section-header";

const URI = "http://..."

export default function Sidebar() {
  const [messageHeaderImage, setMessageHeaderImage] = useAtom(messageHeaderImageAtom);
  const [messageBodyMessage, setMessageBodyMessage] = useAtom(messageBodyMessageAtom);
  const [messageFooterMessage, setMessageFooterMessage] = useAtom(messageFooterMessageAtom);
  const [messageButtons, setMessageButtons] = useAtom(messageButtonsAtom);
  const [messageHeaderShow, setMessageHeaderShow] = useAtom(messageHeaderShowAtom);
  const [messageFooterShow, setMessageFooterShow] = useAtom(messageFooterShowAtom);
  const [messageButtonsShow, setMessageButtonsShow] = useAtom(messageButtonsShowAtom);

  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("GET (mocked)")
    // fetch(URI + '/')
    //   .then(res => res.json())
    //   .then((data) => {
    //     setMessageBodyMessage(data.body)
    //     setMessageFooterMessage(data.footer)
    //     setMessageButtons(data.buttons)
    //   })
  }, []);

  const updateMessage = () => {
    console.log("UPDATE (mocked)");
    // fetch(URI + '/', {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     body: messageBodyMessage,
    //     footer: messageFooterMessage,
    //     buttons: messageButtons,
    //   }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  const deleteMessage = () => {
    console.log("DELETE (mocked)");
    // fetch(URI + '/', {
    //   method: 'DELETE',
    //   body: JSON.stringify({
    //     body: messageBodyMessage,
    //     footer: messageFooterMessage,
    //     buttons: messageButtons,
    //   }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  const uploadImage = () => {
    imageInputRef.current?.click();
  }

  const headerDisplay = messageHeaderShow ? "flex flex-col" : "hidden";
  const footerDisplay = messageFooterShow ? "flex flex-col" : "hidden";
  const buttonsDisplay = messageButtonsShow ? "flex flex-col" : "hidden";

  return (
    <div className="w-[360px] p-[24px] bg-white shadow-md max-h-canvas overflow-auto">
      <div className="flex justify-between">
        <h4 className="text-2xl">Edit Message</h4>
        <ButtonIconClose onClose={() => void(0)} />
      </div>
      <div>
        <h5 className="mt-[24px] font-medium">Content</h5>
        <SidebarSection>
          <SidebarSectionHeader
            icon="image"
            onChange={(val) => setMessageHeaderShow(val)}
            open={messageHeaderShow}
            text="Header"
          />
          <div className={headerDisplay}>
            <input
              type="file"
              ref={imageInputRef}
              accept=".png,.jpg,.jpeg,.gif"
              className="hidden"
              id="headerImage"
              name="headerImage"
              onChange={(e) => {
                const file = (e.target.files || [])[0];
                if (file) {
                  const reader = new FileReader();
                  reader.addEventListener('load', e => {
                    setMessageHeaderImage(e.target?.result as string);
                  });
                  reader.readAsDataURL(file);
                }
              }}
            />
            <ButtonWhite onClick={uploadImage}>Upload Image</ButtonWhite>
            <Tip header="Image header tips">
              Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the message (eg discounts, gifts, etc.)
            </Tip>
          </div>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionHeader
            icon="letters"
            onChange={(_) => void(0)}
            required
            text="Body message"
          />
          <Textarea onChange={(val) => setMessageBodyMessage(val)} value={messageBodyMessage} />
          <Tip header="What are variables?">
            Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes.
          </Tip>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionHeader
            icon="letters"
            onChange={(val) => setMessageFooterShow(val)}
            open={messageFooterShow}
            text="Footer text"
          />
          <div className={footerDisplay}>
            <Textarea onChange={(val) => setMessageFooterMessage(val)} value={messageFooterMessage} />
          </div>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionHeader
            icon="rect"
            onChange={(val) => setMessageButtonsShow(val)}
            open={messageButtonsShow}
            text="Buttons"
          />
          <div className={buttonsDisplay}>
            {messageButtons.map((btn, idx) => (
              <SidebarNewButton
                idx={idx}
                key={`${btn.label}-${idx}`}
                onChange={(val) => {
                  setMessageButtons((_) => {
                    btn.label = val;
                    return [...messageButtons];
                  })
                }}
                onDelete={() => {
                  setMessageButtons((buttons) => {
                    const newButtons = buttons.filter(b => b !== btn);
                    return [...newButtons];
                  })
                }}
                value={btn.label}
              />
            ))}
          </div>
        </SidebarSection>
      </div>
      <div className="flex flex-col my-4">
        <ButtonBlau onClick={updateMessage}>Save</ButtonBlau>
        <ButtonWhite onClick={deleteMessage}>Delete</ButtonWhite>
      </div>
    </div>
  )
}