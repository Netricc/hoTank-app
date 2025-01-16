import { Navbar, Hero, CompnayNumbers, Features, Loader } from "./components/";
import { useState, useEffect } from "react";
const App = () => {
  const [loading, setLoading] = useState(false);
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
        </>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default App;
