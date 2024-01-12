import Link from "next/link";
import Links from "./links/link";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" width={180} height={180} alt="logo" />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
