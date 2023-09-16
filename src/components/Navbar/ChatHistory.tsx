import useChat, { selectChatsIds } from "../../store/store";
import ChatRef from "./ChatRef";

export default function ChatHistory() {
  const chatsHistory = useChat(selectChatsIds);
  return (
    <div className="my-4 text-[#ECECF1]">
      <h3 className=" text-sm my-2 text-[#8E8EA0] pl-2">Previous 7 days</h3>
      {chatsHistory.map((chatId) => (
        <ChatRef key={chatId} chatId={chatId} />
      ))}
    </div>
  );
}