import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";
import {authRoutes, publickRoutes} from "../../routes/routes";
import {Context} from "../../index";

const AppRouter = () => {
    // const {user} = useContext(Context)
    const user = {isAuth: "true"}
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=> <Route key={path} path={path} element={<Component/>} exact/>)}
            {publickRoutes.map(({path, Component})=> <Route key={path} path={path} element={<Component/>} exact/>)}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />}/>
        </Routes>
    );
};

export default AppRouter;