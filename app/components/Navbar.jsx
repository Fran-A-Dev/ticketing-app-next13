import Link from "next/link";
import Image from "next/image";
import Logo from "./yoda.png";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Yoda Ticketing logo"
        width={75}
        placeholder="blur"
        quality={100}
      />

      <h1>Fran's ticketing app</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
