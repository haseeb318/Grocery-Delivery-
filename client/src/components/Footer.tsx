import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { BikeIcon, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="bg-app-green">
      <div className="max-w-7xl text-white mx-auto flex flex-wrap md:justify-center lg:justify-start px-8 pt-12 pb-10 gap-8">
        {/* brand name and description */}
        <div className="flex flex-col gap-4 w-full md:w-70">
          <Link
            to="/"
            className="flex items-center gap-2  text-white text-[20px] font-medium shrink-0"
          >
            <BikeIcon size={24} /> Instacarta
          </Link>
          <p className="text-[14px] text-[#FFFFFFB2]">
            Bringing fresh, organic groceries straight from local farms to your
            doorstep. Nourish your home with Earth's finest.
          </p>
          <div className="flex gap-3">
            <Link
              to="/"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/2"
            >
              <SiFacebook size={12} />
            </Link>
            <Link
              to="/"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/2"
            >
              <SiX size={12} />
            </Link>
            <Link
              to="/"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/2"
            >
              <SiInstagram size={12} />
            </Link>
          </div>
        </div>
        {/* Quick - links */}
        <div className="flex flex-col gap-4 w-full md:w-70">
          <p className="font-semibold text-[14px]">Quick Links</p>
          <div className="flex flex-col gap-2.5 ">
            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              All Products
            </Link>
            <Link to="/deals" className="block text-[14px] text-[#FFFFFFB2]">
              Flash Deals
            </Link>
            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              TrackOrder
            </Link>

            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              Delivery Partner
            </Link>
          </div>
        </div>
        {/* Customer Service */}
        <div className="flex flex-col gap-4 w-full md:w-70">
          <p className="font-semibold text-[14px]">Customer Service </p>
          <div className="flex flex-col gap-2.5 ">
            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              My Account
            </Link>
            <Link to="/deals" className="block text-[14px] text-[#FFFFFFB2]">
              Order History
            </Link>
            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              Addresses
            </Link>

            <Link to="/products" className="block text-[14px] text-[#FFFFFFB2]">
              Help Center
            </Link>
          </div>
        </div>
        {/* Adress Details */}
        <div className="flex flex-col gap-4 w-full md:w-70">
          <p className="font-semibold text-[14px]">Contact Us </p>
          <div className="flex flex-col gap-2.5 ">
            <p className="text-[14px] text-[#FFFFFFB2]">
              <MapPin size={14} className="inline" />
              <span className="pl-3">123 Green Valley Rd, Portland</span>
            </p>
            <p className="text-[14px] text-[#FFFFFFB2]">
              <Phone size={14} className="inline" />{" "}
              <span className="pl-3">+1 (111) 123-4567</span>
            </p>
            <p className="text-[14px] text-[#FFFFFFB2]">
              <Mail size={14} className="inline" />
              <span className="pl-3"> hello@example.com</span>
            </p>
          </div>
        </div>
      </div>
      {/* term and condition */}
      <div className="max-w-7xl mx-auto px-8 pb-10 pt-6 flex justify-between border border-t-white/10">
        <p className="text-[12px] text-[#FFFFFFB2]">
          © 2026 . All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link className="text-[12px] text-[#FFFFFFB2]" to="/">
            Privacy Policy
          </Link>
          <Link className="text-[12px] text-[#FFFFFFB2]" to="/">
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
