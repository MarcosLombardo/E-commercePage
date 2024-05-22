"use client";

import { getOrders } from "@/helpers/order.helper";
import { IOrder, IUserSession } from "@/types";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Dashboard() {
    const [userSession, setUserSession] = useState<IUserSession>();
    const [orders, setOrders] = useState<IOrder[]>();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem("userSession");
            setUserSession(JSON.parse(userToken!));
            !userToken && redirect("/login");
        }
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const response = await getOrders(userSession?.token!);
                setOrders(response);
            } catch (error: any) {
                throw new Error(error);
            }
        }
        userSession && getData();
    }, [userSession]);

    const handleLogout = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            Swal.fire({
                icon: "info",
                text: "¿Estás seguro que deseas cerrar sesión?",
                confirmButtonText: "Cerrar sesión",
                confirmButtonColor: "#036280",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                cancelButtonColor: "#c36961",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("userSession");
                    router.push("/login");
                }
            });
        }
    };

    return (
        <div className="h-full py-10">
            {/* Datos del usuario */}
            <div className="mb-6">
                <div className="content-center w-screen h-20 p-8 bg-neutral-100">
                    <h3 className="text-3xl font-extralight text-apblack">
                        Mis datos
                    </h3>
                </div>
                <div className="flex">
                    <div className="py-10 ml-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-24 h-24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </div>
                    <div className="p-10">
                        <h1 className="mb-3 text-3xl font-semibold">
                            ¡Bienvenido, {userSession?.userData?.name}!
                        </h1>
                        <p className="m-1 text-lg font-extralight">
                            <span className="font-medium">Email: </span>
                            {userSession?.userData?.email}
                        </p>
                        <p className="m-1 text-lg font-extralight">
                            <span className="font-medium">Dirección: </span>
                            {userSession?.userData?.address}
                        </p>
                        <p className="m-1 text-lg font-extralight">
                            <span className="font-medium">Teléfono: </span>
                            {userSession?.userData?.phone}
                        </p>
                        <button
                            onClick={handleLogout}
                            className="p-2 m-4 text-center border-gray-300 rounded-lg w-52 text-apwhite bg-apblue hover:bg-apmarineblue"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>

            {/* Compras del usuario */}
            <div className="mb-6">
                <div className="content-center w-screen h-20 p-8 bg-neutral-100">
                    <h3 className="text-3xl font-extralight text-apblack">
                        Mis compras
                    </h3>
                </div>
                <div className="p-10">
                    {orders?.length! > 0 ? (
                        orders?.map((el, i) => {
                            return (
                                <div
                                    key={i}
                                    className="shadow-xl max-w-[350px] p-2 m-4 border rounded-md border-apgray bg-apwhite"
                                >
                                    <p className="text-base font-medium text-center">
                                        Compra realizada:{" "}
                                        <span className="text-sm font-light">
                                            {new Date(el.date).toLocaleString()}
                                        </span>
                                    </p>
                                    <div>
                                        {el.products.map((e, j) => {
                                            return (
                                                <div
                                                    className="flex flex-row items-center gap-3 py-2"
                                                    key={j}
                                                >
                                                    <p>{e.name}</p>
                                                    <img
                                                        className="h-10"
                                                        src={e.image}
                                                        alt={e.name}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p className="text-center text-green-500">
                                        {el.status} ✓
                                    </p>
                                </div>
                            );
                        })
                    ) : (
                        <div>
                            <p>No realizaste ninguna compra, aún</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
