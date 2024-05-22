import { IProduct } from "@/types/index";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB() {
    try {
        const res = await fetch(`${apiUrl}/products/`, {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache",
            },
            next: { revalidate: 1 },
        });
        const products: IProduct[] = await res.json();
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getProducts() {
    try {
        const productsDB = await getProductsDB();
        return productsDB;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getProductById(id: string) {
    try {
        const products = await getProducts();
        const product = products.find(
            (product) => product.id?.toString() === id
        );
        if (!product) throw new Error("Product not found");
        return product;
    } catch (error: any) {
        throw new Error(error);
    }
}
