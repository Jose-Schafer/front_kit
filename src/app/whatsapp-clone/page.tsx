"use client";
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbMessageFilled } from "react-icons/tb";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineGroups } from "react-icons/md";
import { format, parseISO } from "date-fns";

const BG_PRIMARY_COLOR = "bg-[#202c32]";
const BG_SECONDARY_COLOR = "bg-[#0b141b]";
const MESSAGE_PRIMARY_COLOR = "bg-[#185d4b]";
const MESSAGE_SECONDARY_COLOR = "bg-[#202c32]";
const FONT_PRIMARY_COLOR = "text-white";
const FONT_SECONDARY_COLOR = "text-[#33a884]";
const FONT_TERTIARY_COLOR = "text-[#202c32]";
const DEFAULT_FONT_STYLE = `font-mono font-black ${FONT_PRIMARY_COLOR}`;
const DEFAULT_BORDER_STYLE = "border-1 border-solid border-[#2e3b40]";
const SELECTED_ICON_BACKGROUND_COLOR = "bg-[#3c464c]";
const ICON_COLOR = "text-[#aebac1]";

const CURRENT_USER_ID = 1;

interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
  read: boolean;
}

interface Chat {
  id: number;
  name: string;
  status: string;
  lastConnection: string;
  messages: Message[];
}

const chats: Chat[] = [
  {
    id: 1,
    name: "John Doe",
    status: "Online",
    lastConnection: "2023-04-01T12:02:00Z",
    messages: [
      {
        id: 1,
        senderId: 2,
        text: "Hello!",
        timestamp: "2023-04-01T12:00:00Z",
        read: true,
      },
      {
        id: 2,
        senderId: 1,
        text: "How are you?",
        timestamp: "2023-04-01T12:01:00Z",
        read: true,
      },
      {
        id: 3,
        senderId: 2,
        text: "I'm good, thanks!",
        timestamp: "2023-04-01T12:02:00Z",
        read: true,
      },
      {
        id: 4,
        senderId: 1,
        text: "That's really good to hear!",
        timestamp: "2023-04-01T14:48:00Z",
        read: true,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    status: "Offline",
    lastConnection: "2023-04-01T19:07:00Z",
    messages: [
      {
        id: 1,
        senderId: 2,
        text: "Hi there!",
        timestamp: "2023-04-01T12:05:00Z",
        read: true,
      },
      {
        id: 2,
        senderId: 1,
        text: "I'm good, thanks!",
        timestamp: "2023-04-01T12:06:00Z",
        read: false,
      },
      {
        id: 3,
        senderId: 2,
        text: "How about you?",
        timestamp: "2023-04-01T19:07:00Z",
        read: false,
      },
    ],
  },
];

function formatDateTime(timestamp: string) {
  const date = parseISO(timestamp);
  return format(date, "HH:mm");
}

function LeftBar() {
  return (
    <div className="w-fit mx-4 mt-4">
      <div>
        <div className={`p-2 rounded-full ${SELECTED_ICON_BACKGROUND_COLOR}`}>
          <TbMessageFilled
            className={`w-8 h-8 mx-auto my-auto ${ICON_COLOR}`}
          />
        </div>
        <div className="mt-4">
          <HiOutlineStatusOnline
            className={`w-8 h-8 mx-auto my-auto ${ICON_COLOR}`}
          />
        </div>
        <div className="mt-4">
          <MdOutlineGroups
            className={`w-8 h-8 mx-auto my-auto ${ICON_COLOR}`}
          />
        </div>
      </div>
    </div>
  );
}

function TopBar({ chat }: { chat: Chat }) {
  return (
    <div className="m-4 flex">
      <div className="flex-1">
        <FaRegCircleUser className="w-12 h-12 mx-auto my-auto" />
      </div>
      <div className="flex-11">
        <h1>{chat.name}</h1>
        <p className="font-light text-sm text-gray-500">
          {chat.lastConnection}
        </p>
      </div>
    </div>
  );
}

function TopLeftBar() {
  return (
    <div className="flex">
      <h1>Chats</h1>
      <input />
      <div></div>
    </div>
  );
}

function Message({ message }: { message: Message }) {
  const isCurrentUser = message.senderId === CURRENT_USER_ID;
  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`mx-2 ${isCurrentUser ? MESSAGE_PRIMARY_COLOR : MESSAGE_SECONDARY_COLOR} text-end rounded-xl p-3 my-2 w-fit`}
      >
        <p className={`${FONT_PRIMARY_COLOR}`}>{message.text}</p>
        <p
          className={`font-light text-sm ${isCurrentUser ? "text-green-950" : "text-gray-500"}`}
        >
          {formatDateTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
}

function ChatPanel({ chat }: { chat: Chat }) {
  return (
    <div className="flex flex-col">
      {chat.messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

function ChatListItem({
  chat,
  setSelectedChat,
}: {
  chat: Chat;
  setSelectedChat: (chat: Chat) => void;
}) {
  const lastMessage = chat.messages[chat.messages.length - 1];

  const unreadMessages = chat.messages.filter((message) => !message.read);

  return (
    <div
      key={chat.id}
      className={`flex mr-4`}
      onClick={() => setSelectedChat(chat)}
    >
      <div className="flex flex-1 mx-2">
        <FaRegCircleUser className="w-10 h-10 mx-auto my-auto" />
      </div>
      <div
        className={`flex flex-10 flex-col ${DEFAULT_BORDER_STYLE} border-x-0 border-t-0 py-2`}
      >
        <div className="flex justify-between">
          <h1>{chat.name}</h1>
          <h1 className={`${FONT_SECONDARY_COLOR}`}>
            {formatDateTime(lastMessage.timestamp)}
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-light text-gray-500">{lastMessage.text}</h1>
          {unreadMessages.length > 0 && (
            <div
              className={`rounded-full bg-[#33a884] ${FONT_TERTIARY_COLOR} flex items-center justify-center w-6 h-6`}
            >
              {unreadMessages.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppClone() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  return (
    <div
      className={`flex ${BG_PRIMARY_COLOR} p-4 h-screen w-screen ${DEFAULT_FONT_STYLE}`}
    >
      {/* Left Bar */}
      <div className={`flex-none ${DEFAULT_BORDER_STYLE} border-r-0`}>
        <LeftBar />
      </div>

      {/* Chat List */}
      <div
        className={`flex-4 flex flex-col ${DEFAULT_BORDER_STYLE} border-r-0 ${BG_SECONDARY_COLOR}`}
      >
        <div className={`flex-2 ${DEFAULT_BORDER_STYLE}`}>
          <TopLeftBar />
        </div>
        <div className={`flex-10 ${DEFAULT_BORDER_STYLE} border-t-0`}>
          {chats.map((chat) => (
            <ChatListItem
              chat={chat}
              setSelectedChat={setSelectedChat}
              key={chat.id}
            />
          ))}
        </div>
      </div>

      {/* Chat - Messages */}
      <div className={`flex-7 flex flex-col ${DEFAULT_BORDER_STYLE}`}>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE} border-l-0`}>
          <TopBar chat={selectedChat} />
        </div>
        <div
          className={`flex-11 ${DEFAULT_BORDER_STYLE} border-l-0 ${BG_SECONDARY_COLOR} p-8`}
        >
          {selectedChat && <ChatPanel chat={selectedChat} />}
        </div>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE} border-l-0`}>
          Input text panel
        </div>
      </div>
    </div>
  );
}
