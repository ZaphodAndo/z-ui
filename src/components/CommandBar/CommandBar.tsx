import { useEffect, useState } from "react";
import useKeyPress from "./utils/useKeyPress";
import "./CommandBar.css";

const CommandBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstKey = useKeyPress("k");
  const secondKey = useKeyPress("Control");

  useEffect(() => {
    if (firstKey && secondKey) {
      setIsOpen(!isOpen);
      console.log("You pressed both keys at the same time");
    }
  }, [firstKey, secondKey]);

  if (isOpen) {
    return <input className="command-bar" type="text"></input>;
  } else {
    return null;
  }
};

export default CommandBar;
