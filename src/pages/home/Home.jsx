import "./home.css";
import  Navbar  from "../../components/navbar/Navbar";
import  Header  from "../../components/header/Header";
import  Featured  from "../../components/featured/Featured";
import  Propertylist  from "../../components/propertylist/Propertylist";
import Featuredproperty from "../../components/featuredProperties/FeaturedProperties";
import MallList from "../../components/mallList/MallList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Brouse by property</h1>
        <Propertylist/>
        <h1 className="homeTitle">Homes guests love</h1>
        <Featuredproperty/>
        <MallList/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
