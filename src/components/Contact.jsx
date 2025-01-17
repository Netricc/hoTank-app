import company1 from "./../assets/icons/company1.png";
import company2 from "./../assets/icons/company2.png";
import company3 from "./../assets/icons/company3.png";
import company4 from "./../assets/icons/company4.png";
import StartedBtn from "./StartedBtn";
const Contact = () => {
  const companies = [company1, company2, company3, company4];
  return (
    <section className="w-full bg-bgPrimary container-max py-[50px]">
      <div
        className="w-full flex justify-between px-[52px] items-center max-xl:grid max-xl:grid-cols-2 max-xl:gap-[60px] max-xl:px-0 max-xl:w-fit max-xl:mx-auto
       "
      >
        {companies.map((company, companyIdx) => (
          <img src={company} key={companyIdx} width={192} height={50} alt="" />
        ))}
      </div>

      <div className="mt-[50px] py-[72px] px-[98px] max-sm:px-[24px] max-sm:py-[60px] bg-slate-800 rounded-[20px] flex items-center justify-between max-xl:justify-normal max-xl:flex-col max-xl:gap-9 max-xl:items-start">
        <div>
          <h2 className="text-[48px] text-white font-semibold max-sm:text-[36px]">
            Let’s try our service now!
          </h2>
          <p className="text-[18px] text-slate-300 mt-[24px] w-[445px] max-sm:w-full">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <StartedBtn></StartedBtn>
      </div>
    </section>
  );
};

export default Contact;
