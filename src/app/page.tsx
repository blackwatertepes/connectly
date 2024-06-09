import Header from "./components/header";
import MessageExample from "./components/message-example";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex justify-stretch bg-neutral-100">
      <div className="w-[56px] h-screen bg-mono-900"></div>
      <div className="flex flex-col grow">
        <Header label="Create a campaign" />
        <div className="flex grow justify-stretch">
          <Sidebar />
          <div className="flex grow items-start justify-center mt-[20px]">
            <MessageExample />
          </div>
        </div>
      </div>
    </div>
  );
}
