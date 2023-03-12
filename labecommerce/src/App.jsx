import Filters from './components/Filters/Filters';
import Home from './components/ProductList/Home/Home';
import Cart from './components/ShoppingCart/Cart/Cart';
import MainContainer from './components/MainContainer';
import GlobalStyle from './components/GlobalStyle';

function App() {
    return (
        <MainContainer>
            <GlobalStyle/>
            <Filters nome={'Filters'} />
            <Home nome={'Home'} />
            <Cart nome={'Cart'} />
        </MainContainer>
    );
}

export default App;
