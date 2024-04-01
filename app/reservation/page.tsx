import Brands from "../component/brands";
import Footer from "../component/footer";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import ReserveContent from "../component/reserve-content";

export default function Home() {
  return (
    <>
      <Header />
      <Jumbotron
        title="Make a reservation"
        subtitle="Reserve a spot for you and your loved ones."
      />
      <ReserveContent />
      <Brands />
      <Footer />
    </>
  );
}
