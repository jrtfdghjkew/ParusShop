import Shop from "../pages/Shop";
import {
    ADMIN_ROUTE,
    SALE_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    SERVICES_ROUTE, PAYMENT_ROUTE, ABOUT_COMPANY_ROUTE, CONTACTS_ROUTE
} from "../utils/consts";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Sale from '../pages/Sale/Sale'
import Services from '../pages/Services/Services'
import Payment from "../pages/Payment/Payment";
import Company from "../pages/Company/Company";
import Contacts from "../pages/Contacts/Contacts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publickRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: SALE_ROUTE,
        Component: Sale
    },
    {
      path: SERVICES_ROUTE,
      Component: Services
    },
    {
        path: PAYMENT_ROUTE,
        Component: Payment

    },
    {
        path: ABOUT_COMPANY_ROUTE,
        Component: Company
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]