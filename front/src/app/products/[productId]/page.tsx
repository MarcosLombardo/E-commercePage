"use client";

import { getProductById } from "@/helpers/product.helper";
import { IProduct, IUserSession } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function detailProduct({
    params,
}: {
    params: { productId: string };
}) {
    const router = useRouter();
    const [token, setToken] = useState<IUserSession>();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const fetchData = async () => {
            const product = await getProductById(params.productId);
            setProduct(product);
        };
        fetchData();

        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem("userSession");
            setToken(JSON.parse(userToken!));
        }
    }, []);

    const handleBuy = () => {
        if (!token) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes estar logueado para ingresar un producto al carrito.",
                confirmButtonText: "Ir al Login",
                confirmButtonColor: "#036280",
                showDenyButton: true,
                denyButtonText: "Seguir navegando",
                denyButtonColor: "#c36961",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/login");
                }
            });
        } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                icon: "success",
                text: "Producto agregado al carrito",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#036280",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/cart");
                }
            });
        }
    };

    return (
        <div className="flex flex-col p-10 m-10 border border-gray-300 rounded-lg shadow-xl">
            <div className="flex flex-wrap items-center content-center justify-center gap-24 pb-10">
                <div>
                    <img
                        className="h-64"
                        src={product?.image}
                        alt={product?.name}
                    />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-3xl font-bold">{product?.name}</h1>
                    <p className="font-sans text-xl">
                        u$d:{" "}
                        <span className="text-2xl font-extrabold">
                            {product?.price}
                        </span>
                    </p>
                    <button
                        className="w-56 p-2 m-4 text-center rounded-lg text-apwhite bg-apblue hover:bg-apmarineblue"
                        onClick={handleBuy}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
            <hr className="mx-20 mb-2 border-apblack" />
            <div className="pt-3 text-center text-md">
                <p>{product?.description}</p>
            </div>
        </div>
    );
}
