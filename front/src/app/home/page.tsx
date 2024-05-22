import Cards from "@/components/cards/Cards";
import Carousel from "@/components/carousel/Carousel";
import Categories from "@/components/categories/Categories";
import CategoriesSec from "@/components/categoriesSec/CategoriesSec";
import categoriesPpalesToPreload from "@/utils/categoriesPpales";
import categoriesSecToPreload from "@/utils/categoriesSec";
import Offer from "@/components/offer/Offer";
import { getProducts } from "@/helpers/product.helper";
import Link from "next/link";

export default async function Home() {
    const productos = await getProducts();

    const productosDestacados = productos.filter((product) => {
        return product.price < 200;
    });

    return (
        <div className="h-full">
            <Carousel />
            {/* Categorías principales */}
            <h1 className="mt-6 mb-3 text-3xl font-bold text-center">
                Categorías
            </h1>
            <Categories categories={categoriesPpalesToPreload} />
            {/* Categorías secundarias */}
            <CategoriesSec categories={categoriesSecToPreload} />
            {/* Destacados */}
            <h1 className="mt-12 text-3xl font-bold text-center">
                Productos destacados
            </h1>
            <Cards products={productosDestacados} />
            <Link
                href="/products"
                className="flex justify-center w-56 p-3 mx-auto my-3 border border-gray-300 rounded-lg bg-apblue text-apwhite hover:bg-apmarineblue hover:text-apwhite"
            >
                Ver todos los productos
            </Link>
            {/* Propaganda */}
            <Offer />
        </div>
    );
}
