import { ILogin } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function handleLogin(userData: ILogin) {
    try {
        const response = await fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("Error al iniciar sesión");
        }
        const json = await response.json();
        const { token, user } = json;
        localStorage.setItem(
            "userSession",
            JSON.stringify({ token: token, userData: user })
        );
    } catch (error: any) {
        throw new Error(error);
    }
}
