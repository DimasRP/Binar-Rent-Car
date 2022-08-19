import {
  CarRent,
  Faq,
  Footer,
  Header, OurServices, Testimonials,
  WhyUs
} from "views/components";

const Home = () => {
  return (
    <main>
      <Header />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <CarRent />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
