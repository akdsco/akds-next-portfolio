import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import brandImg from "../public/img/brand-image.jpg";

function Header() {
  const [navigationToggler, setNavigationToggler] = useState<boolean>(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link href="/">
            <Image src={brandImg} alt="brand logo" />
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
            <Link href="/resume">
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()} <b>arkadiusz.tech</b>
        </p>
      </div>
    </nav>
  );
}

export { Header };
