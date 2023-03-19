import Itens from '../Itens/Itens';
import { StyledCart, StyledSelection } from './CartStyle';
const Cart = (props) => {
    return (
        <StyledCart>
            <h2>Cart</h2>
            <StyledSelection>
                <p>1</p>
                <p>Nome do Produto</p>
                <button>Remover</button>
            </StyledSelection>
            <p>Valor total:</p>
        </StyledCart>
    );
};

export default Cart;
