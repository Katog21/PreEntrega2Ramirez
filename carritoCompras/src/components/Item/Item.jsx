import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img}) => {
    return (
        <article>
            <h2>categoria : {category}</h2>
            <h3>{name}</h3>
            <img src={img} style={{width:100}}/>
            <p>Precio ${price}</p>
            <Link to={`/item/${id}`}>ver detalles</Link>
        </article>

    )
}

export default Item