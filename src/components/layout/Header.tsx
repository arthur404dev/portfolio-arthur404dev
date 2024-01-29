import Link from "next/link";
import Socials from "../common/Socials";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="absolute z-30 flex w-full items-center bg-gradient-to-b from-theme-mantle to-transparent px-16 lg:h-[90px] lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
          <Link href="/">
            <h1 className="font-jetbrains text-3xl font-black uppercase tracking-tight text-theme-text">
              &lt;Arthur
              <span className="font-thin lowercase text-theme-lavender">
                404dev
              </span>
              &gt;
            </h1>
          </Link>
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
