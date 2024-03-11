import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header>
            <h1>Eluney</h1>
            <nav>
                <Link to='/category/celular'>Cafeteria</Link>
                <Link to='/category/tablet'>Pasteleria</Link>
                <Link to='/category/notebook'>Empanadas</Link>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar