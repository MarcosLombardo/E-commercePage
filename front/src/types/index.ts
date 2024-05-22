export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategories {
    name: string;
}

export interface ICategoriesPpales {
    name: string;
    text: string;
    img: string;
}

export interface ICategoriesSec {
    cat?: string;
    name: string;
    img: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginError {
    email?: string;
    password?: string;
}

export interface IForgetPass {
    email: string;
}

export interface IForgetPassError {
    email?: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface IRegisterError {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
}

export interface IUserSession {
    token: string;
    userData: {
        name: string;
        email: string;
        address: string;
        phone: string;
        id: number;
        role: string;
        orders: [];
    };
}

export interface IOrder {
    id: number;
    date: Date;
    status: string;
    products: IProduct[];
}
