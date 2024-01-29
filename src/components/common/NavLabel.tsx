type Props = {
  label: string;
};

const NavLabel = ({ label }: Props) => {
  return (
    <>
      <div className="absolute -z-10 h-9 w-9 animate-spin rounded-full from-theme-mauve to-theme-blue blur-sm group-hover:bg-gradient-to-b "></div>
      <div className="absolute right-[50%] -z-20 hidden h-9 w-auto items-center text-nowrap rounded-l-full bg-gradient-to-b from-theme-mauve via-theme-lavender to-theme-blue pl-6 pr-8 text-lg font-bold capitalize text-theme-crust shadow-lg shadow-theme-crust animate-in zoom-in lg:group-hover:inline-flex">
        {label}
      </div>
    </>
  );
};

export default NavLabel;
