import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import ImageFixed from "./components/ImageFixed";
import Category from "./components/Category";
import Products from "./components/Products";
import PremiumProducts from "./components/PremiumProducts";
import ExclusiveProducts from "./components/ExclusiveProducts";
import About from "./components/About";
import News from "./components/News";
import Form from "./components/Form";
import Clients from "./components/Clients";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Video from "./components/Video";

import "./App.css";

const App = () => (
  <>
    <div className="app-container">
      <Header />
      <Home />
      <Features />
      <ImageFixed />
      <Category />
      <Products />
      <ExclusiveProducts />
      <PremiumProducts />
      <About />
      <News />
      <Form />
    </div>
    <Clients />
    <Video />
    <Blog />
    <Footer />
  </>
);

export default App;
