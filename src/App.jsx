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
import { useState, useEffect } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setLoading(true);
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Navbar></Navbar>
          <Hero></Hero>
          <CompnayNumbers></CompnayNumbers>
          <Features></Features>
          <Review></Review>
          <Contact />
          <Footer />
        </>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default App;
