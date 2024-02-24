import { useState } from "react";  
import { useSearchParams } from "react-router-dom";

function Header({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();
  
  
  const handleClick = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      });
    }
    setSearchTerm("");
  };

  

  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span>Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim
          in ratione? Eveniet aliquid provident libero numquam necessitatibus
          ad consequatur!
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.albawaba.net/sites/default/files/im_new/lana/TOAST1-insidephoto.jpg"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
