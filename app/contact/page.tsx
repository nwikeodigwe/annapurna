// import Brands from "../component/brands";
import ContactContent from "../component/contact-content";
import Footer from "../component/footer";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";

export default function Contact() {
  return (
    <>
      <Header />
      <Jumbotron
        title="Contact Us"
        subtitle="Feel free to ask queries about your concerns."
      />
      <ContactContent />
      {/* <Brands /> */}
      <Footer />
    </>
  );
}
