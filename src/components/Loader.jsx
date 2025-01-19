import { useEffect } from "react";
import gsap from "gsap";
const Loader = () => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to("#loading-section", {
        opacity: 0,
        ease: "power1.in",
      });
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.getElementById("loading-section").style.display = "none";
      }, 500);
    }, 1900);
  }, []);

  return (
    <section
      id="loading-section"
      className="w-full h-screen bg-bgPrimary flex items-center justify-center top-0 left-0 z-50 overflow-hidden fixed"
    >
      <div className="loader">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
      </div>
    </section>
  );
};

export default Loader;
