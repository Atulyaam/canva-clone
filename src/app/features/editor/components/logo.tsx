import Link from "next/link";
import Image from "next/image";
import logo from "../../../../assets/logo/logo1-nobg.png";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-24 relative shrink-0">
        <Image src={logo} alt="logo" fill className="shrink-0 hover:opacity-75 transition"/>
      </div>
    </Link>
  );
};
