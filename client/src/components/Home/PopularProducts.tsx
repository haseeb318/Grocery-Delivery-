import type { Product } from "../../types";
import { dummyProducts } from "../../assets/data";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const PopularProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    setProduct(dummyProducts.slice(0, 10));
  }, []);
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Popular Products</h2>
            <p className="text-sm text-app-text-light mt-1">
              Top-related Products this season
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-app-orange 
           hover:text-app-orange-dark flex item-center gap-1 transition-all"
          >
            View <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
          {product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
