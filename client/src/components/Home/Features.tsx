import { heroSectionData } from "../../assets/data";
function Features() {
  return (
    <section className="bg-white py-5 border border-app-border/80 rounded-xl my-10">
      <div className="mx-auto px-4 sm:px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroSectionData.hero_features.map((features, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <div className="sixe-10 rounded-lg bg-app-cream flex-center shrinl-0">
                <features.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-app-green">
                  {features.title}
                </p>
                <p className="text-xs text-app-green-light">{features.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
