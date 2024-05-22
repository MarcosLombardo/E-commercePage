import Cards from "@/components/cards/Cards";
import { getProducts } from "@/helpers/product.helper";

export default async function Products() {
    const products = await getProducts();

    return (
        <>
            <div className="h-full">
                <Cards products={products} />
            </div>
        </>
    );
}
