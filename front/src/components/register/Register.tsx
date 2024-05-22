"use client";

import { handleRegister } from "@/helpers/register.helper";
import { IRegister, IRegisterError } from "@/types";
import { validateRegister } from "@/utils/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const router = useRouter();

    const [userRegister, setUserRegister] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    });

    const [errorRegister, setErrorRegister] = useState<IRegisterError>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        try {
            await handleRegister(userRegister);
            Swal.fire({
                icon: "success",
                title: `¡Bienvenido, ${userRegister.name}!`,
                text: "El registro fue exitoso.",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#036280",
                customClass: {
                    popup: "custom-swal-font",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push("/login");
                }
            });
        } catch (error: any) {
            console.error(error);
        }
    };

    useEffect(() => {
        setErrorRegister(validateRegister(userRegister));
    }, [userRegister]);

    return (
        <div className="flex flex-col content-center justify-center text-center min-h-[600px] bg-apwhite text-apblack">
            <h1 className="mb-1 text-3xl">Register</h1>
            <p className="mx-4 mb-4 text-lg font-light">
                Por favor, completá el siguiente formulario para registrarte y
                hacer compras en Mpple
            </p>

            <form
                className="flex flex-col items-center justify-center mb-2"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <div className="w-[480px] py-10 border border-gray-300 shadow-md rounded-xl ">
                    {/* label + input nombre */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="name" className="w-32">
                                Tu nombre:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={userRegister.name}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorRegister.name}
                        </div>
                    </div>
                    {/* label + input dirección */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="address" className="w-32">
                                Tu dirección:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={userRegister.address}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorRegister.address}
                        </div>
                    </div>
                    {/* label + input teléfono */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="phone" className="w-32">
                                Tu telefono:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                value={userRegister.phone}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorRegister.phone}
                        </div>
                    </div>
                    {/* label + input mail */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="email" className="w-32">
                                Tu email:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={userRegister.email}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorRegister.email}
                        </div>
                    </div>
                    {/* label + input password */}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center px-4 text-start">
                            <label htmlFor="password" className="w-32">
                                Password:{" "}
                                <span className="text-red-500">* </span>
                            </label>
                            <input
                                id="password"
                                name="password"
                                value={userRegister.password}
                                type="password"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorRegister.password}
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        disabled={
                            userRegister.name === "" ||
                            userRegister.address === "" ||
                            userRegister.phone === "" ||
                            userRegister.email === "" ||
                            userRegister.password === "" ||
                            !!errorRegister.name ||
                            !!errorRegister.phone ||
                            !!errorRegister.email
                        }
                        type="submit"
                        className="p-2 m-4 text-center border-gray-300 rounded-lg w-52 text-apwhite bg-apblue hover:bg-apmarineblue disabled:border disabled:text-apblack disabled:bg-apwhite disabled:pointer-events-none"
                    >
                        Registrarse
                    </button>
                </div>
                {/* Texto de ayuda bajo el botón */}
                <p>
                    ¿Ya tienes cuenta?{" "}
                    <Link
                        href="/login"
                        className="font-bold text-apmarineblue hover:text-apblue"
                    >
                        Iniciar sesión
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

export default RegisterForm;
