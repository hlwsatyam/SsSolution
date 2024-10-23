import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { ThemeChanger } from "@/app/Theme-changer";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-4 bg-black backdrop-blur-sm">
      <div className="container flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">
            <Image
              className="w-full"
              src="/ss.png"
              alt="Dashboard ui design"
              priority
              width={50}
              height={50}
            />
          </h1>
        </Link>
        <ul className="md:flex flex-row justify-between gap-8 hidden">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end space-x-2">
          <ThemeChanger />
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
