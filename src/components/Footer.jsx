import Logo from "./../assets/images/logo.png";
import { FooterLinks } from "../constants";
import instagramIcon from "./../assets/icons/instagram.png";
import twitterIcon from "./../assets/icons/twitter.png";
import facebookIcon from "./../assets/icons/facebook.png";
import linkdnIcon from "./../assets/icons/linkdn.png";
const Footer = () => {
  return (
    <section className="w-full bg-[#06080D] container-max pt-[72px] flex flex-col gap-[40px]">
      <div className="w-full flex items-start justify-between max-xl:flex-col max-xl:ustify-normal max-xl:gap-9">
        <div>
          <a href="/" className="">
            <img width={270} height={70} src={Logo} alt="" />
          </a>
          <p className="mt-[26px] text-slate-300 text-[18px] w-[312px] max-sm:w-full">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-row gap-[112px] max-md:gap-[80px] max-sm:gap-[60px] max-sm:flex-wrap">
          {FooterLinks.map((footerLink, index) => {
            return (
              <ul key={index} className=" ">
                <li className="mb-6 text-white font-medium text-[18px]">
                  {footerLink.title}
                </li>
                {footerLink.links.map((link) => (
                  <li
                    className="text-slate-300 font-normal text-[18px] mb-[12px] hover:text-slate-400 transition-colors"
                    key={link.href}
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>

      <div className="py-[30px]  border-t-2 border-slate-600 w-full flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:justify-normal">
        <p className="text-slate-300 text-[18px] max-sm:text-center">
          <span className="font-bold">ⓒ</span>

          <span className="ml-[22px] font-normal text-slate-300 ">
            2021 HoTank. All Rights Reserved.
          </span>
        </p>

        <div className="flex flex-row items-center gap-[30px]">
          <a href="#instagram">
            <img src={instagramIcon} width={24} height={24} alt="" />
          </a>
          <a href="#facebook">
            <img src={facebookIcon} width={24} height={24} alt="" />
          </a>
          <a href="#twitter">
            <img src={twitterIcon} width={24} height={24} alt="" />
          </a>
          <a href="#linkdn">
            <img src={linkdnIcon} width={24} height={24} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
