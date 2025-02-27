import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [navigationToggle, setNavigationToggle] = useState<boolean>(false);

  const handleNavigationChange = () => {
    setNavigationToggle(!navigationToggle);
  };

  return (
    <nav className={navigationToggle ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationChange} className="mi-header-toggler">
        {!navigationToggle ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link href="/">
            <Image src="/img/brand-image.jpg" width={200} height={200} alt="brand logo" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()} <b>akds.tech</b>
        </p>
      </div>
    </nav>
  );
}

export { Header };
