import { useState } from "react";
import CommandBar from "./components/CommandBar/CommandBar";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="app">
      <CommandBar />
      <div className="profile-section">
        <ProfileImage value={name} />
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
