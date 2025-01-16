import feature1Img from "./../assets/images/feature-1.png";
import feature2Img from "./../assets/images/feature-2.png";
import feature3Img from "./../assets/images/feature-3.png";

import StartedBtn from "./StartedBtn";
const Features = () => {
  return (
    <section className="w-full py-[160px] bg-bgPrimary">
      <article className="w-full flex items-center justify-between container-max  max-xl:justify-center mb-[160px]">
        <div>
          <h2 className="text-[48px] font-semibold mb-[24px] text-white max-sm:text-[36px]">
            You do the business, <br /> we’ll handle the money.
          </h2>
          <p className="text-[18px] text-slate-300 mb-[66px] w-[570px] max-sm:w-full">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <StartedBtn></StartedBtn>
        </div>
        <div className="max-xl:hidden block">
          <img
            src={feature1Img}
            width={600}
            height={450}
            className="object-fill"
            alt="feature img 1"
          />
        </div>
      </article>
      <article className="w-full flex items-center justify-between container-max  max-xl:justify-center mb-[160px]">
        <div className="max-xl:hidden block">
          <img
            src={feature2Img}
            width={600}
            height={450}
            className="object-fill"
            alt="feature img 1"
          />
        </div>
        <div>
          <h2 className="text-[48px] font-semibold mb-[24px] text-white max-sm:text-[36px]">
            Easily control your <br /> billing & invoicing.
          </h2>
          <p className="text-[18px] text-slate-300 mb-[66px] w-[570px] max-sm:w-full">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <StartedBtn></StartedBtn>
        </div>
      </article>
      <article className="w-full flex items-center justify-between container-max  max-xl:justify-center mb-[160px]">
        <div>
          <h2 className="text-[48px] font-semibold mb-[24px] text-white max-sm:text-[36px]">
            Find a better card deal <br /> in few easy steps.
          </h2>
          <p className="text-[18px] text-slate-300 mb-[66px] w-[570px] max-sm:w-full">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <StartedBtn></StartedBtn>
        </div>
        <div className="max-xl:hidden block">
          <img
            src={feature3Img}
            width={600}
            height={450}
            className="object-fill"
            alt="feature img 1"
          />
        </div>
      </article>
    </section>
  );
};

export default Features;
