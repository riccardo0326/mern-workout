import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <div data-theme="forest">
        <button className="btn btn-outline">Test daisyUI</button>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
