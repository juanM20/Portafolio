import React from 'react';
import { NavLink } from "react-router-dom";
import  "../../styles/CostumeNavLink.css"

interface CostumeNavLinkProps {
    to: string,
    route: string,
    className: string
}


const CostumeNavLink: React.FC<CostumeNavLinkProps> = ({ to, route, className }) => {
    return (
        <NavLink className={className} to={to}>
            {route}
        </NavLink>
    );
} 

export default CostumeNavLink;