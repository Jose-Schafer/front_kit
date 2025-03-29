import { FaRegCircleUser } from "react-icons/fa6";

const BG_COLOR = "bg-[#202c32]";
const DEFAULT_FONT_STYLE = "font-mono font-black text-white";
const DEFAULT_BORDER_STYLE = "border-1 border-solid border-[#2e3b40]";

interface Message {
  id: number;
  text: string;
  timestamp: string;
  read: boolean;
}

interface Chat {
  id: number;
  name: string;
  status: string;
  messages: Message[];
}

const chats: Chat[] = [
  {
    id: 1,
    name: "John Doe",
    status: "Online",
    messages: [
      {
        id: 1,
        text: "Hello!",
        timestamp: "2023-04-01T12:00:00Z",
        read: true,
      },
      {
        id: 2,
        text: "How are you?",
        timestamp: "2023-04-01T12:01:00Z",
        read: true,
      },
      {
        id: 3,
        text: "I'm good, thanks!",
        timestamp: "2023-04-01T12:02:00Z",
        read: true,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    status: "Offline",
    messages: [
      {
        id: 1,
        text: "Hi there!",
        timestamp: "2023-04-01T12:05:00Z",
        read: true,
      },
      {
        id: 2,
        text: "I'm good, thanks!",
        timestamp: "2023-04-01T12:06:00Z",
        read: false,
      },
      {
        id: 3,
        text: "How about you?",
        timestamp: "2023-04-01T12:07:00Z",
        read: false,
      },
    ],
  },
];

function ChatListItem({ chat }: { chat: Chat }) {
  const lastMessage = chat.messages[chat.messages.length - 1];
  return (
    <div key={chat.id} className={`flex mx-2`}>
      <div className="flex flex-2">
        <FaRegCircleUser className="w-12 h-12 mx-auto my-auto" />
      </div>
      <div
        className={`flex flex-10 flex-col ${DEFAULT_BORDER_STYLE} border-x-0 border-t-0 py-2`}
      >
        <div className="flex flex-row-reverse">
          <h1>{lastMessage.timestamp}</h1>
        </div>
        <div className="flex justify-between">
          <h1>{chat.name}</h1>
          <h1>{lastMessage.read ? "Read" : "Unread"}</h1>
        </div>
        <h1 className="font-light text-gray-500">{lastMessage.text}</h1>
      </div>
    </div>
  );
}

export default function WhatsAppClone() {
  return (
    <div
      className={`flex ${BG_COLOR} p-4 h-screen w-screen ${DEFAULT_FONT_STYLE}`}
    >
      <div className={`flex-none ${DEFAULT_BORDER_STYLE} border-r-0`}>
        Left Bar
      </div>
      <div className={`flex-4 flex flex-col ${DEFAULT_BORDER_STYLE}`}>
        <div className={`flex-2 ${DEFAULT_BORDER_STYLE}`}>Top Left Bar</div>
        <div className={`flex-10 ${DEFAULT_BORDER_STYLE} border-t-0`}>
          {chats.map((chat) => (
            <ChatListItem chat={chat} key={chat.id} />
          ))}
        </div>
      </div>
      <div className={`flex-7 flex flex-col ${DEFAULT_BORDER_STYLE}`}>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE}`}>Chat Top Bar</div>
        <div className={`flex-11 ${DEFAULT_BORDER_STYLE}`}>Chat Panel</div>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE}`}>Input text panel</div>
      </div>
    </div>
  );
}
