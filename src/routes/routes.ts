import App from "../App";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import PlaygroundPage from "../pages/PlaygroundPage";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminHomePage from "../pages/admin/AdminHomePage";
import Login from "../pages/Login";
import AdminProductListPage from "../pages/admin/AdminProductListPage";

const routes = [
    { path: '/', Component: App,
        children: [
            { index: true, Component: HomePage },
            { path: 'products', Component: ProductsPage },
            { path: 'playground', Component: PlaygroundPage },

            { path: 'admin', Component: AdminLayout,
                children: [
                    { index: true, Component: AdminHomePage },
                    { path: "products", Component: AdminProductListPage },
                ]
            },

            { path: 'login', Component: Login },
        ]
    },
]

export default routes;