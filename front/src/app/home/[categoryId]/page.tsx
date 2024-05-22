"use client";

import Cards from "@/components/cards/Cards";
import { getProducts } from "@/helpers/product.helper";
import { IProduct } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Category() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const pathname = usePathname();

    const categoryPaths: { [key: number]: string } = {
        1: "/home/MacBook",
        2: "/home/iPad",
        3: "/home/iPhone",
        4: "/home/Watch",
        5: "/home/AirPods",
        6: "/home/iMac",
        7: "/home/accesories",
    };

    useEffect(() => {
        setTimeout(async () => {
            const productsData = await getProducts();
            setProducts(productsData);
            setLoading(false);
        }, 250);
    }, []);

    const productosFiltrados = products.filter((product) => {
        const categoryPath = categoryPaths[product.categoryId];
        return pathname === categoryPath;
    });

    // // Filtro para que los productos por categorias que no se usó
    // const productosFiltrados = products.filter((product) => {
    //     if (product.categoryId === 1 && pathname === "/home/MacBook") {
    //         return product;
    //     }

    //     if (product.categoryId === 2 && pathname === "/home/iPad") {
    //         return product;
    //     }

    //     if (product.categoryId === 3 && pathname === "/home/iPhone") {
    //         return product;
    //     }

    //     if (product.categoryId === 4 && pathname === "/home/Watch") {
    //         return product;
    //     }

    //     if (product.categoryId === 5 && pathname === "/home/AirPods") {
    //         return product;
    //     }

    //     if (product.categoryId === 6 && pathname === "/home/iMac") {
    //         return product;
    //     }
    // });

    return (
        <div className="h-full">
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <p className="text-lg">Cargando...</p>
                </div>
            ) : (
                <div>
                    {productosFiltrados.length > 0 ? (
                        <Cards products={productosFiltrados} />
                    ) : (
                        <div className="mt-5 mx-5 h-[700px]">
                            <div className="content-center w-full p-12 text-center min-h-20 bg-neutral-100">
                                <p className="pb-2 text-xl font-semibold">
                                    Actualmente, no contámos con este producto.
                                </p>
                                <p className="text-lg">
                                    Pero te recomendamos que te suscribas a
                                    nuestro newsletter para recibir todas las
                                    novedades.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
