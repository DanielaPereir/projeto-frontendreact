import { StyleArticle } from "./ProductCardStyle"
const ProductCard = ({imagem, nome, preco}) => { return (
    <StyleArticle>
        <img src={imagem} alt="" />
        <p>{"Blusa"}</p>
        <p>{"34$"}</p>
        <button>Adicionar ao carrinho</button>
    </StyleArticle>
) }

export default ProductCard

