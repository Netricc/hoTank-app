import logo from "./../assets/images/logo.png";
import { NavbarLinks } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full h-[92px] bg-bgPrimary py-[30px] container-max flex items-center justify-between absolute left-0 top-0">
      <a href="/" className="logo">
        <img src={logo} alt="logo" width={106} height={32} />
      </a>

      <nav className=" flex-row gap-[56px] lg:flex hidden">
        {NavbarLinks.map((link) => {
          return (
            <a
              href={link.href}
              className="text-white hover:text-slate-300 transition-colors"
              key={link.label}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        href={"#features"}
        className="text-white hover:text-[#7DE7EB] transition-colors border-2 px-3 py-2 rounded-full lg:hidden block"
      >
        Features
      </a>
    </header>
  );
};

export default Navbar;
