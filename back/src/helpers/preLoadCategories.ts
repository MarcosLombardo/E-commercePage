import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: "Macbooks" },
    { name: "Ipads" },
    { name: "Iphones" },
    { name: "Watches" },
    { name: "Airpods" },
    { name: "Imacs" },
    { name: "Accesories" },
];

export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length)
        await AppDataSource.createQueryBuilder()
            .insert()
            .into(Category)
            .values(categoriesToPreLoad)
            .execute();
    console.log("Categories preloaded");
};
