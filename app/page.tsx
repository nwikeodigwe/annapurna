import About from "./component/about";
import Brands from "./component/brands";
import Footer from "./component/footer";
import Gallery from "./component/gallery";
import Header from "./component/header";
import Hero from "./component/hero";
import Items from "./component/items";
import Reservation from "./component/reservation";
import Reviews from "./component/reviews";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Items />
      <About />
      <Reservation />
      <Gallery />
      <Reviews />
      <Brands />
      <Footer />
    </>
  );
}
