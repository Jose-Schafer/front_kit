const BG_COLOR = "bg-[#202c32]";
const DEFAULT_FONT_STYLE = "font-mono font-black text-white";
const DEFAULT_BORDER_STYLE = "border-1 border-solid border-[#2e3b40]";

export default function WhatsAppClone() {
  return (
    <div
      className={`flex ${BG_COLOR} p-4 h-screen w-screen ${DEFAULT_FONT_STYLE}`}
    >
      <div className={`flex-none ${DEFAULT_BORDER_STYLE}`}>Left Bar</div>
      <div className={`flex-4 flex flex-col ${DEFAULT_BORDER_STYLE}`}>
        <div className={`flex-2 ${DEFAULT_BORDER_STYLE}`}>Top Left Bar</div>
        <div className={`flex-10 ${DEFAULT_BORDER_STYLE}`}>Chats</div>
      </div>
      <div className={`flex-7 flex flex-col ${DEFAULT_BORDER_STYLE}`}>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE}`}>Chat Top Bar</div>
        <div className={`flex-11 ${DEFAULT_BORDER_STYLE}`}>Chat Panel</div>
        <div className={`flex-1 ${DEFAULT_BORDER_STYLE}`}>Input text panel</div>
      </div>
    </div>
  );
}
