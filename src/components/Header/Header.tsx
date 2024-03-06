import { useState } from "react";
import logo from "../../assets/image.webp";
import "./styles.css";
import SearchInput from "../SearchInput/SearchInput";

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);

  const handleHeaderClick = () => {
    setIsSearching(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsSearching(true);
  };

  return (
    <div className="header" onClick={handleHeaderClick}>
      {isSearching ? (
        <SearchInput />
      ) : (
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>
      )}
    </div>
  );
}
