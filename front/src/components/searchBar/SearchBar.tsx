"use client";

import { ChangeEvent, useState } from "react";
import { words } from "@/utils/data";

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState<string[]>([]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        e?.preventDefault();
        if (e.target.value === "") {
            setActiveSearch([]);
            return false;
        }
        setActiveSearch(
            words
                .filter((w) =>
                    w.toLowerCase().includes(e.target.value.toLowerCase())
                )
                .slice(0, 8)
        );
    };

    return (
        <>
            {/* SearchBar */}
            <form className="w-[500px] relative p-4">
                <div className="relative">
                    <input
                        type="search"
                        className="w-full h-5 p-4 text-base rounded-md bg-apwhite text-apblack"
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
                {/* Lupa */}
                <button className="absolute -translate-y-1/2 right-6 top-1/2 p4 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="black"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>

                {activeSearch.length > 0 && (
                    <div className="absolute z-10 flex flex-col w-full gap-2 p-4 -translate-x-1/2 top-14 bg-aplightblue text-apblack rounded-xl left-1/2">
                        {activeSearch.map((s, i) => (
                            <span key={i}>{s}</span>
                        ))}
                    </div>
                )}
            </form>
        </>
    );
};

export default SearchBar;
