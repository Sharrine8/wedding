import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__info">
        <h1 className="header__title">Welcome to the Wedding </h1>
        <h1 className="header__title">of Christia & Mark</h1>
      </div>
    </header>
  );
}

export default Header;
