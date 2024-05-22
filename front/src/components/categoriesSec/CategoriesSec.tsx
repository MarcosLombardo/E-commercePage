import { ICategoriesSec } from "@/types";
import CategorySec from "../categorySec/CategorySec";
import Link from "next/link";

const CategoriesSec = ({ categories }: { categories: ICategoriesSec[] }) => {
    return (
        <>
            <div className="flex justify-center flex-wrap m-auto max-w-[1250px]">
                {categories?.map((category) => {
                    return (
                        <Link
                            href={`/home/${category.cat}`}
                            key={category.name}
                        >
                            <CategorySec key={category.name} {...category} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default CategoriesSec;
