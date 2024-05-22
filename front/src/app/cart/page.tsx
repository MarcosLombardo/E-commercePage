"use client";

import { createOrder } from "@/helpers/order.helper";
import { IProduct, IUserSession } from "@/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Cart() {
    const [token, setToken] = useState<IUserSession>();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== undefined && window.localStorage) {
            const userToken = localStorage.getItem("userSession");
            setToken(JSON.parse(userToken!));
            !userToken && redirect("/login");
        }

        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
        setTotal(calculateTotal(storedCart));
    }, []);

    const calculateTotal = (cart: IProduct[]): number => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    };

    async function handleClick() {
        try {
            const orderProducts = new Set(cart.map((product) => product.id));

            Swal.fire({
                icon: "info",
                text: "¿Estás seguro de terminar la compra?",
                confirmButtonText: "Finalizar la compra",
                confirmButtonColor: "#036280",
                showCancelButton: true,
                cancelButtonText: "Seguir comprando",
                cancelButtonColor: "#c36961",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Fantástico",
                        text: "La compra se realizó exitosamente. Muchas gracias.",
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: "#036280",
                        customClass: {
                            popup: "custom-swal-font",
                        },
                    });
                    createOrder(Array.from(orderProducts), token?.token!);
                    localStorage.setItem("cart", "[]");
                    setCart([]);
                    setTotal(0);
                    router.push("/dashboard");
                }
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }

    const handleRemoveItem = (productId: number) => {
        const productIndex = cart.findIndex(
            (product) => product.id === productId
        );
        if (productIndex !== -1) {
            Swal.fire({
                icon: "warning",
                text: "¿Estás seguro que deseas eliminar el producto seleccionado?",
                confirmButtonText: "Eliminar",
                confirmButtonColor: "#c36961",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                cancelButtonColor: "#036280",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    const updatedCart = [...cart];
                    updatedCart.splice(productIndex, 1);
                    setCart(updatedCart);
                    setTotal(calculateTotal(updatedCart));
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                }
            });
        }
    };

    return (
        <div className="flex flex-wrap py-10">
            <div className="content-center w-screen h-20 p-8 bg-neutral-100">
                <h3 className="text-3xl font-extralight text-apblack">
                    Tu carrito
                </h3>
            </div>

            <div className="flex justify-center w-full gap-5 my-6">
                <div className="flex flex-col w-3/5 rounded-md bg-neutral-100">
                    {cart.length > 0 ? (
                        cart?.map((el, i) => {
                            return (
                                <div
                                    className="flex items-center gap-6 p-8 justify-evenly"
                                    key={i}
                                >
                                    <img
                                        className="w-20"
                                        src={el.image}
                                        alt={el.name}
                                    />
                                    <p className="text-lg">{el.name}</p>
                                    <p className="text-lg font-semibold">
                                        u$d {el.price}
                                    </p>
                                    <button
                                        className="mx-5 text-4xl text-red-500"
                                        onClick={() => handleRemoveItem(el.id)}
                                    >
                                        {" "}
                                        ✗{" "}
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <div className="p-8">
                            <h4 className="text-xl font-light text-apblack">
                                Tu carrito esta vacío.
                            </h4>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center w-3/12 h-40 text-center rounded-md bg-neutral-100">
                    <p className="font-bold">Total: u$d {total}</p>
                    <button
                        disabled={cart.length === 0}
                        onClick={handleClick}
                        className="p-2 m-2 text-center border-gray-300 rounded-lg w-52 text-apwhite bg-apblue hover:bg-apmarineblue disabled:border disabled:text-apblack disabled:bg-apwhite disabled:pointer-events-none"
                    >
                        Realizar compra
                    </button>
                </div>
            </div>
        </div>
    );
}
