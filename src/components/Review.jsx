import quote from "./../assets/icons/quote.svg";
import reviewImage1 from "./../assets/images/reviewImage1.png";
import reviewImage2 from "./../assets/images/reviewImage2.png";
import reviewImage3 from "./../assets/images/reviewImage3.png";
const Review = () => {
  return (
    <section className="w-full  bg-bgPrimary container-max pb-[50px]">
      <div className="w-full flex items-center mb-[80px] max-xl:flex-col max-xl:gap-6 max-xl:items-start">
        <h2 className="text-white text-[48px] font-semibold">
          What people are <br /> saying about us
        </h2>
        <p className="text-slate-300 text-[18px] ml-[120px] max-xl:ml-0">
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>

      <div className="w-full flex items-center justify-between max-2xl:justify-center flex-wrap ">
        <article className="w-[370px] h-[395px] max-xl:mx-7 max-xl:my-4 max-sm:mx-0  bg-secondary-gradient py-[60px] px-[40px] rounded-[20px]">
          <span>
            <img src={quote} alt="quote icon" />
          </span>

          <div className="w-full mt-[40px] flex flex-col gap-6">
            <p className="w-full text-[18px] max-sm:text-[16px] text-white">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="flex items-center">
              <div>
                <img
                  src={reviewImage1}
                  width={48}
                  height={48}
                  alt="client profile image"
                />
              </div>
              <div className="ml-[16px]">
                <h4 className="text-[20px] max-sm:text-[18px] text-white">
                  Jon Jensen
                </h4>
                <span className="text-[16px] text-slate-300">
                  Founder & Leader
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className="w-[370px] h-[395px] max-xl:mx-7 max-xl:my-4   py-[60px] px-[40px] rounded-[20px]">
          <span>
            <img src={quote} alt="quote icon" />
          </span>

          <div className="w-full mt-[40px] flex flex-col gap-12">
            <p className="w-full text-[18px] max-sm:text-[16px] text-white">
              Money makes your life easier. If you&apos;re lucky to have it,
              you&apos;re lucky.
            </p>

            <div className="flex items-center">
              <div>
                <img
                  src={reviewImage2}
                  width={48}
                  height={48}
                  alt="client profile image"
                />
              </div>
              <div className="ml-[16px]">
                <h4 className="text-[20px]  max-sm:text-[18px] text-white">
                  Steve Mark
                </h4>
                <span className="text-[16px] text-slate-300">Leader</span>
              </div>
            </div>
          </div>
        </article>
        <article className="w-[370px] h-[395px] max-xl:mx-7 max-xl:my-4  py-[60px] px-[40px] rounded-[20px]">
          <span>
            <img src={quote} alt="quote icon" />
          </span>

          <div className="w-full mt-[40px] flex flex-col gap-6">
            <p className="w-full text-[18px] text-white  max-sm:text-[16px]">
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>

            <div className="flex items-center">
              <div>
                <img
                  src={reviewImage3}
                  width={48}
                  height={48}
                  alt="client profile image"
                />
              </div>
              <div className="ml-[16px]">
                <h4 className="text-[20px]  max-sm:text-[18px] text-white">
                  Kenn Gale
                </h4>
                <span className="text-[16px] text-slate-300">Founder</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Review;
