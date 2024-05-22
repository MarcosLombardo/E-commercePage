"use client";

import { ICategoriesPpales } from "@/types";

const Category = ({ name, text, img }: ICategoriesPpales) => {
    return (
        <div className="flex w-80 text-apblack">
            <div className="flex flex-row p-2 border border-gray-300 rounded-lg shadow-xl bg-apwhite">
                <div className="flex-col content-center w-1/2 p-1">
                    <h1 className="text-lg font-extrabold">{name}</h1>
                    <p className="text-xs font-bold">{text}</p>
                    <div className="flex justify-center mt-3"></div>
                </div>
                <div className="flex justify-center w-1/2">
                    <img className="h-28" src={img} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default Category;
