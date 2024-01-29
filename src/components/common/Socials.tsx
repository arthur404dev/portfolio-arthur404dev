import { socials } from "@/lib/data";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  socialClassName?: string | undefined;
  containerClassName?: string | undefined;
}

const Socials = ({ className, containerClassName, socialClassName }: Props) => {
  return (
    <div className={className}>
      <ul className={containerClassName}>
        {socials.map(({ icon, name, url }) => (
          <li key={name} className={socialClassName}>
            <Link href={url} target="_blank">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
