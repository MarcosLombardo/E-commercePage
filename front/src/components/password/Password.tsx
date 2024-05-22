"use client";

import { IForgetPass, IForgetPassError } from "@/types";
import { validateForget } from "@/utils/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ForgetPasswordForm = () => {
    const router = useRouter();

    const [userForget, setUserForget] = useState<IForgetPass>({
        email: "",
    });

    const [errorForget, setErrorForget] = useState<IForgetPassError>({
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserForget({
            ...userForget,
            [e.target.name]: e.target.value,
        });
    };

    const handleForget = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        Swal.fire({
            icon: "success",
            text: `Enviamos un mail a ${userForget.email}, para que puedas recuperar tu contraseña.`,
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
    };

    useEffect(() => {
        setErrorForget(validateForget(userForget));
    }, [userForget]);

    return (
        <div className="flex flex-col content-center justify-center text-center min-h-[500px] bg-apwhite text-apblack">
            <h1 className="mb-1 text-3xl">Recuperar contraseña</h1>
            <p className="mx-4 mb-4 text-lg font-light">
                Por favor, ingresá el email con el que te registraste y tu
                password para iniciar sesión
            </p>
            <form
                className="flex flex-col items-center justify-center mb-2"
                onSubmit={handleForget}
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
                                value={userForget.email}
                                type="text"
                                className="w-3/4 p-1"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="pb-2 text-sm text-red-500">
                            {errorForget.email}
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        disabled={
                            userForget.email === "" || !!errorForget.email
                        }
                        type="submit"
                        className="p-2 m-4 text-center border-gray-300 rounded-lg w-52 text-apwhite bg-apblue hover:bg-apmarineblue disabled:border disabled:text-apblack disabled:bg-apwhite disabled:pointer-events-none"
                    >
                        Recuperar contraseña
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
                    ¿Ya tienes cuenta?{" "}
                    <Link
                        href="/login"
                        className="font-bold text-apmarineblue hover:text-apblue"
                    >
                        Iniciar sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default ForgetPasswordForm;
