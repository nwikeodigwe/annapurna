import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import Jumbotron from "@/app/component/jumbotron";
import image from "@/public/images/illustration/DrawKit-cooking-kitchen-food-vector-illustrations-03-removebg-preview.png";
import WhoContent from "../component/who-we-are";
import Brands from "../component/brands";

export default function WhoWeAre() {
  return (
    <>
      <Header />
      <Jumbotron
        title="Who We Are"
        subtitle="We pride ourself on quality"
      />
      <WhoContent />
      <Brands />
      <Footer />
    </>
  );
}
