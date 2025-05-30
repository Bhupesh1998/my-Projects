import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <section
      className="containersectionStyle"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input className="inputStyle" type="text" placeholder="Search..." />
      ) : (
        <SearchIcon onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default SearchBar;

