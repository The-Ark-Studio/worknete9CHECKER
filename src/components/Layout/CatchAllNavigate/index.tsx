import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * A component that will navigate to the given path with `to` query parameter included with the current location.
 */
export const CatchAllNavigate: React.FC<{ to: string }> = ({ to }) => {
    const { pathname, search } = useLocation();
    const queryValue = `${pathname}${search}`;
    // if (pathname === "/" || !pathname.includes("/admin")) return <Navigate replace to="/" />;
    // else {
    //     const query = queryValue.length > 1 ? `?to=${encodeURIComponent(queryValue)}` : "";
    //     // console.log("1: ", query)
    //     return <Navigate to={`${to}${query}`} />;
    // }

    const query = queryValue.length > 1 ? `?to=${encodeURIComponent(queryValue)}` : "";
    // console.log("1: ", query)
    return <Navigate to={`${to}${query}`} />;
};
