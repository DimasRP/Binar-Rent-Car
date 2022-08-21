import { ScrollToTop } from "helpers/utils";
import {
  CarRent,
  Faq,
  Footer,
  Header,
  Navbar,
  OurServices,
  Testimonials,
  WhyUs,
} from "views/components";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Header />
        <OurServices />
        <WhyUs />
        <Testimonials />
        <CarRent />
        <Faq />
        <Footer />
      </main>
    </>
  );
};

export default Home;
