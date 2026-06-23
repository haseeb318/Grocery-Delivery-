import delivery_truck from "../../assets/delivery_truck.svg";
function AppPromoBanner() {
  return (
    <section className="max-w-7xl bg-[#032E15] px-8 py-20 rounded-2xl ">
      <div className="flex flex-col lg:flex-row px-10 justify-between gap-28.25">
        {/* left side  */}
        <div className="fex flex-col w-full md:w-119.75">
          <h2 className="font-medium text-white font-serif text-[36px]">
            Get fresh groceries in minutes
          </h2>

          <p className="text-gray-400 font-sans text-[16px] py-3">
            Download the Instacart app for exclusive deals, real-time tracking,
            and the freshest selection delivered right to your door.
          </p>

          <div className="flex gap-3 pt-3">
            <button className="bg-white text-[#032E15] font-medium px-6 py-3.25 rounded-xl">
              App Store
            </button>
            <button className="bg-[#FFFFFF1A] text-white font-medium px-6 py-3.25 rounded-xl">
              Google Play
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-120 px-9.25">
          <img src={delivery_truck} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default AppPromoBanner;
