import AllProduct from "./components/AllProduct.vue";
import CreateProduct from "./components/CreateProduct.vue";
import EditProduct from "./components/EditProduct.vue";
import UserProduct from "./components/UserProduct.vue";
import BerandaAdmin from "./components/BerandaAdmin.vue";
import PostinganAdmin from "./components/PostinganAdmin.vue";
import KomentarAdmin from "./components/KomentarAdmin.vue";
import UserAdmin from "./Login.vue";
import Register from "./components/Register.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: AllProduct,
    },
    {
        name: "create",
        path: "/create",
        component: CreateProduct,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditProduct,
    },
    {
        name: "user",
        path: "/user",
        component: UserProduct,
    },
    {
        name: "berandaadmin",
        path: "/berandaadmin",
        component: BerandaAdmin,
    },
    {
        name: "postinganadmin",
        path: "/postinganadmin",
        component: PostinganAdmin,
    },
    {
        name: "komentaradmin",
        path: "/komentaradmin",
        component: KomentarAdmin,
    },
    {
        name: "useradmin",
        path: "/useradmin",
        component: UserAdmin,
    },
    {
        name: "login",
        path: "/login",
        component: UserAdmin,
    },
    {
        name: "register",
        path: "/register",
        component: Register,
    },
];
