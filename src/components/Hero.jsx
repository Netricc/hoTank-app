import heroImage from "./../assets/images/hero.png";
import discountIcon from "./../assets/icons/Discount.png";
import ArrowUp from "./../assets/icons/Arrow - Up.png";
import { useEffect } from "react";
import gsap from "gsap";
const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      "#hero-title",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
        delay: 1.95,
      }
    );

    gsap.to(
      "#hero-descr",

      {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        delay: 2.5,
      }
    );
  }, []);
  return (
    <section className="w-full min-h-screen pt-[127px] pb-[40px] container-left bg-bgPrimary flex items-center  justify-between max-xl:px-[135px] max-lg:px-[80px] max-sm:px-[36px]">
      <div>
        <div className=" h-fit w-fit flex items-center bg-[#191821] px-[12px] py-[6px] rounded-[10px] mb-[16px]">
          <img src={discountIcon} width={32} height={32} alt="discount icon" />
          <p className="ml-[13px] text-slate-300 text-[18px]">
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-start relative mb-[20px]">
            <h1
              id="hero-title"
              className="text-[76px] max-lg:text-[68px] max-sm:text-[48px] max-sm:w-full text-white font-semibold"
            >
              The Next <br /> <span className="text-[#7DE7EB]">Generation</span>{" "}
              <br /> Payment Method.
            </h1>
            <button className="absolute right-[40px] max-md:hidden  w-[140px] h-[140px] text-[18px] font-medium flex flex-col hover:border-white transition-colors  items-center justify-center rounded-full border-2 border-[#7DE7EB] text-[#7DE7EB]">
              <div className="flex items-center">
                Get <img src={ArrowUp} alt="arrow up icon" />
              </div>
              Started
            </button>
          </div>
          <p
            id="hero-descr"
            className="text-slate-300 text-[18px] max-sm:w-full opacity-0"
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. <br /> We examine annual percentage
            rates, annual fees.
          </p>
        </div>
      </div>
      <div className="max-xl:hidden block bg-light">
        <img src={heroImage} alt="hero image" width={670} height={674} />
      </div>
    </section>
  );
};

export default Hero;
