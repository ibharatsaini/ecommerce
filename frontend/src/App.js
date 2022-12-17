
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from "./components/listProduct/Search";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart/cart"
import Login from "./components/Login";
import Shipping from "./components/Shipping";
import Register from "./components/Register";
import {Toaster} from "react-hot-toast"

function App() {
  return ( <>
        <Header />
   
        <Toaster />
        
           <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<Login />}/>
                <Route path="/search" element={<Search />} />
                <Route path="/product/:id" element={<ProductDetail  />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipping" element={<Shipping />} />
                {/* <Route path="/forgot-password" element={} /> */}
                <Route path="/register" element={<Register />} />
           </Routes>
         {/* <ToastContainer /> */}

        <Footer />
     </>   
);
}

export default App;
