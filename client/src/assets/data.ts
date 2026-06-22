import {
  TruckIcon,
  LeafIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
// import hero_bg from "./hero_bg.jpeg";
// import delivery_truck from "./delivery_truck.svg";
import fruits_vegetables from "./fruits_vegetables.png";
import dairy_eggs from "./dairy_eggs.png";
import bakery from "./bakery.png";
import drinks from "./drinks.png";
import pantry_staples from "./pantry_staples.png";
import snacks from "./snacks.png";
import frozen_foods from "./frozen_foods.png";
import personal_care from "./personal_care.png";
import baby_care from "./baby_care.png";
import meat_seafood from "./meat_seafood.png";

export const heroSectionData = {
  //   description:
  //     "Fresh, organic groceries delivered from local farms to your doorstep. Quality you can taste, convenience you deserve.",
  //   hero_image: hero_bg,
  hero_features: [
    { icon: TruckIcon, title: "Free Delivery", desc: "Orders over $20" },
    { icon: LeafIcon, title: "100% Organic", desc: "Certified products" },
    { icon: ClockIcon, title: "Same Day", desc: "Express delivery" },
    { icon: ShieldCheckIcon, title: "Secure Pay", desc: "Safe checkout" },
  ],
};

export const categoriesData = [
  {
    slug: "fruits-vegetables",
    name: "Fruits & Vegetables",
    image: fruits_vegetables,
  },
  { slug: "personal-care", name: "Personal Care", image: personal_care },
  { slug: "pantry-staples", name: "Pantry Staples", image: pantry_staples },
  { slug: "bakery", name: "Bakery", image: bakery },
  { slug: "beverages", name: "Beverages", image: drinks },
  { slug: "meat-seafood", name: "Meat & Seafood", image: meat_seafood },
  { slug: "snacks", name: "Snacks", image: snacks },
  { slug: "frozen-foods", name: "Frozen Foods", image: frozen_foods },
  { slug: "baby-care", name: "Baby Care", image: baby_care },
  { slug: "dairy-eggs", name: "Dairy & Eggs", image: dairy_eggs },
];
