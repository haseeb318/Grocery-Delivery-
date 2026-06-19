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
        <Link to="/" className=""></Link>
      </div>
    </nav>
  );
}

export default Navbar;
