"use client";

import { handleLogin } from "@/helpers/login.helper";
import { ILoginError, ILogin } from "@/types";
import { validateLogin } from "@/utils/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
    const router = useRouter();

    const [userData, setUserData] = useState<ILogin>({
        email: "",
        password: "",
    });

    const [errorUser, setErrorUser] = useState<ILoginError>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        try {
            await handleLogin(userData);
            Swal.fire({
                icon: "success",
                title: "¡Bienvenido!",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#036280",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/home");
                }
            });
        } catch (error: any) {
            Swal.fire({
                icon: "error",
                title: "Hubo un error",
                text: "No pudimos iniciar sesión. Algún dato fue incorrecto.",
                customClass: {
                    popup: "custom-swal-font",
                },
            });
        }
    };

    useEffect(() => {
        setErrorUser(validateLogin(userData));
    }, [userData]);

    return (
        <div className="flex flex-col content-center justify-center text-center min-h-[500px] bg-apwhite text-apblack">
            <h1 className="mb-1 text-3xl">Login</h1>
            <p className="mx-4 mb-4 text-lg font-light">
                Por favor, ingresá el email con el que te registraste y tu
                password para iniciar sesión
            </p>
            <form
                className="flex flex-col items-center justify-center mb-2"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <div className="w-[480px] py-10 border border-gray-300 shadow-md rounded-xl">
                    {/* label + input email */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="email-adress" className="w-32">
                                Tu email:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="email-adress"
                                name="email"
                                value={userData.email}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorUser.email}
                        </div>
                    </div>
                    {/* label + input password */}
                    <div className="flex flex-col">
                        <div className="flex items-center px-4 text-start">
                            <label htmlFor="password" className="w-32">
                                Password:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="password"
                                name="password"
                                value={userData.password}
                                type="password"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        disabled={
                            userData.email === "" ||
                            userData.password === "" ||
                            !!errorUser.email ||
                            !!errorUser.password
                        }
                        type="submit"
                        className="p-2 m-4 text-center border-gray-300 rounded-lg w-52 text-apwhite bg-apblue hover:bg-apmarineblue disabled:border disabled:text-apblack disabled:bg-apwhite disabled:pointer-events-none"
                    >
                        Iniciar sesión
                    </button>
                </div>
                {/* Texto de ayuda bajo el botón */}
                <p>
                    ¿No tiene cuenta?{" "}
                    <Link
                        href="/register"
                        className="font-bold text-apmarineblue hover:text-apblue"
                    >
                        Registrarse
                    </Link>
                </p>
                <p>
                    ¿Olvidaste la contraseña?{" "}
                    <Link
                        href="/forget"
                        className="font-bold text-apmarineblue hover:text-apblue"
                    >
                        Click aquí
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
