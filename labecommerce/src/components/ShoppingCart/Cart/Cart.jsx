import Itens from "../Itens/Itens"
const Cart = (props) => {
    return(
        <>
        <p>{props.nome}</p>
            <Itens nome="Itens" />
        </>)
}

export default Cart
