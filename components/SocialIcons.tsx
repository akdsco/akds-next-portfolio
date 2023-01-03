import React, { ComponentType } from "react";
import database from "../data/database";
import { PluralsightIcon, StackOverflowIcon } from "./Icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

type SocialListPropsType = {
  url: string;
  Icon: ComponentType;
};
const SocialListItem = ({ url, Icon }: SocialListPropsType) => {
  return (
    <li>
      <a rel="noopener noreferrer" target="_blank" href={url}>
        <Icon />
      </a>
    </li>
  );
};
function SocialIcons({ bordered }: { bordered: boolean }) {
  const { facebook, twitter, linkedin, pluralsight, github, stackoverflow } =
    database.information.socialLinks;

  return (
    <ul
      className={
        bordered
          ? "mi-social-icons mi-social-icons-bordered"
          : "mi-social-icons"
      }
    >
      {stackoverflow && (
        <SocialListItem url={stackoverflow} Icon={StackOverflowIcon} />
      )}
      {github && <SocialListItem url={github} Icon={GitHubIcon} />}
      {pluralsight && (
        <SocialListItem url={pluralsight} Icon={PluralsightIcon} />
      )}
      {linkedin && <SocialListItem url={linkedin} Icon={LinkedInIcon} />}
      {facebook && <SocialListItem url={facebook} Icon={FacebookIcon} />}
      {twitter && <SocialListItem url={twitter} Icon={TwitterIcon} />}
    </ul>
  );
}

export { SocialIcons };
