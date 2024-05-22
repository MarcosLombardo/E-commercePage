"use client";

import Image from "next/image";
import SearchBar from "../searchBar/SearchBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IUserSession } from "@/types";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [isClick, setIsClick] = useState(false);
    const [userSession, setUserSession] = useState<IUserSession>();
    const pathname = usePathname();

    const toggleNavBar = () => {
        setIsClick(!isClick);
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem("userSession");
            setUserSession(JSON.parse(userToken!));
        }
    }, [pathname]);

    return (
        <>
            <nav className="flex flex-col bg-apwhite">
                <div className="flex items-center justify-between p-6 border-b bg-apmarineblue h-14 text-apwhite border-apwhite border-opacity-20">
                    {/* Hambur */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleNavBar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-apwhite hover:text-apwhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-apwhite"
                        >
                            {isClick ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Logo */}
                    <Link href="/home" className="cursor-pointer">
                        <Image
                            src="/images/logo2.svg"
                            alt="Logo de MApple"
                            className="h-auto w-28"
                            width="0"
                            height="0"
                            priority={true}
                        />
                    </Link>
                    {/* SearchBar */}
                    <div className="hidden lg:flex">
                        <SearchBar />
                    </div>
                    {/* User y cart */}
                    <div className="flex">
                        {/* User */}
                        {userSession ? (
                            <Link
                                className="flex items-center"
                                href="/dashboard"
                            >
                                {userSession?.userData?.name}
                            </Link>
                        ) : (
                            <Link
                                className="flex items-center"
                                href="/dashboard"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke="white"
                                    className="w-9 h-9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </Link>
                        )}
                        {userSession ? (
                            <h1 className="p-1 text-3xl font-thin">|</h1>
                        ) : (
                            ""
                        )}
                        {/* Cart */}
                        {userSession ? (
                            <Link className="flex items-center" href="/cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke="white"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                {/* Products */}
                <div className="justify-center hidden lg:flex">
                    <div className="flex items-center w-3/4 px-16 justify-evenly h-9 rounded-b-xl bg-apmarineblue">
                        {pathname != "/home" && (
                            <Link
                                href="/home"
                                className="p-3 text-sm font-medium text-apwhite"
                            >
                                ←Home
                            </Link>
                        )}
                        <Link
                            href="/home/MacBook"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            Mac
                        </Link>
                        <Link
                            href="/home/iPad"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            iPad
                        </Link>
                        <Link
                            href="/home/iPhone"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            iPhone
                        </Link>
                        <Link
                            href="/home/Watch"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            Watch
                        </Link>
                        <Link
                            href="/home/AirPods"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            AirPods
                        </Link>
                        <Link
                            href="/home/iMac"
                            className="p-3 text-sm font-thin text-apwhite"
                        >
                            iMac
                        </Link>
                        <Link
                            href="/products"
                            className="p-3 text-sm font-medium text-apwhite"
                        >
                            Todos los productos
                        </Link>
                    </div>
                </div>

                {/* Products hambur*/}
                {isClick && (
                    <div className="pb-3 lg:hidden bg-apmarineblue">
                        <div className="flex flex-col px-3 text-center">
                            <div className="flex justify-center">
                                <SearchBar />
                            </div>
                            {pathname != "/home" && (
                                <Link
                                    href="/home"
                                    className="p-3 text-sm font-medium text-apwhite"
                                >
                                    ←Home
                                </Link>
                            )}
                            <Link
                                href="/home/MacBook"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                Mac
                            </Link>
                            <Link
                                href="/home/iPad"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                iPad
                            </Link>
                            <Link
                                href="/home/iPhone"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                iPhone
                            </Link>
                            <Link
                                href="/home/Watch"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                Watch
                            </Link>
                            <Link
                                href="/home/AirPods"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                AirPods
                            </Link>
                            <Link
                                href="/home/iMac"
                                className="p-3 text-sm font-thin text-apwhite"
                            >
                                iMac
                            </Link>
                            <Link
                                href="/products"
                                className="p-3 text-sm font-medium text-apwhite"
                            >
                                Todos los productos
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;
