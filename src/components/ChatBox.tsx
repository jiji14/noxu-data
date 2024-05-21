import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function ChatBox() {
  return (
    <div className="w-[800px] flex gap-4 justify-between">
      <div className="flex-grow flex border border-solid border-1 border-slate-300 rounded-md">
        <div className="px-3 py-2 flex items-center gap-2 border-r border-r-1 border-slate-300">
          <Image
            width={24}
            height={24}
            src="/images/message-circle.svg"
            alt="message icon"
          />
          <span>Chat</span>
          <Image
            src="/images/chevrons-up-down.svg"
            width={16}
            height={16}
            alt="sort icon"
          />
        </div>
        <div className="flex-grow px-3 py-2 flex gap-2 justify-between">
          <input
            className="flex-grow focus:outline-none input-placeholder"
            placeholder="Start a new chat"
          />
          <Image
            width={24}
            height={24}
            src="/images/send.svg"
            alt="send icon"
          />
        </div>
      </div>
      <CustomButton
        type="highlight"
        handleClick={() => console.log("End Chat")}
      >
        End Chat
      </CustomButton>
    </div>
  );
}
