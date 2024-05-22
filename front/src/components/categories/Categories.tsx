import { ICategoriesPpales } from "@/types";
import Category from "../category/Category";
import Link from "next/link";

const Categories = ({ categories }: { categories: ICategoriesPpales[] }) => {
    return (
        <>
            <div className="flex justify-center flex-wrap m-auto max-w-[1250px] gap-6">
                {categories?.map((category) => {
                    return (
                        <Link
                            href={`/home/${category.name}`}
                            key={category.name}
                        >
                            <Category key={category.name} {...category} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
