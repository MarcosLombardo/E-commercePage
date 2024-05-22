import { IProduct } from "@/types";
import Card from "../card/Card";
import Link from "next/link";

const Cards = ({ products }: { products: IProduct[] }) => {
    return (
        <div className="flex flex-wrap justify-center gap-5 py-5">
            {products?.map((product) => {
                return (
                    <Link href={`/products/${product.id}`} key={product.name}>
                        <Card key={product.name} {...product} />
                    </Link>
                );
            })}
        </div>
    );
};

export default Cards;
