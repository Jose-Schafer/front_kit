export default function Home() {
  return (
    <div className="flex bg-red-50 p-4 h-screen w-screen">
      <div className="flex-none bg-green-50">Left Bar</div>
      <div className="flex-4 bg-blue-50">Left Panel</div>
      <div className="flex-7 flex flex-col bg-yellow-50">
        <div className="flex-1">Chat Top Bar</div>
        <div className="flex-12">Chat Panel</div>
      </div>
    </div>
  );
}
