"use client";

import { ICategoriesSec } from "@/types";

const CategorySec = ({ name, img }: ICategoriesSec) => {
    return (
        <div className="relative w-56 h-40 mt-4">
            <div>
                <img
                    className="h-[160px] brightness-50 object-cover"
                    src={img}
                />
            </div>
            <h1 className="text-xl font-bold text-apwhite pl-4 top-[5%] absolute">
                {name}
            </h1>
            <div className="text-xs text-center bg-apwhite text-apmarineblue rounded w-16 ml-4 p-1 cursor-pointer top-[25%] absolute">
                Ver más
            </div>
        </div>
    );
};

export default CategorySec;
