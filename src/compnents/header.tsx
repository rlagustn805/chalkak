import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/svgs/logo.svg";

export default function Header() {
  return (
    <header className="pt-2 pb-2 border-gray-400 border-b-1 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="hidden lg:flex gap-8 text-gray-700">
        <Link href="/" className="hover:text-gray-900">
          이용 안내
        </Link>
        <Link href="/" className="hover:text-gray-900">
          로그인
        </Link>
      </nav>

      <GiHamburgerMenu size={30} className="block lg:hidden" />
    </header>
  );
}
