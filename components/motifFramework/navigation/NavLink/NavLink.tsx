import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavLink.module.scss";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) : JSX.Element {
  const { pathname } = useRouter();
  const isActive = pathname.startsWith(href);
  
  return (
    <Link href={href}>
      <a className={`${styles["nav-link"]} ${isActive ? styles["--active"] : ""}`}>{children}</a>
    </Link>
  )
}
