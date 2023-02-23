import Itens from "../../ShoppingCart/Itens/Itens"
import ProductCard from "../ProductCard/ProductCard"
const Home = (props) => {
    return (
        <>
            <p>{props.nome}</p>
            <ProductCard nome="ProductCard" />
        </>
        )
}
export default Home
