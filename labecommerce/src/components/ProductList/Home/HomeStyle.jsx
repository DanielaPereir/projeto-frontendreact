import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding:1em;
`;

export const ProductContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    gap: 1rem;
    `;

export const SortContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

`