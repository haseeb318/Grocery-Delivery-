import { BikeIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Navbar() {
  const user: any = { name: "user", email: "example@gmail.com", isAdmin: true };
  const { cartCount, setIsCartOpen } = {
    cartCount: 5,
    setIsCartOpen: (_data: any) => {},
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const naviagte = useNavigate();
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex item-center justify-between h-16 gap-4">
        {/* log  */}
        <Link
          to="/"
          className="flex items-center gap-2  text-[22px] font-medium shrink-0"
        >
          <BikeIcon size={24} /> Instacarta
        </Link>
        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          {/* Nav link- desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/deals" className="text-app-orange">
              Deals
            </Link>
          </div>
          {/* search */}
          <form
            action=""
            className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-xs"
          >
            <div>
              <SearchIcon />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
