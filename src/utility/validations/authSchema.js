import { object, string, ref } from "yup"

export const registerSchema = object().shape({
    confirmPassword: string().required("confirmacion requerida").oneOf([ref("password"), null], "password no coincide"),
    password: string().required("Password es requerida").min(8, "Minimo 8 caracteres"),
    email: string().required("Email requerido").email("Mail no valido"),
})

export const loginSchema = object().shape({
    password:string().required("Password es requerida").min(8,"Minimo 8 caracteres"),
    email:string().required("Email requerido").email("Mail no valido")

})