import { StyledMain, ProductContainer, SortContainer } from './HomeStyle';
import ProductCard from '../ProductCard/ProductCard';
const Home = (props) => {
    return (
        <StyledMain>
            <SortContainer>
                <p>Quantidade de produtos: {props.lista.length} </p>
                <select>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Descrescente</option>
                </select>
            </SortContainer>
            <ProductContainer>
                <ProductCard
                    id={props.lista[0].id}
                    name={props.lista[0].name}
                    value={props.lista[0].value}
                    imageUrl={props.lista[0].imageUrl}
                />
                <ProductCard
                    id={props.lista[1].id}
                    name={props.lista[1].name}
                    value={props.lista[1].value}
                    imageUrl={props.lista[1].imageUrl}
                />
                <ProductCard
                    id={props.lista[2].id}
                    name={props.lista[2].name}
                    value={props.lista[2].value}
                    imageUrl={props.lista[2].imageUrl}
                />
            </ProductContainer>
        </StyledMain>
    );
};
export default Home;
