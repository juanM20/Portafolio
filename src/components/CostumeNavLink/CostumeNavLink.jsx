import { NavLink } from "react-router-dom";
import  "../../styles/CostumeNavLink.css"

const CostumeNavLink = ({to, route, ...props}) => {
    return (
        <NavLink className={props.class} to={to}>
            {route}
        </NavLink>
    );
} 

export default CostumeNavLink;