import {
  Navbar,
  Hero,
  CompnayNumbers,
  Features,
  Loader,
  Review,
  Contact,
  Footer,
} from "./components/";

const App = () => {
  return (
    <>
      <Loader></Loader>
      <Navbar />
      <Hero />
      <CompnayNumbers />
      <Features />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
