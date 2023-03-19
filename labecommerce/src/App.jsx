import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import MainContainer from './components/MainContainer';
import GlobalStyle from './components/GlobalStyle';
import lista from './assets/productsList';

function App() {
    return (
        <MainContainer>
            <GlobalStyle/>
            <Filters nome={'Filters'} />
            <Home lista={lista} />
            <Cart nome={'Cart'} />
        </MainContainer>
    );
}

export default App;
