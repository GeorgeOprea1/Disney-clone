import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import Footer from "../Components/Footer";

const ContentPage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer />
    </div>
  );
};

export default ContentPage;
