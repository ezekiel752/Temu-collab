import logo from "../assets/temu_logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="bg-[#e23722] px-70.25 py-1 text-white ">
      <nav className="flex justify-between items-center">
        <img src={logo} alt="" className="h-12 w-12" />
        <div className="flex justify-between items-center gap-5 *:hover:bg-[#5E0A00] *:hover:p-2 ">
          <a>Best-selling Items</a>
          <a>5-star Rated</a>
          <a>New In</a>
          <a>Categories</a>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex items-center gap-2 justify-between gap-10">
          <a href="" className="flex items-center gap-2">
            <span className="material-symbols-outlined">person</span>
            <div className="text">
              <p>Sign in/Register</p>
              <p className="font-semibold">Orders & Account</p>
            </div>
          </a>
          <a href="">
            <span></span>
            Support
          </a>
          <a href="">
            <span></span>
            English
          </a>
          <a href="">
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
