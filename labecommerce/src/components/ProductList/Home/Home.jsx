import { StyledMain, ProductContainer, SortContainer } from './HomeStyle';
import ProductCard from '../ProductCard/ProductCard';
const Home = (props) => {
    return (
        <StyledMain>
            <SortContainer>
                <p>Quantidade de produtos:</p>
                <select>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Descrescente</option>
                </select>
            </SortContainer>
            <ProductContainer>
                <ProductCard nome="ProductCard" />
                <ProductCard nome="ProductCard" />
                <ProductCard nome="ProductCard" />
            </ProductContainer>
        </StyledMain>
    );
};
export default Home;
