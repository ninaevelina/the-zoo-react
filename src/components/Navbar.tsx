import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/animals"></Link>
                </li>
            </ul>
        </nav>
    )
}