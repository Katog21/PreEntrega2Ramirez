import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <header>
            <h1>Eluney</h1>
            <nav>
                <a>Cafeteria</a>
                <a>Pasteleria</a>
                <a>Empanadas</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar