import { useState } from "react";
import logo from "../assets/temu_logo.png";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#e23722] py-2 text-white sticky top-0 z-50 shadow-md">
      <nav className="w-[90%] lg:w-[70%] m-auto flex flex-col lg:flex-row justify-between items-center gap-3">
        {/* Top Header Row */}
        <div className="w-full flex items-center justify-between lg:w-auto gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
            <img src={logo} alt="Temu Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          {/* Cart Icon on Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="#" className="relative flex items-center p-1">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </a>
          </div>
        </div>

        {/* Desktop Category Navigation */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-medium whitespace-nowrap">
          <a href="#" className="hover:bg-[#5E0A00] px-2 py-1 rounded transition-colors">Best-selling Items</a>
          <a href="#" className="hover:bg-[#5E0A00] px-2 py-1 rounded transition-colors">5-star Rated</a>
          <a href="#" className="hover:bg-[#5E0A00] px-2 py-1 rounded transition-colors">New In</a>
          <a href="#" className="hover:bg-[#5E0A00] px-2 py-1 rounded transition-colors">Categories</a>
        </div>

          {/* Search bar on mobile (centered/expanded) */}
          <div className="flex-1 max-w-[500px] mx-2">
            <Searchbar />
          </div>

        {/* User Account / Secondary Actions */}
        <div className="hidden lg:flex items-center gap-6 text-xs sm:text-sm whitespace-nowrap">
          <a href="#" className="flex items-center gap-2 hover:opacity-90">
            <span className="material-symbols-outlined text-2xl">person</span>
            <div className="text-left text-xs">
              <p className="opacity-90 leading-tight">Sign in/Register</p>
              <p className="font-semibold leading-tight">Orders & Account</p>
            </div>
          </a>
          <a href="#" className="hover:opacity-90">
            Support
          </a>
          <a href="#" className="hover:opacity-90">
            English
          </a>
          <a href="#" className="flex items-center p-1 hover:opacity-90">
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="w-full lg:hidden flex flex-col gap-2 pt-2 border-t border-white/20 mt-1">
            <div className="flex flex-col gap-1 text-sm font-medium">
              <a href="#" className="hover:bg-[#5E0A00] px-3 py-2 rounded">Best-selling Items</a>
              <a href="#" className="hover:bg-[#5E0A00] px-3 py-2 rounded">5-star Rated</a>
              <a href="#" className="hover:bg-[#5E0A00] px-3 py-2 rounded">New In</a>
              <a href="#" className="hover:bg-[#5E0A00] px-3 py-2 rounded">Categories</a>
            </div>
            <div className="flex items-center justify-around py-2 border-t border-white/10 text-xs mt-1">
              <a href="#" className="flex items-center gap-1">
                <span className="material-symbols-outlined">person</span>
                <span>Sign In</span>
              </a>
              <a href="#">Support</a>
              <a href="#">English</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
