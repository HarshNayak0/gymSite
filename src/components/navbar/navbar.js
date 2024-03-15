import Logo from "./logo";
import NavItem from "./nav-item";
import "./navbar.css";

export default function Navbar() {
    return(
        <navbar className="navbar">
            <ul>
                <li><Logo/></li>
                <li><NavItem itemName="EXERCISE REPO" itemLink="#repo"/></li>
                <li><NavItem itemName="BEGINNERS" itemLink={"#beginner"}/></li>
                <li><NavItem itemName="ABOUT"/></li>
                <li><NavItem itemName="MUSIC"/></li>
                <li><NavItem itemName="CONTACT"/></li>
            </ul>
        </navbar>
    );
}