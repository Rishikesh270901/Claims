import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Claims = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          

          {/* Table Integration */}
          <div className="mt-8 bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold mb-4">Policy Details</h4>
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Claims;
