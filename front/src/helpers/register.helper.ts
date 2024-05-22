import { IRegister } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function handleRegister(userRegister: IRegister) {
    try {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegister),
        });
    } catch (error: any) {
        throw new Error(error);
    }
}
