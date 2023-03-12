import styled from 'styled-components';

const StyledLabel = ({ className, text, type, name, id }) => {
    return (
        <label htmlFor={name} className={className}>
            {text}:
            <input type={type} name={name} id={id} />
        </label>
    );
};

export const AsideContainer = styled.aside`
    display:flex;
    flex-direction: column;
    padding:1em;
    border:1px solid black;
    width: 20%;
    height:100%;
`

export const SearchInput = styled(StyledLabel)`
  display:flex;
  flex-direction:column;

`;

export const Titlle = styled.h2``;
