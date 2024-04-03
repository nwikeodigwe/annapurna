import Brands from "../component/brands";
import Footer from "../component/footer";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import MenuContent from "../component/menuContent";

export default function Menu() {
  return (
    <>
      <Header />
      <Jumbotron title="Menu" subtitle="Our menu is the best in town" />
      <MenuContent />
      {/* <Brands /> */}
      <Footer />
    </>
  );
}
