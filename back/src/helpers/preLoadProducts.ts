import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

const productsToPreLoad: IProduct[] = [
    {
        name: "iPhone 11",
        price: 699,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image: "https://m.media-amazon.com/images/I/61Nz6HwC0eL.jpg",
        categoryId: 3,
        stock: 8,
    },
    {
        name: "MacBook Air",
        price: 999,
        description:
            "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image: "https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UF894,1000_QL80_.jpg",
        categoryId: 1,
        stock: 6,
    },
    {
        name: "Apple Watch Series 6",
        price: 399,
        description:
            "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image: "https://m.media-amazon.com/images/I/71K+hTswAyL._AC_UF894,1000_QL80_.jpg",
        categoryId: 4,
        stock: 20,
    },
    {
        name: "iPad Pro",
        price: 799,
        description:
            "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image: "https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UF894,1000_QL80_DpWeblab_.jpg",
        categoryId: 2,
        stock: 3,
    },
    {
        name: "AirPods Pro",
        price: 249,
        description:
            "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UF894,1000_QL80_DpWeblab_.jpg",
        categoryId: 5,
        stock: 10,
    },
    {
        name: "HomePod mini",
        price: 99,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image: "https://m.media-amazon.com/images/I/71+BbLQz8UL._AC_UF894,1000_QL80_.jpg",
        categoryId: 7,
        stock: 5,
    },
    {
        name: "iPhone 12",
        price: 799,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image: "https://m.media-amazon.com/images/I/51ugi3mMBgL._AC_UF894,1000_QL80_.jpg",
        categoryId: 3,
        stock: 10,
    },
    {
        name: "AirPods",
        price: 249,
        description:
            "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image: "https://m.media-amazon.com/images/I/61Z5J-fq7KL._AC_UF1000,1000_QL80_.jpg",
        categoryId: 5,
        stock: 20,
    },
    {
        name: "iPhone 13",
        price: 899,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image: "https://m.media-amazon.com/images/I/61p1I5f5ApL._AC_UF894,1000_QL80_.jpg",
        categoryId: 3,
        stock: 2,
    },
    {
        name: "Cargador USB tipo C",
        price: 60,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image: "https://m.media-amazon.com/images/I/51Wt-N8TcVL._AC_UF894,1000_QL80_.jpg",
        categoryId: 7,
        stock: 50,
    },
    {
        name: "Teclado Apple",
        price: 80,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image: "https://m.media-amazon.com/images/I/717k62F-D8L._AC_UF894,1000_QL80_DpWeblab_.jpg",
        categoryId: 7,
        stock: 30,
    },
    {
        name: "MacBook Pro",
        price: 1399,
        description:
            "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image: "https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        categoryId: 1,
        stock: 10,
    },
    {
        name: "iPad",
        price: 599,
        description:
            "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image: "https://m.media-amazon.com/images/I/61hZrbHRMWL._AC_UF894,1000_QL80_DpWeblab_.jpg",
        categoryId: 2,
        stock: 30,
    },
    {
        name: "iPhone 15",
        price: 1099,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image: "https://m.media-amazon.com/images/I/61NBF0uWXRL._AC_UF894,1000_QL80_.jpg",
        categoryId: 3,
        stock: 8,
    },
    {
        name: "Mouse Apple",
        price: 60,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image: "https://m.media-amazon.com/images/I/21BNuOVxNoL.jpg",
        categoryId: 7,
        stock: 30,
    },
    {
        name: "Apple Watch Series 7",
        price: 499,
        description:
            "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image: "https://m.media-amazon.com/images/I/71fxj9HPLPL._AC_UF894,1000_QL80_.jpg",
        categoryId: 4,
        stock: 20,
    },
    {
        name: "Apple Watch Series 8",
        price: 599,
        description:
            "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image: "https://m.media-amazon.com/images/I/71bllw4SPCL._AC_UF894,1000_QL80_.jpg",
        categoryId: 4,
        stock: 33,
    },
];

export const preLoadProducts = async () => {
    const products = await ProductRepository.find();
    if (!products.length)
        await AppDataSource.createQueryBuilder()
            .insert()
            .into(Product)
            .values(productsToPreLoad)
            .execute();
    console.log("Products preloaded");
};
