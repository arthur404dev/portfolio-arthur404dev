import Logo from "../common/Logo";
import Socials from "../common/Socials";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="absolute z-30 flex w-full items-center bg-gradient-to-b from-theme-mantle to-transparent px-16 lg:h-[90px] lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-2 py-4 sm:py-5 md:py-6 lg:flex-row lg:py-8">
          <Logo />
          <Socials
            className=""
            containerClassName="flex gap-4"
            socialClassName="text-md lg:text-2xl hover:text-theme-lavender transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
