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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <CompnayNumbers />
          <Features />
          <Review />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
