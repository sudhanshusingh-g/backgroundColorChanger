import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={()=>setColor("violet")}
            className="outline-none shadow-lg px-4 py-1 text-black rounded-3xl"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
          onClick={()=>setColor("indigo")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onClick={()=>setColor("blue")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={()=>setColor("green")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={()=>setColor("yellow")}
            className="outline-none shadow-lg px-4 py-1 text-black rounded-3xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={()=>setColor("orange")}
            className="outline-none shadow-lg px-4 py-1 text-black rounded-3xl"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={()=>setColor("red")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={()=>setColor("pink")}
            className="outline-none shadow-lg px-4 py-1 text-black rounded-3xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={()=>setColor("magenta")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={()=>setColor("cyan")}
            className="outline-none shadow-lg px-4 py-1 text-white rounded-3xl"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
