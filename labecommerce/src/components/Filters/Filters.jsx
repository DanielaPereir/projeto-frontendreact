import { SearchInput, Titlle, AsideContainer } from './FiltersStyle';
const Filters = (props) => {
    return (
        <AsideContainer>
            <Titlle>Filters</Titlle>
            <SearchInput
                text="Valor maximo"
                type="number"
                name="valorMaximo"
                id="valorMaximo"
            />
            <SearchInput
                text="Valor minimo"
                type="number"
                name="valorMinimo"
                id="valorMinimo"
            />
            <SearchInput
                text="Busca por nome"
                type="text"
                name="buscaNome"
                id="buscaNome"
            />
        </AsideContainer>
    );
};
export default Filters;
