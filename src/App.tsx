import React from "react";
import Navbar from "@/layouts/Navbar";
import Drawer from "@/layouts/Drawer";

function App() {
  return (
    <div className="bg-slate-700 drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
      </div>
      <div className="drawer-side z-40">
        <Drawer />
      </div>
    </div>
  );
}

export default App;
