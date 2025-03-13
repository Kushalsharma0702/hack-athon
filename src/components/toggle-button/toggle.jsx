import React, {useState} from "react";
import "./toggle.scss";

import DarkModeToggle from "react-dark-mode-toggle";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div className="tgl">
      <DarkModeToggle
        className="toggle_btn"
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={10000}

      />
    </div>
  );
};
