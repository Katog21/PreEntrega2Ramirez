import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({name, category, price, img, description, stock}) => {
    return (
        <article>
            <img src={img} style={{width:100}}/>
            <h3>{name}</h3>
            <h2>categoria : {category}</h2>
            <h3>${price}</h3>
            <p>descripcion: {description}</p>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail