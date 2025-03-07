import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/svgs/logo.svg";

export default function Header() {
  return (
    <header className="pt-2 pb-2 border-gray-400 border-b-1 flex justify-between items-baseline">
      <Link href="/">
        <Logo />
      </Link>
      <GiHamburgerMenu size={30} />
    </header>
  );
}
