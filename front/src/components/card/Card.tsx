"use client";

import { IProduct } from "@/types";
import categoriesToPreload from "../../utils/categories";

const Card: React.FC<IProduct> = ({
    name,
    price,
    description,
    image,
    categoryId,
    stock,
}: IProduct) => {
    return (
        <div className="flex flex-col p-2 max-w-[230px] text-apblack">
            <div className="h-[650px] bg-apwhite p-3 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex content-center justify-center mb-2 h-1/3">
                    <img
                        className="object-contain w-full h-auto"
                        src={image}
                        alt={name}
                    />
                </div>
                <h2 className="min-h-[60px] text-xl text-center content-center mb-2 font-semibold">
                    {name}
                </h2>
                <p className="min-h-[250px] text-sm font-thin text-center content-center mb-2.5">
                    {description}
                </p>
                <p className="min-h-[30px] text-lg text-center mb-2.5  font-bold">
                    <span className="font-semibold">u$d</span> {price}
                </p>
                <p className="min-h-[20px] text-sm text-center">
                    Category:{" "}
                    <span className="font-semibold">
                        {categoriesToPreload[categoryId - 1]?.name}
                    </span>
                </p>
                <p className="min-h-[20px] text-sm text-center">
                    Stock: {stock}
                </p>
            </div>
        </div>
    );
};

export default Card;
