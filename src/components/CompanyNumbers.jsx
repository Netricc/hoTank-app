import { CompanyNumbersData } from "../constants";

const CompanyNumbers = () => {
  return (
    <section className="w-full container-max bg-bgPrimary flex justify-center items-center py-[20px]">
      <div className="flex w-full justify-center items-center flex-wrap ">
        {CompanyNumbersData.map((item) => (
          <div
            className="flex items-center mx-[auto] max-xl:mx-[30px] max-lg:mx-[10px] my-[20px] max-sm:w-full max-sm:justify-center max-sm:text-center"
            key={item.label}
          >
            <span className="text-[40px] max-sm:text-[30px] text-white">
              {item.number}
            </span>
            <span className="text-[20px] ml-[25px] max-sm:text-[16px]  text-[#7DE7EB]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyNumbers;
