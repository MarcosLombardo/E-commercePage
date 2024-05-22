import {
    IForgetPass,
    IForgetPassError,
    ILogin,
    ILoginError,
    IRegister,
    IRegisterError,
} from "@/types";

export function validateLogin(values: ILogin): ILoginError {
    let errors: ILoginError = {};
    if (values.email === "") {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El mail es inválido";
    }

    return errors;
}

export function validateForget(values: IForgetPass): IForgetPassError {
    let errors: IForgetPassError = {};
    if (values.email === "") {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El mail es inválido";
    }

    return errors;
}

export function validateRegister(values: IRegister): IRegisterError {
    let errors: IRegisterError = {};

    if (values.name === "") {
    } else if (!/^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(values.name)) {
        errors.name = "El nombre debe contener solo letras";
    }

    if (values.email === "") {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El mail es inválido";
    }

    if (values.phone === "") {
    } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = "El teléfono es inálido, debe contener solo números";
    }

    return errors;
}
