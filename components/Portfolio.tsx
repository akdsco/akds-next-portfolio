import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import { PortfolioModal } from "./PortfolioModal";
import { IPortfolio } from "../pages/portfolio";

function Portfolio({
  title,
  subtitle,
  imageUrl,
  largeImageUrl,
  url,
  data,
}: IPortfolio) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <PortfolioModal
        show={toggle}
        handleClose={() => setToggle(false)}
        data={data}
        title={title}
      />
      <div className="mi-portfolio mi-portfolio-visible">
        <div className="mi-portfolio-image">
          <Image src={imageUrl} alt={title} width="550" height="400" />
          <ul>
            {largeImageUrl && (
              <li>
                <button onClick={() => setToggle(!toggle)}>Zoom icon</button>
              </li>
            )}
            {data && (
              <li>
                <button onClick={() => setToggle(!toggle)}>
                  <InfoIcon />
                </button>
              </li>
            )}
            {url ? (
              <li>
                <a rel="noopener noreferrer" target="_blank" href={url}>
                  <LinkIcon />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        {!url ? (
          <h5>{title}</h5>
        ) : (
          <h5>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              {title}
            </a>
          </h5>
        )}
        {subtitle && <h6>{subtitle}</h6>}
        {largeImageUrl && (
          <FsLightbox toggler={toggle} sources={largeImageUrl} />
        )}
      </div>
    </>
  );
}

export { Portfolio };
