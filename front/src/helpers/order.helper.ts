const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
    try {
        const response = await fetch(`${apiUrl}/orders/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({ products }),
        });
        return await response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getOrders(token: string) {
    try {
        if (!token) {
            throw new Error("No existe el token");
        }
        const response = await fetch(`${apiUrl}/users/orders`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}
