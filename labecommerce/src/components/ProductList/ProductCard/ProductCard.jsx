import { StyleArticle } from "./ProductCardStyle"


const ProductCard = (props) => { return (
    <StyleArticle>
        <img src={props.imageUrl} alt="" />
        <p>{props.name}</p>
        <p>{props.value}</p>
        <button>Adicionar ao carrinho</button>
    </StyleArticle>
) }

export default ProductCard

