import { ArrowRightIcon, LeafIcon } from "lucide-react";
import herobg from "../../assets/hero_bg.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      {/* shadow div */}
      <div className="absolute inset-0 z-10  bg-linear-to-r from-app-green via-app-green/65 to-transparent pointer-events-none rounded-3xl"></div>
      <div
        className="min-h-135 rounded-3xl flex items-center  bg-cover"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="p-8 py-20 gap-5 relative z-20">
          <div className="flex flex-col md:pl-10 sm:w-full md:w-xl gap-5">
            <div className="w-43 bg-[#FFB86A1A] flex items-center pl-4 py-1.5 gap-1.5 rounded-2xl">
              <LeafIcon className="text-[#FFB86A]" size={12} />
              <span className="text-[#FFB86A] text-[12px]">
                Farm-Fresh & Organic
              </span>
            </div>

            <p className="font-serif text-[60px] leading-18.75 font-normal text-white">
              Nourish your home with
              <span className="text-[#FFB86A]"> Earth's finest</span>
            </p>

            <p className="font-sans text-gray-300 font-normal leading-6.5">
              Fresh, organic groceries delivered from local farms to your
              doorstep. Quality you can taste, convenience you deserve.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-3 md:flex-row">
              <Link
                to="/products"
                className="px-7 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition-all flex-center gap-2 active:scale-[0.98]"
              >
                Shop Now <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                to="/products"
                className="px-7 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 text-center"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
