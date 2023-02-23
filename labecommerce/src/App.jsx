import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"

function App() {
  return (
    <>
    <Filters nome={"Filters"} />
    <Home nome={"Home"} />
    <Cart nome={"Cart"}/>

    </>

  )
}

export default App
